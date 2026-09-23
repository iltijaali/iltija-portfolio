import {
  Injectable,
  InternalServerErrorException,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly configService: ConfigService) {}

  private buildTransport() {
    const host = this.configService.get<string>('SMTP_HOST');
    const port = this.configService.get<string>('SMTP_PORT');
    const user = this.configService.get<string>('SMTP_USER');
    const pass = this.configService.get<string>('SMTP_PASS');

    if (!host || !port || !user || !pass) {
      return null;
    }

    return nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    });
  }

  async sendContactMessage(dto: CreateContactDto): Promise<{ sent: boolean }> {
    const transport = this.buildTransport();
    const receiver = this.configService.get<string>('CONTACT_RECEIVER_EMAIL');

    if (!transport || !receiver) {
      this.logger.warn(
        'Contact form submitted but SMTP is not configured (see backend/.env.example).',
      );
      throw new ServiceUnavailableException(
        'Email sending is not configured yet. Please reach out directly via email in the meantime.',
      );
    }

    try {
      await transport.sendMail({
        from: `"Portfolio Contact Form" <${this.configService.get<string>('SMTP_USER')}>`,
        to: receiver,
        replyTo: dto.email,
        subject: `New portfolio message from ${dto.name}`,
        text: `From: ${dto.name} <${dto.email}>\n\n${dto.message}`,
      });
      return { sent: true };
    } catch (error) {
      this.logger.error('Failed to send contact email', error as Error);
      throw new InternalServerErrorException(
        'Could not send your message right now. Please try again later.',
      );
    }
  }
}
