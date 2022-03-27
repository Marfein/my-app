import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import navReducer from "./NavReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidePage:navReducer,
    usersPage:UsersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store =store;

export default store;