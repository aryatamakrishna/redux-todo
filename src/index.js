import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import './css/index.css';

let store = createStore(reducers);

// CSS

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
