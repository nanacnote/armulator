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
    on(type.THEME_CHANGE, changeThemeHandler, {}, false);
    on(type.INSTRUCTION_CHANGE, insertUploadedInstructionHandler, {}, false);
    return () => {
      off(type.THEME_CHANGE, changeThemeHandler);
      off(type.INSTRUCTION_CHANGE, insertUploadedInstructionHandler);
      aceHandler.kill();
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7 md:col-span-5">
          <pre id="ace-editor-container" className="h-[473px] text-base"></pre>
        </div>
        <div className="col-span-7 md:col-span-2">
          <div className="mockup-code h-[473px] overflow-auto">
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
