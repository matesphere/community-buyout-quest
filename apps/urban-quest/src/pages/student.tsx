import { graphql, useStaticQuery } from 'gatsby'
import { useContext, FC } from 'react'
import { PageProps } from 'gatsby'
import { Router, RouteComponentProps } from '@reach/router'
import { Authenticator } from '@aws-amplify/ui-react'

import { StudentHeader, StudentFooter } from '@community-land-quest/shared-ui'
import TeamHub from './student/team-hub'

import Information from './student/information'

import Stage1Landing from './student/stages/stage-1/stage-1-landing'
import Stage1Task from './student/stages/stage-1/stage-1-task'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'

import Stage2Landing from './student/stages/stage-2/stage-2-landing'
import Stage2Task from './student/stages/stage-2/stage-2-task'
import Stage2PageComplete from './student/stages/stage-2/stage-2-complete'

import Stage3Landing from './student/stages/stage-3/stage-3-landing'
import Stage3ChooseOptions from './student/stages/stage-3/stage-3-choose-options'
import Stage3Swot from './student/stages/stage-3/stage-3-swot'
import Stage3SwotExample from './student/stages/stage-3/stage-3-swot-example'
import Stage3Complete from './student/stages/stage-3/stage-3-complete'

import Stage4Landing from './student/stages/stage-4/stage-4-landing'
import Stage4ChooseOptions from './student/stages/stage-4/stage-4-choose-options'
import Stage4Feasibility from './student/stages/stage-4/stage-4-feasibility'
import Stage4Complete from './student/stages/stage-4/stage-4-complete'

import Stage5Landing from './student/stages/stage-5/stage-5-landing'
import Stage5BusinessPlan from './student/stages/stage-5/stage-5-business-plan'
import Stage5BusinessPlanExample from './student/stages/stage-5/stage-5-business-plan-example'
import Stage5Complete from './student/stages/stage-5/stage-5-complete'

import Stage6Landing from './student/stages/stage-6/stage-6-landing'
import Stage6PresentationTips from './student/stages/stage-6/stage-6-presentation-tips'
import Stage6CompletedWork from './student/stages/stage-6/stage-6-completed-work'

import Stage7Landing from './student/stages/stage-7/stage-7-landing'
import Stage7PresentationTips from './student/stages/stage-7/stage-7-presentation-tips'

import Stage8Landing from './student/stages/stage-8/stage-8-landing'
import Stage8Task from './student/stages/stage-8/stage-8-task'

import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import { authComponents } from '@community-land-quest/shared-utils/utils/auth-utils'

import '@aws-amplify/ui-react/styles.css'

type LoggedInRouteProps = RouteComponentProps & {
    component: FC<PageProps>
    stageNum?: number
}

const LoggedInRoute: FC<LoggedInRouteProps> = ({
    component: Component,
    navigate,
    stageNum,
    ...rest
}) => {
    const { isSignedIn, userInfo, latestStageUnlocked } =
        useContext(UserStateContext)

    // Auth.currentAuthenticatedUser({ bypassCache: true })

    if (isSignedIn) {
        // if (userInfo.role === 'tutor') {
        //     navigate('/tutor/hub')
        // }

        if (stageNum && latestStageUnlocked && stageNum > latestStageUnlocked) {
            navigate('/student/team-hub')
        }
    }

    return (
        <Authenticator hideSignUp components={authComponents}>
            <Component {...rest} />
        </Authenticator>
    )
}

const Routes = () => {
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
        <>
            <StudentHeader
                clsLogo={data.file.childImageSharp.gatsbyImageData}
            />
            <div className="min-height">
                <Router basepath="/student">
                    <LoggedInRoute path="/team-hub" component={TeamHub} />
                    <LoggedInRoute
                        path="/information"
                        component={Information}
                    />

                    <LoggedInRoute
                        path="/stage-1"
                        component={Stage1Landing}
                        stageNum={1}
                    />
                    <LoggedInRoute
                        path="/stage-1/task"
                        component={Stage1Task}
                        stageNum={1}
                    />
                    <LoggedInRoute
                        path="/stage-1/complete"
                        component={Stage1Complete}
                        stageNum={1}
                    />

                    <LoggedInRoute
                        path="/stage-2"
                        component={Stage2Landing}
                        stageNum={2}
                    />
                    <LoggedInRoute
                        path="/stage-2/task"
                        component={Stage2Task}
                        stageNum={2}
                    />
                    <LoggedInRoute
                        path="/stage-2/complete"
                        component={Stage2PageComplete}
                        stageNum={2}
                    />

                    <LoggedInRoute
                        path="/stage-3"
                        component={Stage3Landing}
                        stageNum={3}
                    />
                    <LoggedInRoute
                        path="/stage-3/options"
                        component={Stage3ChooseOptions}
                        stageNum={3}
                    />
                    <LoggedInRoute
                        path="/stage-3/swot"
                        component={Stage3Swot}
                        stageNum={3}
                    />
                    <LoggedInRoute
                        path="/stage-3/swot/example"
                        component={Stage3SwotExample}
                        stageNum={3}
                    />
                    <LoggedInRoute
                        path="/stage-3/complete"
                        component={Stage3Complete}
                        stageNum={3}
                    />

                    <LoggedInRoute
                        path="/stage-4"
                        component={Stage4Landing}
                        stageNum={4}
                    />
                    <LoggedInRoute
                        path="/stage-4/options"
                        component={Stage4ChooseOptions}
                        stageNum={4}
                    />
                    <LoggedInRoute
                        path="/stage-4/feasibility"
                        component={Stage4Feasibility}
                        stageNum={4}
                    />
                    <LoggedInRoute
                        path="/stage-4/complete"
                        component={Stage4Complete}
                        stageNum={4}
                    />

                    <LoggedInRoute
                        path="/stage-5"
                        component={Stage5Landing}
                        stageNum={5}
                    />
                    <LoggedInRoute
                        path="/stage-5/business-plan"
                        component={Stage5BusinessPlan}
                        stageNum={5}
                    />
                    <LoggedInRoute
                        path="/stage-5/business-plan/example"
                        component={Stage5BusinessPlanExample}
                        stageNum={5}
                    />
                    <LoggedInRoute
                        path="/stage-5/complete"
                        component={Stage5Complete}
                        stageNum={5}
                    />

                    <LoggedInRoute
                        path="/stage-6"
                        component={Stage6Landing}
                        stageNum={6}
                    />
                    <LoggedInRoute
                        path="/stage-6/presentation-tips"
                        component={Stage6PresentationTips}
                        stageNum={6}
                    />
                    <LoggedInRoute
                        path="/stage-6/completed-work"
                        component={Stage6CompletedWork}
                        stageNum={6}
                    />

                    <LoggedInRoute
                        path="/stage-7"
                        component={Stage7Landing}
                        stageNum={7}
                    />
                    <LoggedInRoute
                        path="/stage-7/presentation-tips"
                        component={Stage7PresentationTips}
                        stageNum={7}
                    />

                    <LoggedInRoute
                        path="/stage-8"
                        component={Stage8Landing}
                        stageNum={8}
                    />
                    <LoggedInRoute
                        path="/stage-8/task"
                        component={Stage8Task}
                        stageNum={8}
                    />
                </Router>
            </div>
            <StudentFooter />
        </>
    )
}

export default Routes
