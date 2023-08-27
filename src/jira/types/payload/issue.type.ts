import { WebhookUserPayload } from './user.type';

export type IssueType = {
  id: string;
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  subtask: boolean;
  avatarId: number;
  entityId: string;
  hierarchyLevel: number;
};

export type IssueProject = {
  id: string;
  self: string;
  key: string;
  name: string;
  projectTypeKey: string;
  simplified: boolean;
};

export type IssuePriority = {
  id: string;
  name: string;
  self: string;
  iconUrl: string;
};

export type IssueStatus = {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: IssueStatusCategory;
};

export type IssueStatusCategory = {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
};

export type IssueProgress = {
  progress: number;
  total: number;
};

export type IssueSubtask = {
  id: string;
  key: string;
  self: string;
  fields: {
    summary: string;
    status: IssueStatus;
    priority: IssuePriority;
    issuetype: IssueType;
  };
};

export type IssueFieldsPayload = {
  statuscategorychangedate: string;
  created: string;
  updated: string;
  summary: string;
  description: string | null;
  issuetype: IssueType;
  project: IssueProject;
  priority: IssuePriority;
  status: IssueStatus;
  creator: WebhookUserPayload;
  reporter: WebhookUserPayload;
  assignee: WebhookUserPayload | null;
  progress: IssueProgress;
  duedate: string | null;
  subtasks: IssueSubtask[]; // TODO: Implement IssueSubtask
};

export type WebhookIssuePayload = {
  id: string;
  self: string;
  key: string;
  fields: IssueFieldsPayload;
};
