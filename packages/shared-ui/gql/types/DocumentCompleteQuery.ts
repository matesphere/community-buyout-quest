/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: DocumentCompleteQuery
// ====================================================

export interface DocumentCompleteQuery_team_by_pk_stage_progresses_documents {
  id: any;
  doc_data: any | null;
  feedback: any | null;
}

export interface DocumentCompleteQuery_team_by_pk_stage_progresses {
  id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: DocumentCompleteQuery_team_by_pk_stage_progresses_documents[];
}

export interface DocumentCompleteQuery_team_by_pk_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface DocumentCompleteQuery_team_by_pk_team_development_options {
  id: any;
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: DocumentCompleteQuery_team_by_pk_team_development_options_development_option;
}

export interface DocumentCompleteQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  stage_progresses: DocumentCompleteQuery_team_by_pk_stage_progresses[];
  /**
   * An array relationship
   */
  team_development_options: DocumentCompleteQuery_team_by_pk_team_development_options[];
}

export interface DocumentCompleteQuery_stage_by_pk {
  title: string;
}

export interface DocumentCompleteQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: DocumentCompleteQuery_team_by_pk | null;
  /**
   * fetch data from the table: "stage" using primary key columns
   */
  stage_by_pk: DocumentCompleteQuery_stage_by_pk | null;
}

export interface DocumentCompleteQueryVariables {
  team_id: any;
  stage_id: number;
  includeDevOptions: boolean;
}
