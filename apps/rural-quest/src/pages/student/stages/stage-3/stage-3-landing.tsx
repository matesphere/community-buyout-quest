import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'
// import scrollTo from 'gatsby-plugin-smoothscroll'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { Intro } from '../../../../components/student/Intro'
import MapOptions from '../../../../pages/information/_map'
import { InfoLink } from '../../../../components/student/InfoLink'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'
import { CheckList } from '../../../../components/student/Checklist'
import { Helpful } from '../../../../components/student/Helpful'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { stage3SwotReducer, WorkState, Action } from './stage-3-swot'
import { useWorkState } from '../../../../utils/input-utils'

import { DocumentCompleteQuery_team_by_pk_team_development_options } from '../../../../gql/types/DocumentCompleteQuery'

import Tick from '../../../../assets/tick.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

interface SwotLinksProps {
    devOptions: Array<DocumentCompleteQuery_team_by_pk_team_development_options>
    completedSwots?: Array<string>
}

export const SwotLinks = ({
    devOptions,
    completedSwots = [],
}: SwotLinksProps) => (
    <ol>
        {devOptions.map(
            (
                {
                    id,
                    team_choice_name,
                    development_option: { display_name, option },
                },
                i
            ) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link to={`/student/stage-3/swot?num=${i}&id=${id}`}>
                        {team_choice_name || display_name}
                    </Link>
                    {completedSwots.includes(option) && (
                        <span className="ml-2 side-icon">
                            <Tick />
                        </span>
                    )}
                </li>
            )
        )}
    </ol>
)

const ExampleSwotLinks: FC<{ exampleSwots: Array<string> }> = ({
    exampleSwots,
}) => (
    <>
        <p className="sm-type-lead mb-2">
            <span className="side-icon side-icon-orange shake">
                <HelpIcon />
            </span>
            {`Your teacher has provided the following example${
                exampleSwots.length > 1 ? 's' : ''
            } to help:`}
        </p>
        <ul>
            {exampleSwots.map((swotOption, i) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link
                        to={`/student/stage-3/swot/example?option=${swotOption}`}
                    >
                        Example {i + 1}
                    </Link>
                </li>
            ))}
        </ul>
    </>
)

const Stage3LandingPage: FC = () => {
    const {
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            stageInfo,
            infoLink,
            tasksToComplete,
            helpfulInfo,
            checklist,
        },
        graphCmsInfo: { slider },
    } = useStaticQuery(graphql`
        query Stage3PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 3 }) {
                ...StageLandingPageContent
            }
            graphCmsInfo(slug: { eq: "development-options" }) {
                slider {
                    raw
                }
            }
        }
    `)
    const {
        loading,
        error,
        pageData,
        submitWorkObj,
        docFeedback,
        docSubmitted,
    } = useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { team_development_options: devOptions } = pageData.team_by_pk
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}

    // TODO: can use reduce to combine these 2 expressions, i.e. divide array
    const completedSwots = Object.keys(doc).filter(
        (opt) =>
            devOptions
                .map(({ development_option: { option } }) => option)
                .includes(opt) &&
            Object.keys(doc[opt]).filter((key) => key !== 'provided').length ===
                4
    )

    const exampleSwotOptions = Object.keys(doc).filter(
        (swot) =>
            !devOptions
                .map(({ development_option: { option } }) => option)
                .includes(swot)
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - {stageTitle}</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 3"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>
                            <ReadQuesty text={stageIntro} />
                            <Intro item={stageInfo} />
                            <MapOptions iconInfoList={slider} />
                            <InfoLink link={infoLink[0]} />

                            <TaskPanel
                                docSubmitted={docSubmitted}
                                docFeedback={docFeedback}
                            >
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-3/options"
                                />
                                <TaskContainer
                                    taskToComplete={tasksToComplete[1]}
                                    disabled={devOptions.length === 0}
                                >
                                    <SwotLinks
                                        devOptions={devOptions}
                                        completedSwots={completedSwots}
                                    />

                                    {exampleSwotOptions.length > 0 && (
                                        <ExampleSwotLinks
                                            exampleSwots={exampleSwotOptions}
                                        />
                                    )}

                                    <SaveSubmitSection
                                        submitWorkObj={submitWorkObj}
                                        disableSubmit={
                                            completedSwots.length !== 5
                                        }
                                        docSubmitted={docSubmitted}
                                    />
                                </TaskContainer>
                            </TaskPanel>
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage3LandingPage
