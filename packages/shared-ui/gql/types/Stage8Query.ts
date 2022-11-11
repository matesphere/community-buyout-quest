/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Stage8Query
// ====================================================

export interface Stage8Query_user_by_pk_student_team_students_user {
  /**
   * A computed field, executes function "user_full_name"
   */
  full_name: string | null;
}

export interface Stage8Query_user_by_pk_student_team_students {
  /**
   * An object relationship
   */
  user: Stage8Query_user_by_pk_student_team_students_user;
}

export interface Stage8Query_user_by_pk_student_team {
  name: string;
  /**
   * An array relationship
   */
  students: Stage8Query_user_by_pk_student_team_students[];
}

export interface Stage8Query_user_by_pk_student {
  id: any;
  /**
   * An object relationship
   */
  team: Stage8Query_user_by_pk_student_team | null;
}

export interface Stage8Query_user_by_pk {
  /**
   * An object relationship
   */
  student: Stage8Query_user_by_pk_student | null;
}

export interface Stage8Query {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: Stage8Query_user_by_pk | null;
}

export interface Stage8QueryVariables {
  user_id: any;
}
