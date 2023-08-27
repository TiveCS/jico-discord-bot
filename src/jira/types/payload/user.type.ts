export type WebhookUserPayload = {
  self: string;
  acocuntId: string;
  displayName: string;
  avatarUrls: { [key: string]: string };
  active: boolean;
  timeZone: string;
  accountType: string;
};
