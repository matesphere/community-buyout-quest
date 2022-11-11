/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum, document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: TutorCurrentQuestSub
// ====================================================

export interface TutorCurrentQuestSub_user_by_pk_tutor_school {
  name: string;
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_students_user {
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_students {
  id: any;
  /**
   * An object relationship
   */
  user: TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_students_user;
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_stage_progresses_documents {
  id: any;
  status: document_status_enum_enum;
  feedback: any | null;
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_stage_progresses {
  id: any;
  team_id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_stage_progresses_documents[];
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests_teams {
  id: any;
  name: string;
  /**
   * An array relationship
   */
  students: TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_students[];
  /**
   * An array relationship
   */
  stage_progresses: TutorCurrentQuestSub_user_by_pk_tutor_quests_teams_stage_progresses[];
}

export interface TutorCurrentQuestSub_user_by_pk_tutor_quests {
  id: any;
  /**
   * An array relationship
   */
  teams: TutorCurrentQuestSub_user_by_pk_tutor_quests_teams[];
}

export interface TutorCurrentQuestSub_user_by_pk_tutor {
  id: any;
  /**
   * An object relationship
   */
  school: TutorCurrentQuestSub_user_by_pk_tutor_school;
  /**
   * An array relationship
   */
  quests: TutorCurrentQuestSub_user_by_pk_tutor_quests[];
}

export interface TutorCurrentQuestSub_user_by_pk {
  id: any;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
  username: string;
  email: string;
  /**
   * An object relationship
   */
  tutor: TutorCurrentQuestSub_user_by_pk_tutor | null;
}

export interface TutorCurrentQuestSub {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: TutorCurrentQuestSub_user_by_pk | null;
}

export interface TutorCurrentQuestSubVariables {
  user_id: any;
}
