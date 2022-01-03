import React from 'react';
import ReactDOM from 'react-dom';
import App from './shell/App';
import * as serviceWorker from './shell/serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();