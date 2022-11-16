/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { stage_progress_status_enum_enum, document_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TutorDocumentQuery
// ====================================================

export interface TutorDocumentQuery_stage_progress_by_pk_documents {
  id: any;
  status: document_status_enum_enum;
  feedback: any | null;
  doc_data: any | null;
}

export interface TutorDocumentQuery_stage_progress_by_pk_team_team_development_options_development_option {
  id: number;
  display_name: string | null;
  option: string;
}

export interface TutorDocumentQuery_stage_progress_by_pk_team_team_development_options {
  id: any;
  team_choice_name: string | null;
  shortlist: boolean;
  /**
   * An object relationship
   */
  development_option: TutorDocumentQuery_stage_progress_by_pk_team_team_development_options_development_option;
}

export interface TutorDocumentQuery_stage_progress_by_pk_team {
  name: string;
  /**
   * An array relationship
   */
  team_development_options: TutorDocumentQuery_stage_progress_by_pk_team_team_development_options[];
}

export interface TutorDocumentQuery_stage_progress_by_pk {
  id: any;
  stage_id: number;
  status: stage_progress_status_enum_enum;
  /**
   * An array relationship
   */
  documents: TutorDocumentQuery_stage_progress_by_pk_documents[];
  /**
   * An object relationship
   */
  team: TutorDocumentQuery_stage_progress_by_pk_team;
}

export interface TutorDocumentQuery {
  /**
   * fetch data from the table: "stage_progress" using primary key columns
   */
  stage_progress_by_pk: TutorDocumentQuery_stage_progress_by_pk | null;
}

export interface TutorDocumentQueryVariables {
  stage_progress_id: any;
  includeDevOptions: boolean;
}
