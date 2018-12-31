import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './assets/index.css';
import TodoApp from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
