/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { student_position_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TeamQuery
// ====================================================

export interface TeamQuery_team_by_pk_students_user {
  username: string;
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface TeamQuery_team_by_pk_students {
  id: any;
  user_id: any;
  school_id: any;
  team_id: any | null;
  position: student_position_enum_enum | null;
  /**
   * An object relationship
   */
  user: TeamQuery_team_by_pk_students_user;
}

export interface TeamQuery_team_by_pk {
  id: any;
  /**
   * An array relationship
   */
  students: TeamQuery_team_by_pk_students[];
}

export interface TeamQuery {
  /**
   * fetch data from the table: "team" using primary key columns
   */
  team_by_pk: TeamQuery_team_by_pk | null;
}

export interface TeamQueryVariables {
  team_id: any;
}
