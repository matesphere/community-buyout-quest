import * as Types from './baseTypes';

export type LoggedInQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type LoggedInQuery = { user_by_pk?: { id: any, first_name: string, student?: { id: any, team?: { id: any, students: Array<{ id: any, user: { id: any, times_logged_in: number } }> } | null } | null } | null };

export type NavQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type NavQuery = { user_by_pk?: { id: any, full_name?: string | null, username: string, student?: { id: any, position?: Types.Student_Position_Enum_Enum | null, team?: { id: any, name: string, stage_progresses: Array<{ stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum }> } | null } | null } | null };

export type TeamHubQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type TeamHubQuery = { user_by_pk?: { id: any, full_name?: string | null, student?: { id: any, team?: { id: any, name: string, logo?: string | null, stage_progresses: Array<{ id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ status: Types.Document_Status_Enum_Enum }> }>, students: Array<{ id: any, position?: Types.Student_Position_Enum_Enum | null, user: { id: any, full_name?: string | null } }>, team_development_options: Array<{ id: any, shortlist: boolean, team_choice_name?: string | null, development_option: { id: number, display_name?: string | null, option: string } }> } | null } | null } | null, stage: Array<{ id: number, title: string }> };

export type TeamHubSubSubscriptionVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type TeamHubSubSubscription = { user_by_pk?: { id: any, full_name?: string | null, student?: { team?: { name: string, stage_progresses: Array<{ stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum }>, students: Array<{ user: { full_name?: string | null } }>, team_development_options: Array<{ shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> } | null } | null } | null };

export type StageQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  stage_id: Types.Scalars['Int'];
  includeDevOptions: Types.Scalars['Boolean'];
}>;


export type StageQuery = { team_by_pk?: { id: any, name: string, stage_progresses: Array<{ id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, feedback?: any | null }> }>, team_development_options?: Array<{ id: any, team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> } | null, stage_by_pk?: { title: string } | null };

export type DocumentQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  stage_id: Types.Scalars['Int'];
  includeDevOptions: Types.Scalars['Boolean'];
}>;


export type DocumentQuery = { team_by_pk?: { id: any, stage_progresses: Array<{ id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, status: Types.Document_Status_Enum_Enum, feedback?: any | null, doc_data?: any | null }> }>, team_development_options?: Array<{ id: any, team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> } | null, stage_by_pk?: { title: string } | null };

export type DocumentCompleteQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  stage_id: Types.Scalars['Int'];
  includeDevOptions: Types.Scalars['Boolean'];
}>;


export type DocumentCompleteQuery = { team_by_pk?: { id: any, stage_progresses: Array<{ id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, doc_data?: any | null, feedback?: any | null }> }>, team_development_options?: Array<{ id: any, team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> } | null, stage_by_pk?: { title: string } | null };

export type TeamQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
}>;


export type TeamQuery = { team_by_pk?: { id: any, students: Array<{ id: any, user_id: any, school_id: any, team_id?: any | null, position?: Types.Student_Position_Enum_Enum | null, user: { username: string, full_name?: string | null } }> } | null };

export type Stage2TaskQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
}>;


export type Stage2TaskQuery = { team_by_pk?: { id: any, logo?: string | null, students: Array<{ id: any, user_id: any, school_id: any, team_id?: any | null, position?: Types.Student_Position_Enum_Enum | null, user: { username: string, full_name?: string | null } }>, stage_progresses: Array<{ id: any, status: Types.Stage_Progress_Status_Enum_Enum }> } | null };

export type Stage3TaskQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  quest_type: Types.Scalars['String'];
}>;


export type Stage3TaskQuery = { team_by_pk?: { id: any, team_development_options: Array<{ id: any }> } | null, development_option: Array<{ id: number, option: string, display_name?: string | null, location?: string | null }> };

export type SwotExampleQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  quest_type: Types.Scalars['String'];
}>;


export type SwotExampleQuery = { team_by_pk?: { id: any, stage_progresses: Array<{ documents: Array<{ doc_data?: any | null }> }> } | null, development_option: Array<{ option: string, display_name?: string | null }> };

export type Stage4TaskQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
}>;


