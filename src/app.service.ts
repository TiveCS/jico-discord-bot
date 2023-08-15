import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { DiscordService } from './discord/discord.service';
import { SendMessageDto } from './discord/dto';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);
  private readonly TEST_CHANNEL_ID = '1132154787459244163';

  constructor(private readonly discord: DiscordService) {}

  onModuleInit() {
    this.sendMessage({
      channelId: this.TEST_CHANNEL_ID,
      message: 'Bot started',
    });
  }

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
