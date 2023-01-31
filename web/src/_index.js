import { createRoot } from 'react-dom/client';
import App from './_app.js';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
