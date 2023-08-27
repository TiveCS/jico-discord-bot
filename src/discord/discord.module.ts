import { DiscordService } from './discord.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
