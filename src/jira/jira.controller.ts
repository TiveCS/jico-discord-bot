import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { NotificationService } from 'src/notification/notification.service';
import { JiraPayloadDto } from './dto';

@Controller('jira')
export class JiraController {
  private readonly TEST_WEBHOOK_URL =
    'https://discord.com/api/webhooks/1142098074127315004/NZZ1RlnHVvsDLwEanCPRMcmRkZDlpz4PsYe3acMnZpdseIbnCJUq6H4H044YSa4J97BS';

  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async onJiraEvent(@Body() payload: JiraPayloadDto) {
    await this.notificationService.sendMessage(this.TEST_WEBHOOK_URL, payload);
  }
}
