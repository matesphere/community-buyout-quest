import React, { FC } from 'react'
import { Link } from 'gatsby'

import { TextEditor } from '../TextEditor'
import { SaveSubmitSection } from './SaveSubmitSection'

import HelpIcon from '../../../assets/help-icon.svg'

import '../../../scss/index.scss'

interface SwotType {
    strengths: string
    weaknesses: string
    opportunities: string
    threats: string
}

interface SWOTProps {
    swotTitle?: string
    docFeedback?: any
    teamDevOption: {
        team_choice_name: string
        development_option: {
            option: string
            display_name: string
        }
    }
    swotState: SwotType
    changeFunc?: (section: string) => (data: any) => void
    saveWorkObj?: { call: any; response: any; saveComplete: boolean }
    docSubmitted: boolean
}

export const SWOT: FC<SWOTProps> = ({
    swotTitle,
    docFeedback,
    teamDevOption: {
        team_choice_name,
        development_option: { display_name },
    },
    swotState,
    changeFunc,
    saveWorkObj,
    docSubmitted,
}) => (
    <>
        <div className="row">
            <div className="col-lg-8">
                {swotTitle && (
                    <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                        {swotTitle}
                    </h2>
                )}

                {!docSubmitted && (
                    <p className="sm-type-lead mb-4">
                        Use the SWOT Analysis to gather information in order to
                        complete the Feasibility Study template.
                    </p>
                )}

                {docFeedback && (
                    <div className="side-grey">
                        <h3 className="task ticker mb-2">
                            <span className="ticker-sheet ticker-feedback">
                                <HelpIcon />
                            </span>
                            <span className="sm-type-drum green-highlight">
                                Tutor feedback:
                            </span>
                        </h3>
                        <div className="form-holder-border">
                            <p
                                className="sm-type-lead"
                                dangerouslySetInnerHTML={{
                                    __html: docFeedback.feedback,
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {!docSubmitted && (
                <div className="col-lg-4">
                    <p className="sm-type-guitar mb-2">
                        <span className="side-icon side-icon-orange">
                            <HelpIcon />
                        </span>
                        Helpful information
                    </p>
                    <div className="side-grey">
                        <p className="sm-type-amp">
                            Fill out the SWOT diagram, using the information
                            provided elsewhere in stage 3 to help you.
                        </p>

                        <p className="sm-type-amp">
                            Read the{' '}
                            <Link to="/information/about-swot">SWOT guide</Link>{' '}
                            here
                        </p>
                        <p className="sm-type-amp">
                            <strong>
                                Remember to hit 'save work' on each of your
                                SWOTs, before leaving the page!
                            </strong>
                        </p>
                    </div>
                </div>
            )}
        </div>
        <h3 className="sm-type-drum sm-type-drum--medium mt-2 mb-2">
            {team_choice_name || display_name}
        </h3>
        <div className="rowgrid mt-4">
            <div className="col-grid">
                <div className="form-holder-border">
                    <div id="more-detail-hint">
                        <h4 className="sm-type-drum sm-type-drum--medium mb-1 red-highlight">
                            Strengths
                        </h4>
                        <p className="sm-type-amp mb-1">Areas of advantage</p>
                    </div>
                    <div className="ck-textarea">
                        <TextEditor
                            data={swotState?.['strengths'] || ''}
                            onChange={
                                changeFunc ? changeFunc('strengths') : () => {}
                            }
                            docSubmitted={docSubmitted}
                        />
                    </div>
                </div>
            </div>

            <div className="col-grid">
                <div className="form-holder-border">
                    <div id="more-detail-hint">
                        <h4 className="sm-type-drum sm-type-drum--medium mb-1 greendark-highlight">
                            Weaknesses
                        </h4>
                        <p className="sm-type-amp mb-1">Areas of challenge</p>
                    </div>
                    <div className="ck-textarea">
                        <TextEditor
                            data={swotState?.['weaknesses'] || ''}
                            onChange={
                                changeFunc ? changeFunc('weaknesses') : () => {}
                            }
                            docSubmitted={docSubmitted}
                        />
                    </div>
                </div>
            </div>
            <div className="col-grid">
                <div className="form-holder-border">
                    <div id="more-detail-hint">
                        <h4 className="sm-type-drum sm-type-drum--medium mb-1 green-highlight">
                            Opportunities
                        </h4>
                        <p className="sm-type-amp mb-1">
                            Positive influences outside your control
                        </p>
                    </div>
                    <div className="ck-textarea">
                        <TextEditor
                            data={swotState?.['opportunities'] || ''}
                            onChange={
                                changeFunc
                                    ? changeFunc('opportunities')
                                    : () => {}
                            }
                            docSubmitted={docSubmitted}
                        />
                    </div>
                </div>
            </div>

            <div className="col-grid">
                <div className="form-holder-border">
                    <div id="more-detail-hint">
                        <h4 className="sm-type-drum sm-type-drum--medium mb-1">
                            Threats
                        </h4>
                        <p className="sm-type-amp mb-1">
                            Negative influences outside your control
                        </p>
                    </div>
                    <div className="ck-textarea">
                        <TextEditor
                            data={swotState?.['threats'] || ''}
                            onChange={
                                changeFunc ? changeFunc('threats') : () => {}
                            }
                            docSubmitted={docSubmitted}
                        />
                    </div>
                </div>
            </div>
        </div>

        <SaveSubmitSection
            saveWorkObj={saveWorkObj}
            docSubmitted={docSubmitted}
        />
    </>
)
