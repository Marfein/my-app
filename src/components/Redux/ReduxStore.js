import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import navReducer from "./NavReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidePage:navReducer
});
let store=createStore(reducers);

export default store;