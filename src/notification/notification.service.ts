import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { DiscordService } from '../discord/discord.service';
import { JiraPayloadDto } from '../jira/dto';
import { JiraWebhookEvent } from '../jira/enums/jira-webhook-event.enum';
import { JiraService } from '../jira/jira.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly discord: DiscordService,
    private readonly jira: JiraService,
  ) {}

  async sendMessage(webhookUrl: string, payload: JiraPayloadDto) {
    this.logger.log(`Sending message to ${webhookUrl}`);

    const data = this.jira.process(payload);

    if (data.event === JiraWebhookEvent.Unknown) {
      throw new BadRequestException('Unsupported event type');
    }

    if (data.embed === null) {
      throw new BadRequestException('Embed data is empty');
    }

    const webhook = await this.discord.initWebhook(webhookUrl);

    await webhook.send({
      embeds: [data.embed],
    });

    this.logger.log(`Message sent to ${webhookUrl}`);
  }
}
