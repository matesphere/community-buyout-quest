import { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    LoadingSpinner,
    Error,
    Breadcrumbs,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import { NewGroupContext } from '@community-land-quest/shared-data/contexts/tutor-contexts'
import {
    CREATE_QUEST_WITH_TEAMS,
    START_QUEST,
} from '@community-land-quest/shared-data/gql/mutations'
import { StudentType } from '@community-land-quest/shared-utils/utils/common-types'
import {
    CreateQuestWithTeamsMutation,
    CreateQuestWithTeamsMutationVariables,
} from '@community-land-quest/shared-data/gql/types/mutations.generated'
import { CREATE_TEAM_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    CreateTeamQuery,
    CreateTeamQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import {
    addStudentToTeam,
    mergeIdsIntoStudents,
    createStudentsInCognito,
} from '@community-land-quest/shared-utils/utils/auth-utils'

import HelpIcon from '../../assets/help-icon.svg'
import Cross from '../../assets/cross.svg'

import '../../scss/index.scss'

// TODO: sort out 'team/teams' pluralisation in modals

interface TeamType {
    name: string
    students: Array<StudentType>
}

const TeamInput = ({ setTeams }) => {
    const [teamName, setTeamName] = useState('')
    return (
        <form
            className="container"
            onSubmit={(e) => {
                e.preventDefault()
                setTeams((teams) => [
                    ...teams,
                    { name: teamName, students: [] },
                ])
                setTeamName('')
            }}
        >
            <div className="side-grey row mb-4">
                <div className="col-lg-6 mb-2">
                    <label className="form-label sm-type-amp">Team Name</label>
                    <span>
                        <input
                            id="team-name"
                            type="name"
                            className="form-control"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </span>
                </div>
                <div className="col-lg-6 mb-2">
                    <button type="submit" className="btn-outline-lg">
                        Add team
                    </button>
                </div>
            </div>
        </form>
    )
}

const Team = ({ team: { name, students }, setTeams }) => (
    <>
        <p className="sm-type-leadguitar sm-type-lead--medium">
            <span className="blackdot"></span> {name}
            <span
                className="cross-icon"
                onClick={() =>
                    setTeams((teams) =>
                        teams.filter((team) => team.name !== name)
                    )
                }
            >
                <Cross />
            </span>
        </p>
        {students.map(({ firstName, lastName }, i) => (
            <p key={i} className="sm-type-amp">
                {firstName} {lastName}
            </p>
        ))}
    </>
)

const Student = ({ student, teams, setTeams }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-6">
            <p className="sm-type-guitar sm-type-guitar--medium">
                {student.firstName} {student.lastName}
            </p>
        </div>
        <div className="col-lg-6">
            <div className="multiple-choice">
                <select
                    defaultValue="none"
                    className="form-control"
                    onChange={({ target: { value } }) => {
                        setTeams(addStudentToTeam(value, student))
                    }}
                >
                    <option disabled value="none">
                        {' '}
                        -- select a team --{' '}
                    </option>
                    {teams.map(({ name }, i) => (
                        <option key={i} value={i}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
)

const createStudents = async (
    studentsWithTeamId,
    setCognitoLoading,
    setCognitoResponse
) => {
    setCognitoLoading(true)
    const response = await createStudentsInCognito(studentsWithTeamId, 'rural')

    setCognitoLoading(false)
    setCognitoResponse(response)
}

const CreateStudentsSection = ({
    teamsWithStudents,
    teamsFromResponse,
    cognitoResponse,
    setCognitoResponse,
    schoolId,
}) => {
    const [cognitoLoading, setCognitoLoading] = useState(false)
    // TODO: response is array of promises - need to handle rejections
    // const [cognitoError, setCognitoError] = useState(false)

    const studentsWithTeamId = mergeIdsIntoStudents(
        teamsWithStudents,
        teamsFromResponse,
        schoolId
    )

    useEffect(() => {
        if (cognitoResponse.length === 0) {
            createStudents(
                studentsWithTeamId,
                setCognitoLoading,
                setCognitoResponse
            )
        }
    }, [])

    return (
        <>
            {cognitoLoading && (
                <>
                    <p>Adding students to teams...</p>
                    <LoadingSpinner delay={200} />
                </>
            )}

            {/* {cognitoError && <p>Oops, problem adding students!</p>} */}
        </>
    )
}

const getInvalidTeams = (teams: Array<TeamType>) =>
    teams.filter((team) => team.students.length < 4)

interface ConfirmModalProps {
    teams: Array<TeamType>
    groupName: string
    showModal: boolean
    setShowModal: (value: boolean) => void
    setStudentsToAdd: (value: Array<StudentType>) => void
    tutorId: string
    schoolId: string
}

const ConfirmModal = ({
    teams,
    groupName,
    showModal,
    setShowModal,
    setStudentsToAdd,
    tutorId,
    schoolId,
}: ConfirmModalProps) => {
    const [createQuestWithTeams, createQuestWithTeamsResponse] =
        useAuthMutation<
            CreateQuestWithTeamsMutation,
            CreateQuestWithTeamsMutationVariables
        >(CREATE_QUEST_WITH_TEAMS)
    const [startQuest, startQuestResponse] = useAuthMutation(START_QUEST)

    const [cognitoResponse, setCognitoResponse] = useState([])

    const invalidTeams = getInvalidTeams(teams)
    // console.log(createQuestWithTeamsResponse)

    return (
        <>
            {showModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => setShowModal(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Cancel
                        </button>

                        {/* TODO: tidy all this stupid error handling up; also add a 'no teams' condition */}
                        {!createQuestWithTeamsResponse.data &&
                            invalidTeams.length !== 0 && (
                                <>
                                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                        {`The following teams do not have the minimum required number of students (4): ${invalidTeams
                                            .map((team) => team.name)
                                            .join(', ')}`}
                                    </p>
                                </>
                            )}

                        {!createQuestWithTeamsResponse.data && !groupName && (
                            <>
                                <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                    You need to give this group a name!
                                </p>
                            </>
                        )}

                        {!createQuestWithTeamsResponse.data &&
                            (invalidTeams.length !== 0 || !groupName) && (
                                <p>
                                    Click cancel to go back and rectify the
                                    above.
                                </p>
                            )}

                        {!createQuestWithTeamsResponse.data &&
                            invalidTeams.length === 0 &&
                            !!groupName && (
                                <>
                                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                        {`You are about to create the '${groupName}' group with ${
                                            teams.length
                                            } team${
                                            teams.length !== 1 ? 's' : ''
                                            }! Is this correct?`}{' '}
                                    </p>

                                    <button
                                        className="btn-solid-lg mt-4"
                                        onClick={() => {
                                            createQuestWithTeams({
                                                variables: {
                                                    object: {
                                                        tutor_id: tutorId,
                                                        name: groupName,
                                                        teams: {
                                                            data: teams.map(
                                                                ({ name }) => ({
                                                                    name,
                                                                })
                                                            ),
                                                        },
                                                    },
                                                },
                                            })
                                        }}
                                    >
                                        Yes, create teams
                                    </button>
                                </>
                            )}

                        {createQuestWithTeamsResponse.loading && (
                            <LoadingSpinner delay={200} />
                        )}

                        {createQuestWithTeamsResponse.data && (
                            <div>
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    {`Created ${createQuestWithTeamsResponse.data.insert_quest_one.teams.length} teams!`}{' '}
                                </p>

                                <CreateStudentsSection
                                    teamsWithStudents={teams}
                                    teamsFromResponse={
                                        createQuestWithTeamsResponse.data
                                            .insert_quest_one.teams
                                    }
                                    cognitoResponse={cognitoResponse}
                                    setCognitoResponse={setCognitoResponse}
                                    schoolId={schoolId}
                                />

                                {cognitoResponse.length > 0 && (
                                    <>
                                        <p className="sm-type-guitar sm-type-guitar--medium">
                                            {`${cognitoResponse.length} students added.`}{' '}
                                        </p>
                                        <button
                                            className="btn-solid-lg mt-4 mb-4"
                                            onClick={() => {
                                                startQuest({
                                                    variables: {
                                                        quest_id:
                                                            createQuestWithTeamsResponse
                                                                .data
                                                                .insert_quest_one
                                                                .id,
                                                    },
                                                })
                                                setShowModal(false)
                                                setStudentsToAdd([])
                                            }}
                                        >
                                            START QUEST!
                                        </button>
                                        <span>
                                            You'll now be able to access this
                                            group from your hub
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {startQuestResponse.data && (
                <div className="modal-window">
                    <div>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            Group created!{' '}
                        </p>
                        <Link
                            to="/tutor/current-groups"
                            className="btn-solid-lg mt-4 mb-4"
                        >
                            View active groups
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

const TutorCreateTeamPage = () => {
    const [teams, setTeams] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [groupName, setGroupName] = useState('')

    const { studentsToAdd, setStudentsToAdd } = useContext(NewGroupContext)
    const {
        userInfo: { schoolId },
    } = useContext(UserStateContext)

    const { loading, error, data } = useAuthQuery<
        CreateTeamQuery,
        CreateTeamQueryVariables
    >(CREATE_TEAM_QUERY, {}, 'userId')

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { id: tutorId } = data.user_by_pk?.tutor

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>New Quest - Create Teams</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Add students',
                                        url: '/tutor/add-students',
                                    },
                                ]}
                                currentDisplayName="Create teams"
                            />
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 1: Create Teams
                            </h2>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                Add all required teams here...
                            </p>

                            <TeamInput setTeams={setTeams} />

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 2: Assign Students
                            </h3>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                ...then assign students to teams here...
                            </p>
                            <form className="mb-4 container" id="form-login">
                                {studentsToAdd.map((student, i) => (
                                    <Student
                                        key={i}
                                        student={{ ...student, teamMappingId: i }} // need something unique other than email to allocate students
                                        teams={teams}
                                        setTeams={setTeams}
                                    />
                                ))}
                            </form>

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 3: Name Group
                            </h3>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                ...and finally give this group a name
                            </p>

                            <form className="container">
                                <div className="side-grey row mb-4">
                                    <div className="col-lg-6 mb-2">
                                        <label className="form-label sm-type-amp">
                                            Group Name
                                        </label>
                                        <span>
                                            <input
                                                id="group-name"
                                                type="name"
                                                className="form-control"
                                                value={groupName}
                                                onChange={(e) =>
                                                    setGroupName(e.target.value)
                                                }
                                            />
                                        </span>
                                    </div>
                                </div>
                            </form>

                            <button
                                className="btn-solid-lg mt-4"
                                onClick={() => setShowModal(true)}
                            >
                                Create teams
                            </button>
                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2 mt-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Teams
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Your teams will appear below.
                                </p>

                                {teams.length > 0 && (
                                    <>
                                        {teams.map((team, i) => (
                                            <Team
                                                key={i}
                                                team={team}
                                                setTeams={setTeams}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <ConfirmModal
                    {...{
                        teams,
                        groupName,
                        showModal,
                        setShowModal,
                        setStudentsToAdd,
                        tutorId,
                        schoolId,
                    }}
                />
            </main>
        </>
    )
}

export default TutorCreateTeamPage
