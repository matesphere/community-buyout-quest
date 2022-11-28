import { useState, useReducer, useEffect, Reducer } from 'react'
import { useAuthQuery } from './authQuery'
import { useAuthMutation } from './authMutation'

import { DOCUMENT_QUERY } from '../queries'
import {
    SAVE_WORK_INITIAL,
    SAVE_WORK,
    SUBMIT_WORK_INITIAL,
    SUBMIT_WORK,
} from '../mutations'

import {
    SaveWorkInitialMutation,
    SaveWorkInitialMutationVariables,
    SaveWorkMutation,
    SaveWorkMutationVariables,
    SubmitWorkInitialMutation,
    SubmitWorkInitialMutationVariables,
    SubmitWorkMutation,
    SubmitWorkMutationVariables,
} from '../types/mutations.generated'
import {
    DocumentQuery,
    DocumentQueryVariables,
} from '../types/queries.generated'

import { RefetchObj } from './authMutation'
import { ActionType } from '@community-land-quest/shared-utils/utils/common-types'

export const useWorkState = <InputState, Action>(
    stageId: number,
    workReducer: Reducer<InputState, Action>,
    includeDevOptions?: boolean
) => {
    const [docId, setDocId] = useState('')
    const [workState, workDispatch] = useReducer<Reducer<InputState, Action>>(
        workReducer,
        {} as InputState
    )
    const [docSubmitted, setDocSubmitted] = useState(false)
    const [docFeedback, setDocFeedback] = useState<{ feedback: string }>() //? do we need to do this with useState?
    const [saveComplete, setSaveComplete] = useState(false)
    const [submitComplete, setSubmitComplete] = useState(false)

    const REFETCH_OBJ: RefetchObj = {
        query: DOCUMENT_QUERY,
        variables: {
            stage_id: stageId,
            includeDevOptions: !!includeDevOptions,
        },
        idRequired: 'teamId',
    }

    // save/submit operations, each with doc requery

    const [saveWorkInitial, saveWorkInitialResponse] = useAuthMutation<
        SaveWorkInitialMutation,
        SaveWorkInitialMutationVariables
    >(SAVE_WORK_INITIAL, REFETCH_OBJ, () => setSaveComplete(true))

    const [saveWork, saveWorkResponse] = useAuthMutation<
        SaveWorkMutation,
        SaveWorkMutationVariables
    >(SAVE_WORK, REFETCH_OBJ, () => setSaveComplete(true))

    const [submitWorkInitial, submitWorkInitialResponse] = useAuthMutation<
        SubmitWorkInitialMutation,
        SubmitWorkInitialMutationVariables
    >(SUBMIT_WORK_INITIAL, REFETCH_OBJ, () => setSubmitComplete(true))

    const [submitWork, submitWorkResponse] = useAuthMutation<
        SubmitWorkMutation,
        SubmitWorkMutationVariables
    >(SUBMIT_WORK, REFETCH_OBJ, () => setSubmitComplete(true))

    // ----------------------------------------------

    useEffect(() => {
        const { called, loading, data } = saveWorkInitialResponse
        if (called && !loading) {
            setDocId(data.insert_document_one.id)
        }
    }, [saveWorkInitialResponse.called])

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<DocumentQuery, DocumentQueryVariables>(
        DOCUMENT_QUERY,
        {
            variables: {
                stage_id: stageId,
                includeDevOptions: !!includeDevOptions,
            },
            fetchPolicy: 'network-only',
        },
        'teamId'
    )

    useEffect(() => {
        if (!loading) {
            const doc = pageData?.team_by_pk?.stage_progresses[0]?.documents[0]

            if (doc) {
                const { id, doc_data } = doc

                setDocId(id)

                // TODO: how do we convince TS that this is OK? i.e. where should Action live; load is called in here, update called in page
                workDispatch({
                    type: ActionType.LoadAction,
                    payload: doc_data,
                })

                if (
                    doc.status === 'submitted' ||
                    doc.status === 'marked_passed'
                ) {
                    setDocSubmitted(true)
                }

                if (doc.feedback) {
                    setDocFeedback(doc.feedback)
                }
            }
        }
    }, [loading, pageData])

    const stageProgress = pageData?.team_by_pk?.stage_progresses[0]
    const stageProgressId = stageProgress?.id || null
    const stageComplete = stageProgress?.status === 'completed'

    const saveWorkObj = !!docId
        ? {
              call: () =>
                  saveWork({
                      variables: { docId, docData: workState },
                  }),
              response: saveWorkResponse,
              saveComplete,
              setSaveComplete,
          }
        : {
              call: () =>
                  saveWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  }),
              response: saveWorkInitialResponse,
              saveComplete,
              setSaveComplete,
          }

    const submitWorkObj = !!docId
        ? {
              call: () => {
                  setDocSubmitted(true)
                  submitWork({
                      variables: { docId, docData: workState },
                  })
              },
              response: submitWorkResponse,
              submitComplete,
              setSubmitComplete,
          }
        : {
              call: () => {
                  setDocSubmitted(true)
                  submitWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  })
              },
              response: submitWorkInitialResponse,
              submitComplete,
              setSubmitComplete,
          }

    return {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
        docSubmitted,
        docFeedback,
        stageComplete,
    }
}
