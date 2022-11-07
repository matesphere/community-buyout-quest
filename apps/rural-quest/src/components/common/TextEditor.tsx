import React, { useState, useEffect, useRef } from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const TextEditor = ({ data, onChange, docSubmitted }) => {
    const editorRef = useRef<any>()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || {}

    useEffect(() => {
        if (!docSubmitted) {
            editorRef.current = {
                CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
                ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
            }
            setEditorLoaded(true)
        }
    }, [docSubmitted])

    if (docSubmitted) {
        return (
            <div
                className="submitted-holder"
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        )
    }

    return editorLoaded ? (
        <CKEditor
            // name="editorOne"
            editor={ClassicEditor}
            data={data}
            onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log('Editor is ready to use!', editor)
            }}
            onChange={(event, editor) => {
                const data = editor.getData()
                // console.log({
                //     event,
                //     editor,
                //     data,
                // })
                onChange(data)
            }}
            config={{
                toolbar: ['undo', 'redo', '|', 'numberedList', 'bulletedList'],
                height: ['300px'],
            }}
        />
    ) : null
}
