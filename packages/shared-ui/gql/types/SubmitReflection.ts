/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitReflection
// ====================================================

export interface SubmitReflection_insert_student_feedback_one {
  id: any;
}

export interface SubmitReflection {
  /**
   * insert a single row into the table: "student_feedback"
   */
  insert_student_feedback_one: SubmitReflection_insert_student_feedback_one | null;
}

export interface SubmitReflectionVariables {
  schoolId: any;
  docData: any;
}
