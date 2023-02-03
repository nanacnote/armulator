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
  const { on, off, type, getTheme, getCodeBuffer, setCodeBuffer } =
    useSession();

  const aceHandler = {
    [LIGHT_THEME_NAME]: 'ace/theme/iplastic',
    [DARK_THEME_NAME]: 'ace/theme/idle_fingers',
    isLocalChange: true,
    init: function () {
      editor.current = ace.edit('ace-editor-container');
      editor.current.session.setMode('ace/mode/assembly_x86');
      editor.current.setTheme((this as any)[getTheme()!]);
      editor.current.setValue(getCodeBuffer(), -1);
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
        setCodeBuffer(editor.current.session.getValue());
      }
    },
    insertUploadedCode: function () {
      const incomingContent = getCodeBuffer();
      const currentContent = editor.current.session.getValue();
      if (incomingContent !== currentContent) {
        this.isLocalChange = false;
        editor.current.setValue(getCodeBuffer());
        this.isLocalChange = true;
      }
    }
  };

  const changeThemeHandler = aceHandler.changeTheme.bind(aceHandler);
  const saveEditorContentHandler =
    aceHandler.saveEditorContent.bind(aceHandler);
  const insertUploadedCodeHandler =
    aceHandler.insertUploadedCode.bind(aceHandler);

  React.useEffect(() => {
    aceHandler.init();
    on(type.THEME, changeThemeHandler, {}, false);
    on(type.CODE, insertUploadedCodeHandler, {}, false);
    return () => {
      off(type.THEME, changeThemeHandler);
      off(type.CODE, insertUploadedCodeHandler);
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
