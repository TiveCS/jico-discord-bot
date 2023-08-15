import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { DiscordService } from './discord/discord.service';
import { SendMessageDto } from './discord/dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly discord: DiscordService) {}

  async sendMessage({ channelId, message }: SendMessageDto) {
    this.logger.log(`Sending message to ${channelId}...`);

    const channel = await this.discord.client.channels.fetch(channelId, {});

    if (!channel) {
      throw new NotFoundException('Channel not found');
    }

    if (!channel.isTextBased()) {
      throw new BadRequestException('Channel is not a text channel');
    }

    this.logger.log(`Sending message to ${channel.id}`);

    return channel.send(message);
  }
}
