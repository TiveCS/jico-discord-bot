import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMessageDto } from './discord/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(@Body() payload: SendMessageDto) {
    await this.appService.sendMessage(payload);
  }
}
