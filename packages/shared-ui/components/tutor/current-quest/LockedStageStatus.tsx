import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { UNLOCK_STAGE } from '@community-land-quest/shared-data/gql/mutations'
import { TUTOR_CURRENT_QUEST_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    UnlockStage,
    UnlockStageVariables,
} from '@community-land-quest/shared-data/gql/types/UnlockStage'

import Lock from '../../../assets/lock.svg'

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
