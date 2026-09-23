import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(2000)
  message!: string;
}
