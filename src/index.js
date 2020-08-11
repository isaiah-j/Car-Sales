import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {carReducer} from './redux/carReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bulma/css/bulma.css';
import './styles.scss';
const store = createStore(carReducer)



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    rootElement);
