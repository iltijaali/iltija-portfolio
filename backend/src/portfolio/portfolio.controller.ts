import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolio() {
    return this.portfolioService.getPortfolio();
  }
}
