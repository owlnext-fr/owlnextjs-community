import { useState, useEffect, useRef } from 'react'
import React from 'react'

import { EditorState, convertFromRaw } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

import View from './View';

type Props = {
  setter: any,
  currentContent: any,
  readOnly: any;
}

const ViewModel: React.FC<Props> = ({
  setter,
  currentContent,
  readOnly,
}) => {
  const [finalString, setFinalString] = useState<string>('')
  const [initialContent, setInitialContent] = useState<any>(null)
  const [editor, setEditor] = useState<boolean>(false)
  const [editorState, setEditorState] = useState<any>(EditorState.createEmpty())
  const [options, setOptions] = useState<Array<string>>(['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'remove', 'history'])
  const onEditorStateChange = (state: any) => {
      setEditorState(state)
  }

  const handleChange = (contentState: any) => {
    setFinalString(draftToMarkdown(contentState))
  }

  useEffect(() => {
      if (typeof(currentContent) !== 'undefined' && currentContent !== '' && currentContent !== null) {
          const temp = currentContent
          setFinalString(temp)
          setInitialContent(convertFromRaw(markdownToDraft(temp)))
          setEditorState(EditorState.createWithContent(convertFromRaw(markdownToDraft(temp))))
      } else {
        setFinalString('')
        setInitialContent(convertFromRaw(markdownToDraft((''))))
        setEditorState(EditorState.createWithContent(convertFromRaw(markdownToDraft(''))))
      }
  }, [currentContent])
  
  useEffect(() => {
      setEditor(true)
  }, [])

  useEffect(() => {
      setter(finalString)
  }, [finalString])

  return (
    <View
      initialContent={initialContent}
      readOnly={readOnly}
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      handleChange={handleChange}
      options={options}
      editor={editor}
    />
  );
};

export default ViewModel;

