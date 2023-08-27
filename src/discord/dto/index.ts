import { IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JiraPayloadDto } from '../../jira/dto';

export class DiscordSendMessageDto {
  @IsUrl()
  webhookUrl: string;

  @ValidateNested()
  @Type(() => JiraPayloadDto)
  payload: JiraPayloadDto;
}
