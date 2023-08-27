import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { DiscordSendMessageDto } from '../discord/dto';

@Controller('/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendMessage(@Body() dto: DiscordSendMessageDto) {
    await this.notificationService.sendMessage(dto.webhookUrl, dto.payload);
  }
}
