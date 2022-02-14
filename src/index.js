import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore, combineReducers} from "redux";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {createLogger as logger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk'
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/App'
import {searchRobots,requestRobots} from "./reducer";

const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger()))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
