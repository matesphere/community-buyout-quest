import React, { FC } from 'react'
import { TextEditor } from '../TextEditor'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import '../../../scss/index.scss'
import { RichTextContent } from '@graphcms/rich-text-types'
import { InfoBlock } from '../../student/InfoBlock'

interface FeasibilityStudyType {
    benefits: string
    reasonsSucceed: string
    reasonsFail: string
}

interface FeasibilityOptionSectionProps {
    workState: { [key: string]: FeasibilityStudyType }
    option: string
    changeFunc?: (
        option: string | null,
        section: string | null
    ) => (data: any) => void
    docSubmitted: boolean
}

export const FeasibilityOptionSection: FC<FeasibilityOptionSectionProps> = ({
    workState,
    option,
    changeFunc,
    docSubmitted,
}) => (
    <>
        {option !== 'team-choice' && (
            <a
                href={`/information/${option}-alt`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Development Option information
            </a>
        )}
        <br />
        <br />
        <div id="more-detail-hint11">
            <p className="sm-type-bigamp mb-1 redorange-highlight">
                Benefits to the Community
            </p>
        </div>
        <div className="ck-textarea">
            <TextEditor
                data={workState[option]?.['benefits'] || ''}
                onChange={
                    changeFunc ? changeFunc(option, 'benefits') : () => {}
                }
                docSubmitted={docSubmitted}
            />
        </div>
        <div id="more-detail-hint22">
            <p className="sm-type-bigamp mb-1 green-highlight">
                Reasons the Scheme is likely to succeed
            </p>
        </div>
        <div className="ck-textarea">
            <TextEditor
                data={workState[option]?.['reasonsSucceed'] || ''}
                onChange={
                    changeFunc ? changeFunc(option, 'reasonsSucceed') : () => {}
                }
                docSubmitted={docSubmitted}
            />
        </div>
        <div id="more-detail-hint33">
            <p className="sm-type-bigamp mb-1 red-highlight">
                Risks that might cause the Scheme to fail
            </p>
        </div>
        <div className="ck-textarea">
            <TextEditor
                data={workState[option]?.['reasonsFail'] || ''}
                onChange={
                    changeFunc ? changeFunc(option, 'reasonsFail') : () => {}
                }
                docSubmitted={docSubmitted}
            />
        </div>
    </>
)

interface FeasibilityStudyProps {
    docFeedback?: any
    devOptions: Array<{
        development_option: {
            option: string
            display_name: string
        }
    }>
    workState: { [key: string]: string | FeasibilityStudyType }
    changeFunc?: (
        option: string | null,
        section: string | null
    ) => (data: any) => void
    saveWorkObj?: { call: any; response: any }
    docSubmitted: boolean
    questions?: Array<{ raw: RichTextContent }>
}

export const FeasibilityStudy: FC<FeasibilityStudyProps> = ({
    devOptions,
    workState,
    changeFunc,
    docSubmitted,
    questions,
}) => (
    <ol>
        <li className="mb-4">
            {questions && <InfoBlock items={[questions[0]]} />}
            <div className="form-holder-border">
                <div className="ck-textarea">
                    <TextEditor
                        data={workState.whyBuy || ''}
                        onChange={
                            changeFunc ? changeFunc(null, null) : () => {}
                        }
                        docSubmitted={docSubmitted}
                    />
                </div>
            </div>
        </li>

        <li className="mb-4">
            {questions && <InfoBlock items={[questions[1]]} />}

            <Accordion allowZeroExpanded>
                {devOptions.map(
                    (
                        {
                            team_choice_name,
                            development_option: { option, display_name },
                        },
                        i
                    ) => (
                        <AccordionItem key={i} className="form-holder-border">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {team_choice_name || display_name}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <FeasibilityOptionSection
                                    {...{
                                        workState,
                                        option,
                                        changeFunc,
                                        docSubmitted,
                                    }}
                                />
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </li>
    </ol>
)
