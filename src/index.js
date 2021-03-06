import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import M from 'materialize-css'

import App from './App';
import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './config/firebaseConfig';


const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true }), // redux binding for firebase
      reduxFirestore(firebaseConfig) // redux bindings for firestore
    )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister();
  M.AutoInit();
});

