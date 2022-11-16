/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_position_enum_enum, stage_progress_status_enum_enum, document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TutorCurrentQuestQuery
// ====================================================

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students_user {
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  username: string;
  password: string;
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students {
  id: any;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  user: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students_user;
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_stage_progresses_documents {
  id: any;
  status: document_status_enum_enum;
  doc_data: any | null;
  feedback: any | null;
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_stage_progresses {
  id: any;
  team_id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_stage_progresses_documents[];
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options {
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options_development_option;
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams {
  id: any;
  name: string;
  /**
   * An array relationship
   */
  students: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students[];
  /**
   * An array relationship
   */
  stage_progresses: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_stage_progresses[];
  /**
   * An array relationship
   */
  team_development_options: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options[];
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor_quests {
  id: any;
  /**
   * An array relationship
   */
  teams: TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams[];
}

export interface TutorCurrentQuestQuery_user_by_pk_tutor {
  /**
   * An array relationship
   */
  quests: TutorCurrentQuestQuery_user_by_pk_tutor_quests[];
}

export interface TutorCurrentQuestQuery_user_by_pk {
  id: any;
  /**
   * An object relationship
   */
  tutor: TutorCurrentQuestQuery_user_by_pk_tutor | null;
}

export interface TutorCurrentQuestQuery_development_option {
  option: string;
  display_name: string | null;
  model_swot: any | null;
}

export interface TutorCurrentQuestQuery_stage {
  id: number;
  title: string;
}

export interface TutorCurrentQuestQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: TutorCurrentQuestQuery_user_by_pk | null;
  /**
   * fetch data from the table: "development_option"
   */
  development_option: TutorCurrentQuestQuery_development_option[];
  /**
   * fetch data from the table: "stage"
   */
  stage: TutorCurrentQuestQuery_stage[];
}

export interface TutorCurrentQuestQueryVariables {
  user_id: any;
}
