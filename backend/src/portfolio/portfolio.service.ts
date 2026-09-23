import { Injectable } from '@nestjs/common';
import {
  education,
  experience,
  profile,
  projects,
  skills,
} from './portfolio-data';

@Injectable()
export class PortfolioService {
  getPortfolio() {
    return { profile, skills, experience, projects, education };
  }
}
