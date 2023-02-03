import * as React from 'react';
import ace from 'ace-builds';
import { useSession } from '../../hooks';
import { DARK_THEME_NAME, LIGHT_THEME_NAME } from '../../lib/helper/def';

interface TProps {}

/**
 * Editor component
 */
const Editor: React.FC<TProps> = (): JSX.Element => {
  const editor = React.useRef<any>(null);
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const {
    on,
    off,
    type,
    getTheme,
    getInstructionBuffer,
    setInstructionBuffer
  } = useSession();

  const aceHandler = {
    [LIGHT_THEME_NAME]: 'ace/theme/iplastic',
    [DARK_THEME_NAME]: 'ace/theme/idle_fingers',
    isLocalChange: true,
    init: function () {
      editor.current = ace.edit('ace-editor-container');
      editor.current.session.setMode('ace/mode/assembly_x86');
      editor.current.setTheme((this as any)[getTheme()!]);
      editor.current.setValue(getInstructionBuffer(), -1);
      editor.current.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
      });
      editor.current.session.on('change', saveEditorContentHandler);
    },
    kill: function () {
      editor.current.session.off('change', saveEditorContentHandler);
      editor.current.destroy();
      editor.current.container.remove();
    },
    changeTheme: function (e: CustomEventInit) {
      editor.current.setTheme((this as any)[e.detail]);
    },
    saveEditorContent: function () {
      if (this.isLocalChange) {
        setInstructionBuffer(editor.current.session.getValue());
      }
    },
    insertUploadedInstruction: function () {
      const incomingContent = getInstructionBuffer();
      const currentContent = editor.current.session.getValue();
      if (incomingContent !== currentContent) {
        this.isLocalChange = false;
        editor.current.setValue(getInstructionBuffer());
        this.isLocalChange = true;
      }
    }
  };

  const changeThemeHandler = aceHandler.changeTheme.bind(aceHandler);
  const saveEditorContentHandler =
    aceHandler.saveEditorContent.bind(aceHandler);
  const insertUploadedInstructionHandler =
    aceHandler.insertUploadedInstruction.bind(aceHandler);

  React.useEffect(() => {
    aceHandler.init();
    on(type.THEME, changeThemeHandler, {}, false);
    on(type.INSTRUCTION, insertUploadedInstructionHandler, {}, false);
    return () => {
      off(type.THEME, changeThemeHandler);
      off(type.INSTRUCTION, insertUploadedInstructionHandler);
      aceHandler.kill();
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <pre id="ace-editor-container" className="h-[473px] text-base"></pre>
    </div>
  );
};

export default Editor;
