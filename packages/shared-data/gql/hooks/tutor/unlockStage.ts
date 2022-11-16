import { useAuthMutation } from '../authMutation'
import { UNLOCK_STAGE } from '../../mutations'
import { TUTOR_CURRENT_QUEST_QUERY } from '../../queries'
import { UnlockStage, UnlockStageVariables } from '../../types/UnlockStage'

export const useUnlockStageWithCurrentQuestRefetch = () => {
    const [unlockStage, unlockStageResult] = useAuthMutation<
        UnlockStage,
        UnlockStageVariables
    >(UNLOCK_STAGE, {
        query: TUTOR_CURRENT_QUEST_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return [unlockStage, unlockStageResult] as const
}
