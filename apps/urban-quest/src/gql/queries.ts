import { gql } from '@apollo/client'
import { graphql } from 'gatsby'

// student

export const STAGE_LANDING_CONTENT_FRAG = graphql`
    fragment StageLandingPageContent on GraphCMS_StageLandingPage {
        stageTitle
        stageIntro
        stageIntroRich {
            raw
        }
        stageInfo {
            raw
        }
        infoLink {
            raw
        }
        tasksToComplete {
            title
            taskInfo {
                raw
            }
            submittedText {
                raw
            }
            taskLinkText
        }
        helpfulInfo {
            info {
                raw
            }
        }
        checklist {
            item
        }
    }
`

export const STAGE_TASK_PAGE_CONTENT_FRAG = graphql`
    fragment StageTaskPageContent on GraphCMS_StageTaskPage {
        title
        taskInfo {
            raw
        }
        tasksToComplete {
            title
            taskInfo {
                raw
            }
            taskLinkText
            submittedText {
                raw
            }
        }
        helpfulInfo {
            info {
                raw
            }
        }
        checklist {
            item
        }
    }
`

export const STAGE_TASK_CONTENT_FRAG = graphql`
    fragment StageTaskContent on GraphCMS_StageTask {
        title
        intro {
            raw
        }
        questions {
            raw
        }
        helpfulInfo {
            info {
                raw
            }
        }
        checklist {
            item
        }
        submittedText {
            raw
        }
    }
`

export const STAGE_QUERY = gql`
    query StageQuery(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            name
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(order_by: { id: asc }) {
                    id
                    feedback
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const DOCUMENT_QUERY = gql`
    query DocumentQuery(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                            { status: { _eq: marked_passed } }
                        ]
                    }
                    order_by: { id: asc }
                ) {
                    id
                    status
                    feedback
                    doc_data
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const DOCUMENT_COMPLETE_QUERY = gql`
    query DocumentCompleteQuery(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: { _or: [{ status: { _eq: marked_passed } }] }
                    order_by: { id: asc }
                ) {
                    id
                    doc_data
                    feedback
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const TEAM_QUERY = gql`
    query TeamQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
        }
    }
`

// tutor

export const TUTOR_CURRENT_QUEST_QUERY = gql`
    query TutorCurrentQuestQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            tutor {
                quests(where: { status: { _eq: active } }) {
                    id
                    teams(order_by: { id: asc }) {
                        id
                        name
                        students {
                            id
                            position
                            user {
                                full_name
                                username
                                password
                            }
                        }
                        stage_progresses {
                            id
                            team_id
                            stage_id
                            status
                            documents(order_by: { id: asc }) {
                                id
                                status
                                doc_data
                                feedback
                            }
                        }
                        team_development_options(
                            order_by: { development_option: { id: asc } }
                        ) {
                            team_choice_name
                            shortlist
                            development_option {
                                id
                                display_name
                                option
                            }
                        }
                    }
                }
            }
        }
        development_option {
            option
            display_name
            model_swot
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

export const TUTOR_PREVIOUS_QUEST_QUERY = gql`
    query TutorPreviousQuestQuery($quest_id: uuid!) {
        quest_by_pk(id: $quest_id) {
            id
            started_at
            completed_at
            teams(order_by: { id: asc }) {
                id
                name
                students {
                    id
                    position
                    user {
                        full_name
                        username
                        password
                    }
                }
                stage_progresses {
                    id
                    team_id
                    stage_id
                    status
                    documents(order_by: { id: asc }) {
                        id
                        status
                        doc_data
                        feedback
                    }
                }
                team_development_options(
                    order_by: { development_option: { id: asc } }
                ) {
                    team_choice_name
                    shortlist
                    development_option {
                        id
                        display_name
                        option
                    }
                }
            }
        }
        development_option {
            option
            display_name
            model_swot
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

export const TUTOR_DOCUMENT_QUERY = gql`
    query TutorDocumentQuery(
        $stage_progress_id: uuid!
        $includeDevOptions: Boolean!
    ) {
        stage_progress_by_pk(id: $stage_progress_id) {
            id
            stage_id
            status
            documents(
                where: {
                    _or: [
                        { status: { _eq: submitted } }
                        { status: { _eq: marked_passed } }
                    ]
                }
                order_by: { id: asc }
            ) {
                id
                status
                feedback
                doc_data
            }
            team {
                name
                team_development_options @include(if: $includeDevOptions) {
                    id
                    team_choice_name
                    shortlist
                    development_option {
                        id
                        display_name
                        option
                    }
                }
            }
        }
    }
`
