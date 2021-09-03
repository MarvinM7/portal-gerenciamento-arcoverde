import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);