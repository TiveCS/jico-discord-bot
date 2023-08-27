import { Injectable } from '@nestjs/common';
import { JiraPayloadDto } from './dto';
import { getJiraEvent } from './enums/jira-webhook-event.enum';
import { EmbedHelper } from './helper/embed.helper';

@Injectable()
export class JiraService {
  constructor(private embedHelper: EmbedHelper) {}

  process(payload: JiraPayloadDto) {
    const { webhookEvent } = payload;

    const event = getJiraEvent(webhookEvent);

    const embed = this.embedHelper.embed(event, payload);

    return {
      event,
      embed,
    };
  }
}
