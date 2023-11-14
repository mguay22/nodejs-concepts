import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  blocking() {
    return this.appService.blocking();
  }

  @Get('nonBlocking')
  async nonBlocking() {
    return this.appService.nonBlocking();
  }

  @Get('promises')
  async promises() {
    return this.appService.promises();
  }

  @Get('promisesParallel')
  async promisesParallel() {
    return this.appService.promisesParallel();
  }
}
