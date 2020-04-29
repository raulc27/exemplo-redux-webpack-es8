import { combineReducers, appMiddleware, compose} from "redux";
import {configureStore, getDefaultMiddleware, createAction} from "@reduxjs/toolkit";
const storeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const loginSuccess = createAction("LOGIN_SUCCESS");
const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");

store.dispatch(loginSuccess("aPayload"))

/*
function loginSuccess(payload){
  return {type:LOGIN_SUCCESS,payload};
}

function fetchLinksRequest(){
  return {type:FETCH_LINKS_REQUEST};
}

function fetchLinksSuccess(payload){
  return {type: FETCH_LINKS_SUCCESS, payload};
}

*/


// ********************************************************

const middleware=[

  ...getDefaultMiddleware(),
  
  //middlewares...



];


const authState = {
  token: "",
};

function authReducer(state=authState,action){
  return state;
}

const rootReducer=combineReducer({
  auth: authReducer,
});


const store = createStore({
  reducer:{
    auth: authReducer,
  },
  middleware,
});