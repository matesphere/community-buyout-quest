import { graphql, useStaticQuery } from 'gatsby'
import { useState, useContext, FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { Authenticator } from '@aws-amplify/ui-react'

import { TutorHeader, TutorFooter } from '@community-land-quest/shared-ui'

import Hub from './tutor/hub'
import CurrentGroups from './tutor/current-groups'
import PreviousGroup from './tutor/previous-group'
import AddStudents from './tutor/add-students'
import CreateTeam from './tutor/create-team'
import Stage1Submitted from './tutor/stages/stage-1/tutor-stage-1-submitted'
import Stage3Submitted from './tutor/stages/stage-3/tutor-stage-3-submitted'
import Stage4Submitted from './tutor/stages/stage-4/tutor-stage-4-submitted'
import Stage5Submitted from './tutor/stages/stage-5/tutor-stage-5-submitted'
import TutorAssessment from './tutor/assessment'
import TutorTeamAssessment from './tutor/team-assessment'
import TutorGuide from './tutor/tutor-guide'
import TechnicalGuide from './tutor/technical-guide'

import { StudentType } from '@community-land-quest/shared-utils/utils/common-types'

import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import {
    CurrentGroupsContext,
    NewGroupContext,
} from '@community-land-quest/shared-data/contexts/tutor-contexts'

type LoggedInRouteProps = RouteComponentProps & {
    component: () => string | JSX.Element
}

const LoggedInRoute: FC<LoggedInRouteProps> = ({
    component: Component,
    navigate,
    ...rest
}) => {
    const { isSignedIn, userInfo } = useContext(UserStateContext)

    if (isSignedIn) {
        if (userInfo.role === 'student') {
            navigate('/student/team-hub') //TODO: not working...why?? Something to do with client-only?
        }
    }

    return (
        <Authenticator hideSignUp>
            <Component {...rest} />
        </Authenticator>
    )
}

const Routes = () => {
    const [studentsToAdd, setStudentsToAdd] = useState<Array<StudentType>>([])
    const [expanded, setExpanded] = useState<Array<string>>([])
    const [selectedTab, setSelectedTab] = useState<number>(0)

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <NewGroupContext.Provider value={{ studentsToAdd, setStudentsToAdd }}>
            <CurrentGroupsContext.Provider
                value={{ expanded, setExpanded, selectedTab, setSelectedTab }}
            >
                <TutorHeader
                    clsLogo={data.file.childImageSharp.gatsbyImageData}
                />
                <div className="min-height">
                    <Router basepath="/tutor">
                        <LoggedInRoute path="/hub" component={Hub} />
                        <LoggedInRoute
                            path="/current-groups"
                            component={CurrentGroups}
                        />
                        <LoggedInRoute
                            path="/previous-quest"
                            component={PreviousGroup}
                        />
                        <LoggedInRoute
                            path="/add-students"
                            component={AddStudents}
                        />
                        <LoggedInRoute
                            path="/create-team"
                            component={CreateTeam}
                        />

                        <LoggedInRoute
                            path="/stage-1/submitted"
                            component={Stage1Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-3/submitted"
                            component={Stage3Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-4/submitted"
                            component={Stage4Submitted}
                        />

                        <LoggedInRoute
                            path="/stage-5/submitted"
                            component={Stage5Submitted}
                        />

                        <LoggedInRoute
                            path="/assessment"
                            component={TutorAssessment}
                        />
                        <LoggedInRoute
                            path="/team-assessment"
                            component={TutorTeamAssessment}
                        />
                        <LoggedInRoute
                            path="/tutor-guide"
                            component={TutorGuide}
                        />
                        <LoggedInRoute
                            path="/technical-guide"
                            component={TechnicalGuide}
                        />
                    </Router>
                </div>
                <TutorFooter />
            </CurrentGroupsContext.Provider>
        </NewGroupContext.Provider>
    )
}

export default Routes
