import { useState, useReducer, useEffect, Reducer } from 'react'
import QueryString from 'query-string'

import { useAuthQuery, useAuthMutation } from './auth-utils'

import {
    SAVE_WORK_INITIAL,
    SAVE_WORK,
    SUBMIT_WORK_INITIAL,
    SUBMIT_WORK,
    SUBMIT_FEEDBACK,
} from '../gql/mutations'

import { DOCUMENT_QUERY, TUTOR_DOCUMENT_QUERY } from '../gql/queries'
import {
    DocumentQuery,
    DocumentQueryVariables,
} from '../gql/types/DocumentQuery'
import {
    TutorDocumentQuery,
    TutorDocumentQueryVariables,
} from '../gql/types/TutorDocumentQuery'

export const useCheckboxState = <T>(
    initialSelected: Array<T>,
    limit?: number
) => {
    const [selectedValues, setSelectedValues] =
        useState<Array<T>>(initialSelected)

    const toggleValue = (newValue: T) =>
        selectedValues.includes(newValue)
            ? setSelectedValues(
                  selectedValues.filter((value) => value !== newValue)
              )
            : selectedValues.length === limit
            ? setSelectedValues([...selectedValues.slice(1), newValue])
            : setSelectedValues([...selectedValues, newValue])

    const allowedNumberSelected = selectedValues.length === limit

    return [selectedValues, toggleValue, allowedNumberSelected] as const
}

// export const useCheckboxListState = (
//     listOfLabels: Array<string>,
//     limit?: number
// ) => {
//     const [checkboxState, setCheckboxState] = useState(
//         listOfLabels.map((label, i) => ({ id: i, label, value: false }))
//     )

//     const toggleCheckbox = (id) => {
//         setCheckboxState((state) =>
//             state.map((checkbox) =>
//                 checkbox.id === id
//                     ? { id, label: checkbox.label, value: !checkbox.value }
//                     : checkbox
//             )
//         )
//     }

//     const allRequiredCheckboxesChecked = limit
//         ? checkboxState.map((checkbox) => checkbox.value).filter(Boolean)
//               .length === limit
//         : checkboxState.map((checkbox) => checkbox.value).every(Boolean)

//     return [
//         checkboxState,
//         toggleCheckbox,
//         allRequiredCheckboxesChecked,
//     ] as const
// }

export enum ActionType {
    LoadAction,
    UpdateAction,
}

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

    //? save/submit operations, each with doc requery
    const [saveWorkInitial, saveWorkInitialResponse] = useAuthMutation(
        SAVE_WORK_INITIAL,
        {
            query: DOCUMENT_QUERY,
            variables: {
                stage_id: stageId,
                includeDevOptions: !!includeDevOptions,
            },
            idRequired: 'teamId',
        },
        () => setSaveComplete(true)
    )

    const [saveWork, saveWorkResponse] = useAuthMutation(
        SAVE_WORK,
        {
            query: DOCUMENT_QUERY,
            variables: {
                stage_id: stageId,
                includeDevOptions: !!includeDevOptions,
            },
            idRequired: 'teamId',
        },
        () => setSaveComplete(true)
    )

    const [submitWorkInitial, submitWorkInitialResponse] = useAuthMutation(
        SUBMIT_WORK_INITIAL,
        {
            query: DOCUMENT_QUERY,
            variables: {
                stage_id: stageId,
                includeDevOptions: !!includeDevOptions,
            },
            idRequired: 'teamId',
        },
        () => setSubmitComplete(true)
    )

    const [submitWork, submitWorkResponse] = useAuthMutation(
        SUBMIT_WORK,
        {
            query: DOCUMENT_QUERY,
            variables: {
                stage_id: stageId,
                includeDevOptions: !!includeDevOptions,
            },
            idRequired: 'teamId',
        },
        () => setSubmitComplete(true)
    )

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

    const [submitFeedback, submitFeedbackResponse] = useAuthMutation(
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
