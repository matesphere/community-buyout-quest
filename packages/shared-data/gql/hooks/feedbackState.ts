import { useState, useReducer, useEffect, Reducer } from 'react'
import QueryString from 'query-string'

import { useAuthQuery } from './authquery'
import { useAuthMutation } from './authMutation'

import { TUTOR_DOCUMENT_QUERY } from '../queries'
import { SUBMIT_FEEDBACK } from '../mutations'

import {
    SubmitFeedback,
    SubmitFeedbackVariables,
} from '../types/SubmitFeedback'
import {
    TutorDocumentQuery,
    TutorDocumentQueryVariables,
} from '../types/TutorDocumentQuery'
import { ActionType } from '../types'

type FeedbackState = {
    feedback: string
}

type FeedbackAction =
    | {
          type: ActionType.LoadAction
          payload: FeedbackState
      }
    | {
          type: ActionType.UpdateAction
          payload: FeedbackState
      }

const feedbackReducer: Reducer<FeedbackState, FeedbackAction> = (
    state,
    action
) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                feedback: action.payload.feedback,
            }
        default:
            return state
    }
}

export const useFeedbackState = (
    searchString: string,
    includeDevOptions?: boolean
) => {
    const { id: stageProgressId } = QueryString.parse(searchString)

    const [docId, setDocId] = useState('')
    const [feedbackState, feedbackDispatch] = useReducer<
        Reducer<FeedbackState, FeedbackAction>
    >(feedbackReducer, {} as FeedbackState)

    const [submitComplete, setSubmitComplete] = useState(false)

    const [submitFeedback, submitFeedbackResponse] = useAuthMutation<
        SubmitFeedback,
        SubmitFeedbackVariables
    >(
        SUBMIT_FEEDBACK,
        {
            query: TUTOR_DOCUMENT_QUERY,
            variables: {
                stage_progress_id: stageProgressId,
                includeDevOptions: !!includeDevOptions,
            },
        },
        () => setSubmitComplete(true)
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<TutorDocumentQuery, TutorDocumentQueryVariables>(
        TUTOR_DOCUMENT_QUERY,
        {
            variables: {
                stage_progress_id: stageProgressId,
                includeDevOptions: !!includeDevOptions,
            },
            fetchPolicy: 'network-only',
        },
        'userId'
    )

    useEffect(() => {
        if (!loading) {
            const doc = pageData?.stage_progress_by_pk?.documents[0]

            if (doc) {
                const { id, feedback } = doc

                setDocId(id)

                // TODO: how do we convince TS that this is OK? i.e. where should Action live; load is called in here, update called in page
                feedbackDispatch({
                    type: ActionType.LoadAction,
                    payload: feedback,
                })
            }
        }
    }, [loading, pageData])

    const submitFeedbackObj = {
        call: () => {
            submitFeedback({
                variables: { docId, feedbackData: feedbackState },
            })
        },
        response: submitFeedbackResponse,
        submitComplete,
        setSubmitComplete,
    }

    return {
        loading,
        error,
        pageData,
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    }
}
