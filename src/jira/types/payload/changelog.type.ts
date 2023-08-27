export type ChangelogItem = {
  field: string;
  fieldtype: string;
  fieldId: string;
  from: string | null;
  fromString: string | null;
  to: string | null;
  toString: string | null;
};

export type WebhookChangelogPayload = {
  id: string;
  items: ChangelogItem[];
};
