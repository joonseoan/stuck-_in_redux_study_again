import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { createStore } from 'redux';

import reducers from './reducers';

import { Provider } from 'react-redux';

//import registerServiceWorker from './registerServiceWorker';

const store = createStore (reducers);



ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>, document.getElementById('root'));


//registerServiceWorker();
