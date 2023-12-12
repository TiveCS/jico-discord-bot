import { Body, Controller, Logger, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { DiscordSendMessageDto } from '../discord/dto';

@Controller('/notification')
export class NotificationController {
  private logger: Logger = new Logger('NotificationController');

  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendMessage(@Body() dto: DiscordSendMessageDto) {
    this.logger.log(`Sending message to ${dto.webhookUrl}`);
    await this.notificationService.sendMessage(dto.webhookUrl, dto.payload);
    this.logger.log(`Message sent to ${dto.webhookUrl}`);
  }
}
