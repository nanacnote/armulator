import * as React from 'react';
import cn from 'classnames';
import ace from 'ace-builds';
import { useSession } from '../../hooks';
import {
  DARK_THEME_NAME,
  LIGHT_THEME_NAME,
  LOG_HEADER_MSG
} from '../../lib/helper/def';
import { GlobalDataContext } from '../../context/GlobalData';

interface TProps {}

/**
 * Editor component
 */
const Editor: React.FC<TProps> = (): JSX.Element => {
  const editor = React.useRef<any>(null);
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { store } = React.useContext(GlobalDataContext);
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
    const entry = thisComponent.current?.getElementsByClassName(
      'text-entry-for-logger'
    ) as HTMLCollectionOf<HTMLDivElement>;
    if (entry.length) {
      entry[entry.length - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [store.editorLogs]);

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
    <div ref={thisComponent} className="p-4">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-9 md:col-span-6">
          <pre id="ace-editor-container" className="h-[473px] text-base"></pre>
        </div>
        <div className="relative col-span-9 md:col-span-3 border">
          <div
            id="editor-view-console-logger"
            className="mockup-code min-w-[100%] text-xs h-[250px] md:h-[473px] overflow-auto"
          >
            <pre className="text-warning mb-4">
              <code>{LOG_HEADER_MSG}</code>
            </pre>
            {store.editorLogs.map((item: any, index: number) => (
              <pre
                key={`${index}-${item.style}`}
                className={cn('text-entry-for-logger', item.style)}
              >
                <code>{item.msg}</code>
              </pre>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
