/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { quest_status_enum_enum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: StartQuest
// ====================================================

export interface StartQuest_update_quest_by_pk {
  id: any;
  status: quest_status_enum_enum;
}

export interface StartQuest {
  /**
   * update single row of the table: "quest"
   */
  update_quest_by_pk: StartQuest_update_quest_by_pk | null;
}

export interface StartQuestVariables {
  quest_id: any;
}
