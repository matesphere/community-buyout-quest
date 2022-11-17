import { gql } from '@apollo/client'

// student

export const SAVE_WORK_INITIAL = gql`
    mutation SaveWorkInitial($stageProgressId: uuid!, $docData: jsonb!) {
        insert_document_one(
            object: {
                stage_progress_id: $stageProgressId
                doc_data: $docData
                status: draft
            }
        ) {
            id
            status
        }
    }
`

export const SAVE_WORK = gql`
    mutation SaveWork($docId: uuid!, $docData: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _set: { doc_data: $docData }
        ) {
            id
            status
        }
    }
`

export const SUBMIT_WORK_INITIAL = gql`
    mutation SubmitWorkInitial($stageProgressId: uuid, $docData: jsonb!) {
        insert_document_one(
            object: {
                stage_progress_id: $stageProgressId
                doc_data: $docData
                status: submitted
            }
        ) {
            id
            status
        }
    }
`

export const SUBMIT_WORK = gql`
    mutation SubmitWork($docId: uuid!, $docData: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _set: { doc_data: $docData, status: submitted }
        ) {
            id
            status
        }
    }
`

export const SET_TEAM_LOGO = gql`
    mutation SetTeamLogo($team_id: uuid!, $logo: String!) {
        update_team_by_pk(pk_columns: { id: $team_id }, _set: { logo: $logo }) {
            id
            logo
        }
    }
`

export const SET_TEAM_POSITIONS_AND_LOGO = gql`
    mutation SetTeamPositions(
        $objects: [student_insert_input!]!
        $stageProgressId: uuid!
        $teamId: uuid!
        $logo: String!
    ) {
        insert_student(
            objects: $objects
            on_conflict: {
                constraint: student_user_id_key
                update_columns: [position]
            }
        ) {
            returning {
                user {
                    id
                }
                position
            }
        }
        update_stage_progress(
            _set: { status: submitted }
            where: { id: { _eq: $stageProgressId } }
        ) {
            returning {
                id
                stage {
                    id
                    title
                }
                status
                team_id
            }
        }
        update_team_by_pk(pk_columns: { id: $teamId }, _set: { logo: $logo }) {
            id
            logo
        }
    }
`

export const CHOOSE_DEVELOPMENT_OPTIONS = gql`
    mutation ChooseDevelopmentOptions(
        $objects: [team_development_option_insert_input!]!
    ) {
        insert_team_development_option(objects: $objects) {
            returning {
                id
            }
        }
    }
`

export const CHOOSE_SHORTLIST_OPTIONS = gql`
    mutation ChooseShortlistOptions($optionsToUpdate: [uuid!]!) {
        update_team_development_option(
            where: { id: { _in: $optionsToUpdate } }
            _set: { shortlist: true }
        ) {
            returning {
                development_option {
                    display_name
                }
                shortlist
            }
        }
    }
`

export const SUBMIT_REFLECTION = gql`
    mutation SubmitReflection($schoolId: uuid!, $docData: jsonb!) {
        insert_student_feedback_one(
            object: { school_id: $schoolId, feedback: $docData }
        ) {
            id
        }
    }
`

// tutor

export const CREATE_QUEST_WITH_TEAMS = gql`
    mutation CreateQuestWithTeams($object: quest_insert_input!) {
        insert_quest_one(object: $object) {
            id
            teams {
                id
                name
            }
        }
    }
`

export const START_QUEST = gql`
    mutation StartQuest($quest_id: uuid!) {
        update_quest_by_pk(
            pk_columns: { id: $quest_id }
            _set: { status: active }
        ) {
            id
            status
        }
    }
`

export const UNLOCK_STAGE = gql`
    mutation UnlockStage($teamId: uuid, $stageId: Int) {
        insert_stage_progress_one(
            object: { team_id: $teamId, stage_id: $stageId, status: unlocked }
        ) {
            id
            team_id
            stage_id
            status
        }
    }
`

export const PROVIDE_MODEL_SWOT = gql`
    mutation UpdateSwotDoc($docId: uuid!, $modelSwot: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _append: { doc_data: $modelSwot }
        ) {
            id
        }
    }
`

export const SUBMIT_FEEDBACK = gql`
    mutation SubmitFeedback($docId: uuid!, $feedbackData: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _set: { feedback: $feedbackData }
        ) {
            id
            status
        }
    }
`

//? should we create new doc_data copy from failed??
export const MARK_FAILED = gql`
    mutation MarkFailed($docId: uuid) {
        update_document(
            _set: { status: draft }
            where: { id: { _eq: $docId } }
        ) {
            returning {
                id
                feedback
                status
            }
        }
    }
`

export const MARK_PASSED = gql`
    mutation MarkPassed($docId: uuid, $stageProgressId: uuid) {
        update_document(
            _set: { status: marked_passed }
            where: { id: { _eq: $docId } }
        ) {
            returning {
                id
                feedback
                status
            }
        }
        update_stage_progress(
            _set: { status: completed }
            where: { id: { _eq: $stageProgressId } }
        ) {
            returning {
                id
                stage {
                    id
                    title
                }
                status
                team_id
            }
        }
    }
`

export const COMPLETE_STAGE = gql`
    mutation CompleteStage($stageProgressId: uuid!) {
        update_stage_progress(
            _set: { status: completed }
            where: { id: { _eq: $stageProgressId } }
        ) {
            returning {
                id
                stage {
                    id
                    title
                }
                status
                team_id
            }
        }
    }
`

export const COMPLETE_QUEST = gql`
    mutation CompleteQuest(
        $questId: uuid!
        $now: timestamptz!
        $feedback: jsonb
    ) {
        update_quest_by_pk(
            pk_columns: { id: $questId }
            _set: {
                status: complete
                completed_at: $now
                tutor_feedback: $feedback
            }
        ) {
            id
            status
        }
    }
`
