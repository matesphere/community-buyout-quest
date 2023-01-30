import { graphql } from 'gatsby'

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
        submittedText {
            raw
        }
    }
`
