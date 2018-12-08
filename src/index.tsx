import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StatefulHello from './components/StatefulHello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <StatefulHello name={"TypeScript"} enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
  // getElementById returns null if 'root' not present
  // We assume getElementById will succeed, so we need to convince TypeScript of that using as syntax
  // Could also use document.getElementById('root')! which removes null and undefined from prior expression
);
registerServiceWorker();
