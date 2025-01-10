import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async health() {
    return 'App is running';
  }
}
