export type WebhookSprintPayload = {
  id: number;
  self: string;
  state: string;
  name: string;
  startDate: string;
  endDate: string;
  completeDate?: string;
  originBoardId: number;
  goal: string;
};
