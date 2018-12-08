import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore } from 'redux';
import { enthusiasm } from './reducers/idnex';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
      <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
  // getElementById returns null if 'root' not present
  // We assume getElementById will succeed, so we need to convince TypeScript of that using as syntax
  // Could also use document.getElementById('root')! which removes null and undefined from prior expression
);
registerServiceWorker();
