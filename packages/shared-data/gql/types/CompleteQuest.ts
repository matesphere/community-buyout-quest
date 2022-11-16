/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { quest_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteQuest
// ====================================================

export interface CompleteQuest_update_quest_by_pk {
  id: any;
  status: quest_status_enum_enum;
}

export interface CompleteQuest {
  /**
   * update single row of the table: "quest"
   */
  update_quest_by_pk: CompleteQuest_update_quest_by_pk | null;
}

export interface CompleteQuestVariables {
  questId: any;
  now: any;
  feedback?: any | null;
}