export type Stage4TaskQuery = { team_by_pk?: { id: any, team_development_options: Array<{ id: any, team_choice_name?: string | null, team_choice_location?: string | null, shortlist: boolean, development_option: { id: number, option: string, display_name?: string | null, location?: string | null } }> } | null };

export type Stage6QueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
}>;


export type Stage6Query = { team_by_pk?: { team_development_options: Array<{ id: any, shortlist: boolean, development_option: { display_name?: string | null } }> } | null };

export type Stage6WorkQueryVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  dev_option_id: Types.Scalars['uuid'];
}>;


export type Stage6WorkQuery = { team_by_pk?: { id: any, stage_progresses: Array<{ stage_id: number, documents: Array<{ doc_data?: any | null }> }>, team_development_options: Array<{ shortlist: boolean, development_option: { option: string, display_name?: string | null } }> } | null };

export type Stage8QueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type Stage8Query = { user_by_pk?: { student?: { id: any, team?: { name: string, students: Array<{ user: { full_name?: string | null } }> } | null } | null } | null };

export type TutorCurrentQuestQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
  quest_type: Types.Scalars['String'];
}>;


export type TutorCurrentQuestQuery = { user_by_pk?: { id: any, tutor?: { quests: Array<{ id: any, teams: Array<{ id: any, name: string, students: Array<{ id: any, position?: Types.Student_Position_Enum_Enum | null, user: { full_name?: string | null, username: string, password: string } }>, stage_progresses: Array<{ id: any, team_id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, status: Types.Document_Status_Enum_Enum, doc_data?: any | null, feedback?: any | null }> }>, team_development_options: Array<{ team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> }> }> } | null } | null, development_option: Array<{ option: string, display_name?: string | null, model_swot?: any | null }>, stage: Array<{ id: number, title: string }> };

export type TutorPreviousQuestQueryVariables = Types.Exact<{
  quest_id: Types.Scalars['uuid'];
  quest_type: Types.Scalars['String'];
}>;


export type TutorPreviousQuestQuery = { quest_by_pk?: { id: any, started_at?: any | null, completed_at?: any | null, teams: Array<{ id: any, name: string, students: Array<{ id: any, position?: Types.Student_Position_Enum_Enum | null, user: { full_name?: string | null, username: string, password: string } }>, stage_progresses: Array<{ id: any, team_id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, status: Types.Document_Status_Enum_Enum, doc_data?: any | null, feedback?: any | null }> }>, team_development_options: Array<{ team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> }> } | null, development_option: Array<{ option: string, display_name?: string | null, model_swot?: any | null }>, stage: Array<{ id: number, title: string }> };

export type TutorDocumentQueryVariables = Types.Exact<{
  stage_progress_id: Types.Scalars['uuid'];
  includeDevOptions: Types.Scalars['Boolean'];
}>;


export type TutorDocumentQuery = { stage_progress_by_pk?: { id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, status: Types.Document_Status_Enum_Enum, feedback?: any | null, doc_data?: any | null }>, team: { name: string, team_development_options?: Array<{ id: any, team_choice_name?: string | null, shortlist: boolean, development_option: { id: number, display_name?: string | null, option: string } }> } } | null };

export type CreateTeamQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type CreateTeamQuery = { user_by_pk?: { id: any, tutor?: { id: any } | null } | null };

export type TutorCurrentQuestSubSubscriptionVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type TutorCurrentQuestSubSubscription = { user_by_pk?: { id: any, full_name?: string | null, username: string, email: string, tutor?: { id: any, school: { name: string }, quests: Array<{ id: any, teams: Array<{ id: any, name: string, students: Array<{ id: any, user: { full_name?: string | null } }>, stage_progresses: Array<{ id: any, team_id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum, documents: Array<{ id: any, status: Types.Document_Status_Enum_Enum, feedback?: any | null }> }> }> }> } | null } | null };

export type TutorHubQueryVariables = Types.Exact<{
  user_id: Types.Scalars['uuid'];
}>;


export type TutorHubQuery = { user_by_pk?: { id: any, full_name?: string | null, username: string, email: string, tutor?: { school: { name: string }, quests: Array<{ id: any, status: Types.Quest_Status_Enum_Enum, started_at?: any | null, completed_at?: any | null, teams: Array<{ id: any, name: string }> }> } | null } | null };
