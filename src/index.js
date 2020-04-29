import { combineReducers, appMiddleware, compose} from "redux";
import {configureStore} from "@reduxjs/toolkit";
const storeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const FETCH_LINKS_REQUEST = "FETCH_LINKS_REQUEST";
const FETCH_LINKS_SUCESS = "FETCH_LINKS_SUCCESS";

function loginSuccess(payload){
  return {type:LOGIN_SUCCESS,payload};
}

function fetchLinksRequest(){
  return {type:FETCH_LINKS_REQUEST};
}

function fetchLinksSuccess(payload){
  return {type: FETCH_LINKS_SUCCESS, payload};
}
 
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