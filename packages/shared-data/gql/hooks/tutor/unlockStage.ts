import { useAuthMutation } from '../authMutation'
import { UNLOCK_STAGE } from '../../mutations'
import { TUTOR_CURRENT_GROUP_QUERY } from '../../queries'
import { UnlockStage, UnlockStageVariables } from '../../types/UnlockStage'

export const useUnlockStageWithCurrentGroupRefetch = () => {
    const [unlockStage, unlockStageResult] = useAuthMutation<
        UnlockStage,
        UnlockStageVariables
    >(UNLOCK_STAGE, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return [unlockStage, unlockStageResult] as const
}
