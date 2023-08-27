import { Injectable } from '@nestjs/common';
import { WebhookClient } from 'discord.js';

@Injectable()
export class DiscordService {
  async initWebhook(url: string) {
    return new WebhookClient({
      url,
    });
  }
}
