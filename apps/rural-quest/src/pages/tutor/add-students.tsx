import React, { useState, useContext, FC, Dispatch } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { NewQuestContext } from '../../utils/tutor-contexts'

import { StudentType } from '../../gql/types'

import '../../scss/index.scss'
import { useEffect } from 'react'

const EMPTY_STUDENT: StudentType = {
    firstName: '',
    lastName: '',
    email: '',
}

interface StudentInputProps {
    num: number
    student: {
        firstName: string
        lastName: string
        email: string
    }
    setStudents: Dispatch<(students: Array<StudentType>) => Array<StudentType>>
}

const updateField =
    (studentNum: number, field: string, value: string) =>
    (students: Array<StudentType>) => {
        const studentsToUpdate = [...students]
        const updatedStudent = { ...students[studentNum], [field]: value }
        studentsToUpdate[studentNum] = updatedStudent

        return studentsToUpdate
    }

const removeStudentInput =
    (studentNum: number) => (students: Array<StudentType>) => {
        const studentsToUpdate = [...students]
        studentsToUpdate.splice(studentNum, 1)

        return studentsToUpdate
    }

const StudentInput: FC<StudentInputProps> = ({
    num,
    student: { firstName, lastName, email },
    setStudents,
}) => {
    return (
        <div className="side-grey row mb-4">
            <div className="col-lg-8">
                <p className="sm-type-lead">Student {num + 1}</p>
            </div>
            <div className="col-lg-4 text-align-right">
                <button
                    className="btn-outline-sm"
                    type="button"
                    onClick={() => setStudents(removeStudentInput(num))}
                >
                    <strong>X</strong> Remove
                </button>
            </div>
            <div className="col-lg-4 mb-2">
                <label className="form-label">First Name</label>
                <input
                    type="name"
                    required
                    className="form-control"
                    value={firstName}
                    onChange={({ target: { value } }) =>
                        setStudents(updateField(num, 'firstName', value))
                    }
                />
            </div>
            <div className="col-lg-4 mb-2">
                <label className="form-label">Last Name</label>
                <input
                    type="name"
                    required
                    className="form-control"
                    value={lastName}
                    onChange={({ target: { value } }) =>
                        setStudents(updateField(num, 'lastName', value))
                    }
                />
            </div>
            <div className="col-lg-4 mb-2">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    required
                    className="form-control"
                    value={email}
                    onChange={({ target: { value } }) =>
                        setStudents(updateField(num, 'email', value))
                    }
                />
            </div>
        </div>
    )
}

const arraysAreEqual = (arr1: Array<any>, arr2: Array<any>) =>
    JSON.stringify(arr1) === JSON.stringify(arr2)

interface ConfirmModalProps {
    students: Array<StudentType>
    setShowModal: Dispatch<boolean>
}

const ConfirmModal = ({ students, setShowModal }: ConfirmModalProps) => {
    const { studentsToAdd, setStudentsToAdd } = useContext(NewQuestContext)

    return (
        <div className="modal-window">
            <div>
                <button
                    onClick={() => setShowModal(false)}
                    title="Close"
                    className="modal-close"
                >
                    Cancel
                </button>

                {!arraysAreEqual(students, studentsToAdd) && (
                    <>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            {`You are about to add ${students.length} students! Is this correct?`}{' '}
                        </p>

                        <button
                            className="btn-solid-lg mt-4"
                            onClick={() => {
                                setStudentsToAdd(students)
                            }}
                        >
                            Yes, add students
                        </button>
                    </>
                )}

                {/* {loading && <LoadingSpinner delay={200} />} */}

                {arraysAreEqual(students, studentsToAdd) && (
                    <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                        Done!{' '}
                        <Link to="/tutor/create-team">
                            Go to create teams {'>'}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    )
}

const TutorAddStudentsPage: FC = () => {
    const [students, setStudents] = useState<Array<StudentType>>([
        EMPTY_STUDENT,
        EMPTY_STUDENT,
    ])
    const [showModal, setShowModal] = useState(false)
    const { studentsToAdd } = useContext(NewQuestContext)

    useEffect(() => {
        if (studentsToAdd.length > 0) {
            setStudents(studentsToAdd)
        }
    }, [])

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>New Quest - Add Students</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Add students
                            </h2>

                            <p className="sm-type-lead">
                                Add all students who will be taking The Quest.
                            </p>

                            <form
                                className="mb-4 container"
                                // id="form-login"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    setShowModal(true)
                                }}
                            >
                                {students.map((student, i) => {
                                    return (
                                        <StudentInput
                                            key={i}
                                            num={i}
                                            setStudents={setStudents}
                                            student={student}
                                        />
                                    )
                                })}

                                <button
                                    className="btn-outline-reg mb-4"
                                    type="button"
                                    onClick={() =>
                                        setStudents([
                                            ...students,
                                            EMPTY_STUDENT,
                                        ])
                                    }
                                >
                                    + Add more names
                                </button>

                                <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                    All done?
                                </h2>
                                <p className="sm-type-lead mb-4">
                                    Once you have added all your students'
                                    details, hit 'submit names' below.
                                </p>

                                <button type="submit" className="btn-solid-lg">
                                    Submit names
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {showModal && <ConfirmModal {...{ students, setShowModal }} />}
            </main>
        </>
    )
}

export default TutorAddStudentsPage
