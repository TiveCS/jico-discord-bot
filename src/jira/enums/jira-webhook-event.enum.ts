export const JiraWebhookEvent = {
  Unknown: 'unknown',

  IssueCreated: 'jira:issue_created',
  IssueUpdated: 'jira:issue_updated',
  IssueDeleted: 'jira:issue_deleted',

  CommentCreated: 'comment_created',
  CommentUpdated: 'comment_updated',
  CommentDeleted: 'comment_deleted',

  WorklogCreated: 'worklog_created',
  WorklogUpdated: 'worklog_updated',
  WorklogDeleted: 'worklog_deleted',

  SprintCreated: 'sprint_created',
  SprintUpdated: 'sprint_updated',
  SprintDeleted: 'sprint_deleted',
  SprintStarted: 'sprint_started',
  SprintClosed: 'sprint_closed',

  BoardCreated: 'board_created',
  BoardUpdated: 'board_updated',
  BoardDeleted: 'board_deleted',
  BoardConfigurationChanged: 'board_configuration_changed',

  ProjectCreated: 'project_created',
  ProjectUpdated: 'project_updated',
  ProjectDeleted: 'project_deleted',
};

export type JiraWebhookEvent =
  (typeof JiraWebhookEvent)[keyof typeof JiraWebhookEvent];

export function getJiraEvent(strEvent: string): JiraWebhookEvent {
  const event = Object.keys(JiraWebhookEvent).find(
    (key) => JiraWebhookEvent[key] === strEvent,
  );

  return event ? JiraWebhookEvent[event] : JiraWebhookEvent.Unknown;
}
