import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  signinUserReducer,
  userRegisterReducer,
  verifyUserReducer,
} from "./reducers/user";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: signinUserReducer,
  verifyUser: verifyUserReducer,
});

let initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
