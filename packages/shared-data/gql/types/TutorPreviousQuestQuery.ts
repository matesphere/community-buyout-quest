/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_position_enum_enum, stage_progress_status_enum_enum, document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TutorPreviousQuestQuery
// ====================================================

export interface TutorPreviousQuestQuery_quest_by_pk_teams_students_user {
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  username: string;
  password: string;
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams_students {
  id: any;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  user: TutorPreviousQuestQuery_quest_by_pk_teams_students_user;
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams_stage_progresses_documents {
  id: any;
  status: document_status_enum_enum;
  doc_data: any | null;
  feedback: any | null;
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams_stage_progresses {
  id: any;
  team_id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: TutorPreviousQuestQuery_quest_by_pk_teams_stage_progresses_documents[];
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options {
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options_development_option;
}

export interface TutorPreviousQuestQuery_quest_by_pk_teams {
  id: any;
  name: string;
  /**
   * An array relationship
   */
  students: TutorPreviousQuestQuery_quest_by_pk_teams_students[];
  /**
   * An array relationship
   */
  stage_progresses: TutorPreviousQuestQuery_quest_by_pk_teams_stage_progresses[];
  /**
   * An array relationship
   */
  team_development_options: TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options[];
}

export interface TutorPreviousQuestQuery_quest_by_pk {
  id: any;
  started_at: any | null;
  completed_at: any | null;
  /**
   * An array relationship
   */
  teams: TutorPreviousQuestQuery_quest_by_pk_teams[];
}

export interface TutorPreviousQuestQuery_development_option {
  option: string;
  display_name: string | null;
  model_swot: any | null;
}

export interface TutorPreviousQuestQuery_stage {
  id: number;
  title: string;
}

export interface TutorPreviousQuestQuery {
  /**
   * fetch data from the table: "quest" using primary key columns
   */
  quest_by_pk: TutorPreviousQuestQuery_quest_by_pk | null;
  /**
   * fetch data from the table: "development_option"
   */
  development_option: TutorPreviousQuestQuery_development_option[];
  /**
   * fetch data from the table: "stage"
   */
  stage: TutorPreviousQuestQuery_stage[];
}

export interface TutorPreviousQuestQueryVariables {
  quest_id: any;
}
