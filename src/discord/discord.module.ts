import { DiscordService } from './discord.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
