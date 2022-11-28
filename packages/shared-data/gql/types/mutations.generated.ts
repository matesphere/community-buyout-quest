import * as Types from './baseTypes';

export type SaveWorkInitialMutationVariables = Types.Exact<{
  stageProgressId: Types.Scalars['uuid'];
  docData: Types.Scalars['jsonb'];
}>;


export type SaveWorkInitialMutation = { insert_document_one?: { id: any, status: Types.Document_Status_Enum_Enum } | null };

export type SaveWorkMutationVariables = Types.Exact<{
  docId: Types.Scalars['uuid'];
  docData: Types.Scalars['jsonb'];
}>;


export type SaveWorkMutation = { update_document_by_pk?: { id: any, status: Types.Document_Status_Enum_Enum } | null };

export type SubmitWorkInitialMutationVariables = Types.Exact<{
  stageProgressId?: Types.InputMaybe<Types.Scalars['uuid']>;
  docData: Types.Scalars['jsonb'];
}>;


export type SubmitWorkInitialMutation = { insert_document_one?: { id: any, status: Types.Document_Status_Enum_Enum } | null };

export type SubmitWorkMutationVariables = Types.Exact<{
  docId: Types.Scalars['uuid'];
  docData: Types.Scalars['jsonb'];
}>;


export type SubmitWorkMutation = { update_document_by_pk?: { id: any, status: Types.Document_Status_Enum_Enum } | null };

export type SetTeamLogoMutationVariables = Types.Exact<{
  team_id: Types.Scalars['uuid'];
  logo: Types.Scalars['String'];
}>;


export type SetTeamLogoMutation = { update_team_by_pk?: { id: any, logo?: string | null } | null };

export type SetTeamPositionsMutationVariables = Types.Exact<{
  objects: Array<Types.Student_Insert_Input> | Types.Student_Insert_Input;
  stageProgressId: Types.Scalars['uuid'];
  teamId: Types.Scalars['uuid'];
  logo: Types.Scalars['String'];
}>;


export type SetTeamPositionsMutation = { insert_student?: { returning: Array<{ position?: Types.Student_Position_Enum_Enum | null, user: { id: any } }> } | null, update_stage_progress?: { returning: Array<{ id: any, status: Types.Stage_Progress_Status_Enum_Enum, team_id: any, stage: { id: number, title: string } }> } | null, update_team_by_pk?: { id: any, logo?: string | null } | null };

export type ChooseDevelopmentOptionsMutationVariables = Types.Exact<{
  objects: Array<Types.Team_Development_Option_Insert_Input> | Types.Team_Development_Option_Insert_Input;
}>;


export type ChooseDevelopmentOptionsMutation = { insert_team_development_option?: { returning: Array<{ id: any }> } | null };

export type ChooseShortlistOptionsMutationVariables = Types.Exact<{
  optionsToUpdate: Array<Types.Scalars['uuid']> | Types.Scalars['uuid'];
}>;


export type ChooseShortlistOptionsMutation = { update_team_development_option?: { returning: Array<{ shortlist: boolean, development_option: { display_name?: string | null } }> } | null };

export type SubmitReflectionMutationVariables = Types.Exact<{
  schoolId: Types.Scalars['uuid'];
  docData: Types.Scalars['jsonb'];
}>;


export type SubmitReflectionMutation = { insert_student_feedback_one?: { id: any } | null };

export type CreateQuestWithTeamsMutationVariables = Types.Exact<{
  object: Types.Quest_Insert_Input;
}>;


export type CreateQuestWithTeamsMutation = { insert_quest_one?: { id: any, teams: Array<{ id: any, name: string }> } | null };

export type StartQuestMutationVariables = Types.Exact<{
  quest_id: Types.Scalars['uuid'];
}>;


export type StartQuestMutation = { update_quest_by_pk?: { id: any, status: Types.Quest_Status_Enum_Enum } | null };

export type UnlockStageMutationVariables = Types.Exact<{
  teamId?: Types.InputMaybe<Types.Scalars['uuid']>;
  stageId?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type UnlockStageMutation = { insert_stage_progress_one?: { id: any, team_id: any, stage_id: number, status: Types.Stage_Progress_Status_Enum_Enum } | null };

export type UpdateSwotDocMutationVariables = Types.Exact<{
  docId: Types.Scalars['uuid'];
  modelSwot: Types.Scalars['jsonb'];
}>;


export type UpdateSwotDocMutation = { update_document_by_pk?: { id: any } | null };

export type SubmitFeedbackMutationVariables = Types.Exact<{
  docId: Types.Scalars['uuid'];
  feedbackData: Types.Scalars['jsonb'];
}>;


export type SubmitFeedbackMutation = { update_document_by_pk?: { id: any, status: Types.Document_Status_Enum_Enum } | null };

export type MarkFailedMutationVariables = Types.Exact<{
  docId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type MarkFailedMutation = { update_document?: { returning: Array<{ id: any, feedback?: any | null, status: Types.Document_Status_Enum_Enum }> } | null };

export type MarkPassedMutationVariables = Types.Exact<{
  docId?: Types.InputMaybe<Types.Scalars['uuid']>;
  stageProgressId?: Types.InputMaybe<Types.Scalars['uuid']>;
}>;


export type MarkPassedMutation = { update_document?: { returning: Array<{ id: any, feedback?: any | null, status: Types.Document_Status_Enum_Enum }> } | null, update_stage_progress?: { returning: Array<{ id: any, status: Types.Stage_Progress_Status_Enum_Enum, team_id: any, stage: { id: number, title: string } }> } | null };

export type CompleteStageMutationVariables = Types.Exact<{
  stageProgressId: Types.Scalars['uuid'];
}>;


export type CompleteStageMutation = { update_stage_progress?: { returning: Array<{ id: any, status: Types.Stage_Progress_Status_Enum_Enum, team_id: any, stage: { id: number, title: string } }> } | null };

export type CompleteQuestMutationVariables = Types.Exact<{
  questId: Types.Scalars['uuid'];
  now: Types.Scalars['timestamptz'];
  feedback?: Types.InputMaybe<Types.Scalars['jsonb']>;
}>;


export type CompleteQuestMutation = { update_quest_by_pk?: { id: any, status: Types.Quest_Status_Enum_Enum } | null };
