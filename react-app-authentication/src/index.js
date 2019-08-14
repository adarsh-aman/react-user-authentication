import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { combineReducers } from 'redux';
import errorReducer from './reducers/errorReducer';

export default combineReducers({
    errors: errorReducer
});

ReactDOM.render(<App />, document.querySelector("#root"));
