import { combineReducers, appMiddleware, compose} from "redux";
import {configureStore} from "@reduxjs/toolkit";
const storeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




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