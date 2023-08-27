import { IsNumber, IsString } from 'class-validator';
import { WebhookIssuePayload } from '../types/payload/issue.type';
import { WebhookSprintPayload } from '../types/payload/sprint.type';

export class JiraPayloadDto {
  @IsNumber()
  timestamp: number;

  @IsString()
  webhookEvent: string;
}

export class JiraIssuePayloadDto extends JiraPayloadDto {
  issue: WebhookIssuePayload;
}

export class JiraSprintPayloadDto extends JiraPayloadDto {
  sprint: WebhookSprintPayload;
}

export class JiraSprintUpdatedPayloadDto extends JiraIssuePayloadDto {
  oldValue: WebhookSprintPayload;
}
