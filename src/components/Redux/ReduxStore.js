import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import navReducer from "./NavReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidePage:navReducer,
    usersPage:UsersReducer
});

let store = createStore(reducers);

window.store =store;

export default store;