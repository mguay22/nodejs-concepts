import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger();

  getHello(): string {
    return 'Hello World!';
  }

  blocking() {
    const now = new Date().getTime();
    while (new Date().getTime() < now + 10000) {}
    return {};
  }

  async nonBlocking() {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        resolve({});
      }, 10000);
    });
  }

  async promises() {
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(await this.sleep());
    }
    return results;
  }

  async promisesParallel() {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(this.sleep());
    }
    return Promise.all(promises);
  }

  private async sleep() {
    return new Promise((resolve) => {
      this.logger.log('Start sleep');
      setTimeout(() => {
        this.logger.log('Sleep complete');
        resolve({});
      }, 1000);
    });
  }
}
