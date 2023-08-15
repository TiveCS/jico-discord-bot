import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';

@Injectable()
export class DiscordService implements OnModuleInit {
  readonly client: Client;
  private readonly logger: Logger = new Logger(DiscordService.name);

  constructor(private config: ConfigService) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
      ],
    });
  }

  private listenOnClientReady() {
    this.client.on(Events.ClientReady, () => {
      this.logger.log(`Logged in as ${this.client.user.tag}!`);
    });
  }

  async onModuleInit() {
    this.listenOnClientReady();

    const token = this.config.get<string>('DISCORD_TOKEN');
    await this.client.login(token);
  }
}
