import { WebhookUserPayload } from './user.type';

export type WebhookCommentPayload = {
  id: string;
  self: string;
  body: string;
  author: WebhookUserPayload;
  updateAuthor: WebhookUserPayload;
  created: string;
  updated: string;
  jsdPublic: boolean;
};
