import { useAuthMutation } from '../../../utils/auth-utils'
import { UNLOCK_STAGE } from '../../../gql/mutations'
import { TUTOR_CURRENT_QUEST_QUERY } from '../../../gql/queries'
import Lock from '../../../assets/lock.svg'

import {
    UnlockStage,
    UnlockStageVariables,
} from '../../../gql/types/UnlockStage'

export const LockedStageStatus = ({ mutation }) => (
    <div>
        <Lock />
        <span>Locked</span>
        <span>
            <a
                className="green-link text-underline"
                onClick={(e) => {
                    e.preventDefault()
                    mutation()
                }}
            >
                Unlock stage
            </a>
        </span>
    </div>
)

export const ConnectedLockedStageStatus = ({ teamId, stageId }) => {
    const [unlockStage] = useAuthMutation<UnlockStage, UnlockStageVariables>(
        UNLOCK_STAGE,
        {
            query: TUTOR_CURRENT_QUEST_QUERY,
            variables: {},
            idRequired: 'userId',
        }
    )

    return (
        <LockedStageStatus
            mutation={() => unlockStage({ variables: { teamId, stageId } })}
        />
    )
}
