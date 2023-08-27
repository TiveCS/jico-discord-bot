import { BadRequestException, Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';
import {
  JiraIssuePayloadDto,
  JiraPayloadDto,
  JiraSprintPayloadDto,
  JiraSprintUpdatedPayloadDto,
} from '../dto';
import { JiraWebhookEvent } from '../enums/jira-webhook-event.enum';

@Injectable()
export class EmbedHelper {
  embed(event: JiraWebhookEvent, payload: JiraPayloadDto): EmbedBuilder | null {
    const embed = new EmbedBuilder();

    switch (event) {
      case JiraWebhookEvent.IssueDeleted:
      case JiraWebhookEvent.IssueUpdated:
      case JiraWebhookEvent.IssueCreated:
        return this.buildIssue(embed, payload as JiraIssuePayloadDto);

      case JiraWebhookEvent.SprintStarted:
      case JiraWebhookEvent.SprintCreated:
      case JiraWebhookEvent.SprintDeleted:
      case JiraWebhookEvent.SprintClosed:
        return this.buildSprint(embed, payload as JiraSprintPayloadDto);

      case JiraWebhookEvent.SprintUpdated:
        return this.buildSprintUpdated(
          embed,
          payload as JiraSprintUpdatedPayloadDto,
        );

      default:
        return null;
    }
  }

  private buildSprint(
    embed: EmbedBuilder,
    payload: JiraSprintPayloadDto,
  ): EmbedBuilder {
    return embed;
  }

  private buildSprintUpdated(
    embed: EmbedBuilder,
    payload: JiraSprintUpdatedPayloadDto,
  ): EmbedBuilder {
    return embed;
  }

  private buildIssue(
    embed: EmbedBuilder,
    payload: JiraIssuePayloadDto,
  ): EmbedBuilder {
    const { issue } = payload;
    const { project, summary } = issue.fields;

    return embed.setTitle(project.name).setDescription(summary);
  }
}
