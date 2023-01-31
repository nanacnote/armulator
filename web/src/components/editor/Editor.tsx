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
    getASMTextChunk,
    setASMTextChunkByAceInput
  } = useSession();

  const aceHandler = {
    [LIGHT_THEME_NAME]: 'ace/theme/iplastic',
    [DARK_THEME_NAME]: 'ace/theme/idle_fingers',
    init: function () {
      editor.current = ace.edit('ace-editor-container');
      editor.current.session.setMode('ace/mode/assembly_x86');
      editor.current.setTheme((this as any)[getTheme()!]);
      editor.current.setValue(getASMTextChunk(), -1);
      editor.current.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
      });
      editor.current.session.on('change', editorChangeHandler);
    },
    kill: function () {
      editor.current.session.off('change', editorChangeHandler);
      editor.current.destroy();
      // editor.current.container.remove();
    },
    changeTheme: function (e: CustomEventInit) {
      editor.current.setTheme((this as any)[e.detail]);
    },
    setContent: function (_delta: any) {
      setASMTextChunkByAceInput(editor.current.session.getValue());
    },
    restartEditor: function (e: CustomEventInit) {
      this.kill();
      this.init();
    }
  };

  const editorChangeHandler = aceHandler.setContent.bind(aceHandler);
  const changeThemeHandler = aceHandler.changeTheme.bind(aceHandler);
  const restartEditorHandler = aceHandler.restartEditor.bind(aceHandler);

  React.useEffect(() => {
    aceHandler.init();
    on(type.THEME, changeThemeHandler, {}, false);
    // COMING HERE
    // on(type.UPLOAD, restartEditorHandler, {}, false);
    return () => {
      aceHandler.kill();
      off(type.THEME, changeThemeHandler);
      // off(type.UPLOAD, restartEditorHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <pre id="ace-editor-container" className="h-[473px] text-base"></pre>
    </div>
  );
};

export default Editor;
