import dynamic from "next/dynamic"

import styles from './styles.module.scss';

type EditorType = {
  initialContentState: any,
  toolbarHidden: boolean,
  editorState: any,
  onEditorStateChange: () => void,
  onChange: () => void,
  toolbar: any,
  readonly: boolean
}

const Editor: any = dynamic(
  () => {
    // @ts-ignore
    return import("react-draft-wysiwyg").then(mod => mod.Editor);
  },
  { ssr: false }
)

type Props = {
  initialContent: any,
  readOnly: boolean,
  editorState: any,
  onEditorStateChange: any,
  handleChange: any,
  options: any,
  editor: boolean;
}
  
const View: React.FC<Props> = ({
  initialContent,
  readOnly,
  editorState,
  onEditorStateChange,
  handleChange,
  options,
  editor,
}) => {
  return (
    <div className={[styles.customWysiwyg, (readOnly ? styles.readOnly : '')].join(' ')}>
      { editor &&
        <>
          <Editor
              editorRef={(ref: any) => {ref?.focus()}}
              initialContentState={initialContent}
              toolbarHidden={readOnly}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              onChange={handleChange}
              toolbar={{
                  options: options,
                  inline: {
                      options: ['bold', 'italic', 'underline', 'strikethrough'],
                  },
              }}
              readOnly={readOnly}
          />
        </>
      }
    </div>
  );
};

export default View;

