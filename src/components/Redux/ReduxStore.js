import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import navReducer from "./NavReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware  from "redux-thunk";
import {reducer as formReducer}  from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidePage:navReducer,
    usersPage:UsersReducer,
    auth: authReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store =store;

export default store;