import {createStore, combineReducers, appMiddleware, compose} from "redux";
const storeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const middleware=[

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


const store = createStore(rootReducer,applyMiddleware(...middleware));