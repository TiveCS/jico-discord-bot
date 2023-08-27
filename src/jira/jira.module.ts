import { JiraService } from './jira.service';
import { JiraController } from './jira.controller';
import { Global, Module } from '@nestjs/common';
import { EmbedHelper } from './helper/embed.helper';
import { NotificationModule } from '../notification/notification.module';

@Global()
@Module({
  imports: [NotificationModule],
  controllers: [JiraController],
  providers: [JiraService, EmbedHelper],
  exports: [JiraService],
})
export class JiraModule {}
