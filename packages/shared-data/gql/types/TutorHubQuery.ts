/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { quest_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TutorHubQuery
// ====================================================

export interface TutorHubQuery_user_by_pk_tutor_school {
  name: string;
}

export interface TutorHubQuery_user_by_pk_tutor_quests_teams {
  id: any;
  name: string;
}

export interface TutorHubQuery_user_by_pk_tutor_quests {
  id: any;
  status: quest_status_enum_enum;
  started_at: any | null;
  completed_at: any | null;
  /**
   * An array relationship
   */
  teams: TutorHubQuery_user_by_pk_tutor_quests_teams[];
}

export interface TutorHubQuery_user_by_pk_tutor {
  /**
   * An object relationship
   */
  school: TutorHubQuery_user_by_pk_tutor_school;
  /**
   * An array relationship
   */
  quests: TutorHubQuery_user_by_pk_tutor_quests[];
}

export interface TutorHubQuery_user_by_pk {
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
  tutor: TutorHubQuery_user_by_pk_tutor | null;
}

export interface TutorHubQuery {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: TutorHubQuery_user_by_pk | null;
}

export interface TutorHubQueryVariables {
  user_id: any;
}
