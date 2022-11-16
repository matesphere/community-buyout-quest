/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { quest_insert_input } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateQuestWithTeams
// ====================================================

export interface CreateQuestWithTeams_insert_quest_one_teams {
  id: any;
  name: string;
}

export interface CreateQuestWithTeams_insert_quest_one {
  id: any;
  /**
   * An array relationship
   */
  teams: CreateQuestWithTeams_insert_quest_one_teams[];
}

export interface CreateQuestWithTeams {
  /**
   * insert a single row into the table: "quest"
   */
  insert_quest_one: CreateQuestWithTeams_insert_quest_one | null;
}

export interface CreateQuestWithTeamsVariables {
  object: quest_insert_input;
}
