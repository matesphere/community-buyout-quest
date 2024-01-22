import { useState, useContext } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    Intro,
    TaskContainer,
    TaskPanel,
    Submitted,
    Helpful,
    Checklist,
    OptionCheckbox,
} from '@community-land-quest/shared-ui'

import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { CHOOSE_DEVELOPMENT_OPTIONS } from '@community-land-quest/shared-data/gql/mutations'
import { STAGE_3_TASK_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    Stage3TaskQuery,
    Stage3TaskQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import { useGroupedCheckboxState } from '@community-land-quest/shared-utils/utils/input-utils'
import { URBAN_LOCATION_DISPLAY_NAME } from '@community-land-quest/shared-utils/utils/common-utils'

import '../../../../scss/index.scss'

const taskIsComplete = (devOptions) =>
    devOptions.filter((opt) => opt.location === 'wasteland').length === 2 &&
    devOptions.filter((opt) => opt.location === 'ground-floor').length === 2 &&
    devOptions.filter((opt) => opt.location === 'first-floor').length === 2

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
    teamChoiceName,
    setTeamChoiceName,
    teamChoiceLocation,
    setTeamChoiceLocation,
}) => {
    const devOptionsGrouped = devOptions.reduce((acc, opt) => {
        if (opt.location) {
            const group = acc[opt.location] ?? []
            acc[opt.location] = [...group, opt]
        }
        return acc
    }, {})

    return (
        <>
            {Object.entries(devOptionsGrouped).map(([key, devOptions], i) => {
                return (
                    <div key={key}>
                        <h1>{URBAN_LOCATION_DISPLAY_NAME[key]}</h1>
                        {devOptions.map(({ id, display_name }) => (
                            <OptionCheckbox<number>
                                key={`${key}-${id}`}
                                {...{
                                    id,
                                    selectedOptions,
                                    toggleValue: () =>
                                        toggleValue({
                                            groupName: key,
                                            selectedValue: id,
                                        }),
                                    displayName: display_name,
                                }}
                            />
                        ))}
                    </div>
                )
            })}

            <div key={22}>
                <p className="sm-type-lead sm-type-lead--medium mt-4">
                    Or choose your own option - check the box and enter your
                    option name here!
                </p>
                <div className="multiple-choice">
                    <input
                        className="form-control"
                        id="22"
                        type="checkbox"
                        checked={selectedOptions.includes(22)}
                        onChange={() =>
                            toggleValue({
                                groupName: teamChoiceLocation,
                                selectedValue: 22,
                            })
                        }
                    />
                    <label className="form-label" htmlFor="housing">
                        Team choice
                    </label>
                </div>
                <div className="mb-4">
                    <label className="form-label sm-type-amp">
                        Development option name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={teamChoiceName}
                        onChange={({ target: { value } }) =>
                            setTeamChoiceName(value)
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label sm-type-amp">
                        Development option location
                    </label>
                    {['wasteland', 'ground-floor', 'first-floor'].map(
                        (key, i) => {
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        value={key}
                                        checked={teamChoiceLocation === key}
                                        onChange={({ target: { value } }) => {
                                            if (selectedOptions.includes(22)) {
                                                toggleValue({
                                                    groupName:
                                                        teamChoiceLocation,
                                                    selectedValue: 22,
                                                })
                                                setTeamChoiceLocation(value)
                                                toggleValue({
                                                    groupName: value,
                                                    selectedValue: 22,
                                                })
                                            } else {
                                                setTeamChoiceLocation(value)
                                            }
                                        }}
                                    />
                                    &nbsp;{URBAN_LOCATION_DISPLAY_NAME[key]}
                                    &nbsp;&nbsp;
                                </label>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}

// TODO: move this out to components
const Stage3Task = ({ taskToComplete }) => {
    const {
        userInfo: { teamId },
    } = useContext(UserStateContext)

    const [teamChoiceName, setTeamChoiceName] = useState('')
    const [teamChoiceLocation, setTeamChoiceLocation] = useState('wasteland')

    const {
        dispatch: toggleValue,
        totalLimitAmountSelected,
        allSelectedOptions,
    } = useGroupedCheckboxState<number>([
        { title: 'wasteland', limit: 2 },
        { title: 'ground-floor', limit: 2 },
        { title: 'first-floor', limit: 2 },
    ])

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_DEVELOPMENT_OPTIONS,
        {
            query: STAGE_3_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        }
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<
        Stage3TaskQuery,
        Omit<Stage3TaskQueryVariables, 'team_id'>
    >(STAGE_3_TASK_QUERY, {}, 'teamId')

    if (loading) return <Loading />
    if (error || !pageData || !pageData.team_by_pk)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { team_development_options: devOptions } = pageData.team_by_pk
    const taskComplete = taskIsComplete(devOptions)

    return (
        <TaskPanel docSubmitted={taskComplete}>
            {taskComplete || chooseDevOptionsResponse.data ? (
                <Submitted content={taskToComplete.submittedText} />
            ) : (
                <TaskContainer taskToComplete={taskToComplete}>
                    <ChooseOptionsCheckboxes
                        devOptions={pageData.development_option}
                        selectedOptions={allSelectedOptions}
                        toggleValue={toggleValue}
                        teamChoiceName={teamChoiceName}
                        setTeamChoiceName={setTeamChoiceName}
                        teamChoiceLocation={teamChoiceLocation}
                        setTeamChoiceLocation={setTeamChoiceLocation}
                    />

                    <button
                        className="btn-solid-lg mt-4"
                        disabled={
                            !totalLimitAmountSelected ||
                            (allSelectedOptions.includes(10) &&
                                !teamChoiceName) ||
                            chooseDevOptionsResponse?.loading
                        }
                        onClick={() => {
                            const objects = allSelectedOptions.map((id) => {
                                if (id === 22) {
                                    return {
                                        team_id: teamId,
                                        development_option_id: id,
                                        team_choice_name: teamChoiceName,
                                        team_choice_location:
                                            teamChoiceLocation,
                                    }
                                }

                                return {
                                    team_id: teamId,
                                    development_option_id: id,
                                }
                            })

                            chooseDevOptions({
                                variables: {
                                    objects,
                                },
                            })
                        }}
                    >
                        {chooseDevOptionsResponse?.loading && (
                            <span className="spinner"></span>
                        )}{' '}
                        Submit options
                    </button>

                    {/* TODO: replace with proper 'submitted' notification component...if needed? */}
                    {/* {chooseDevOptionsResponse.data && (
                            <p className="sm-type-amp">Submitted!</p>
                        )} */}
                </TaskContainer>
            )}
        </TaskPanel>
    )
}

const Stage3ChooseOptionsPage = () => {
    // TODO: brittle to use the title in order to find this model - don't think we're even using the SWOT one so could delete?
    const {
        graphCmsStageTaskPage: {
            title,
            taskInfo,
            tasksToComplete,
            helpfulInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTaskPage(
                stageNumber: { eq: 3 }
                title: { eq: "Choose Your Longlist" }
            ) {
                ...StageTaskPageContent
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay The Foundations - {title}</title>
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
                                    {
                                        displayName: 'Stage 3',
                                        url: '/student/stage-3/',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <Intro item={taskInfo} />

                            {/* TODO: get the shaky help icon back! */}
                            {/* <p className="sm-type-guitar mb-4">
                                <span className="side-icon side-icon-orange shake">
                                    <HelpIcon />
                                </span>
                                <Link to="/information/development-options">
                                    View the development options
                                </Link>
                            </p> */}

                            <Stage3Task taskToComplete={tasksToComplete[0]} />
                        </div>
                        <div className="col-lg-3">
                            {helpfulInfo && (
                                <Helpful content={helpfulInfo.info} />
                            )}
                            {checklist && <Checklist items={checklist.item} />}
                        </div>
                    </div>

                    <Link to="/student/stage-3">Back to Stage 3</Link>
                </section>
            </main>
        </>
    )
}

export default Stage3ChooseOptionsPage
