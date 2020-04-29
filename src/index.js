import { combineReducers, appMiddleware, compose} from "redux";
import {configureStore, getDefaultMiddleware, createAction} from "@reduxjs/toolkit";
const storeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const loginSuccess = createAction("LOGIN_SUCCESS");
const loginFailed = createAction("LOGIN_FAILED");

//const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
//const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");

store.dispatch(loginSuccess("aPayload"))


//const LOGIN_SUCCESS = "LOGIN_SUCCESS";
//const LOGIN_FAILED = "LOGIN_FAILED";

function loginSuccess(payload){
  return {type:LOGIN_SUCCESS,payload};
}

function loginFailed(payload){
  return {type:LOGIN_FAILED, payload};
}


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

//reducer..

const authState = {
  token: "",
  error:"",
};
/*
function authReducer(state=authState,action){
  switch(action.type){
    
    // usando object spread (ES8)
    case LOGIN_SUCCESS:
      return {...state,token:action.payload}

    case LOGIN_FAILED:
      return {...state,error:action.payload}

    default:
      return state;
  }
}
*/

const authReducer = createReducer(authState,{
  [loginSuccess]:(state,action)=>{
    state.token=action.payload;
    return state;
  },
  [loginFailed]:(state,action)=>{
    state.error=action.payload;
    return state;
  }
})


const authReducer = createReducer(authState, {
  [loginSuccess]:(state,action)=>{

  },

  [loginFailed]:(state, action)=>{
    //
  },

});


const rootReducer=combineReducer({
  auth: authReducer,
});


const store = createStore({
  reducer:{
    auth: authReducer,
  },
  middleware,
});