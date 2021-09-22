import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import storeExports from './redux/store/index'
import { PersistGate } from 'redux-persist/integration/react';
// import {persistor} from '../src/redux/store'

ReactDOM.render(

  <Provider store={storeExports.store}>
    <PersistGate persistor={storeExports.persistor}>
      <App />

    </PersistGate>

  </Provider>,

  document.getElementById('root')
)
