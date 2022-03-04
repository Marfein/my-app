import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import NavReducer from "./NavReducer";
let store = {
   _state : {
            navPage:{
                friends:[
                    {id: 1, name: 'biba'},
                    {id: 2, name: 'boba'}
                ]
            },
            profilePage:{
                posts : [
                    {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
                    {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
                ],
                newPostText:'fdsfsd'
            },
            dialogsPage:{
                dialogs : [
                    {id: 1, name: 'Troll'},
                    {id: 2, name: 'Aguaman'},
                    {id: 3, name: 'Greg'},
                    {id: 4, name: 'Margaret'}
                ],
                messages : [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'cool'},
                    {id: 3, message: 'nice'},
                    {id: 4, message: 'lol'}],
            newMessageBody:""
            }

        },
    _callSubscriber () {
        console.log('statechange')
    },
    getState(){
      return this._state;
    },
subscribe (observer) {
    this._callSubscriber = observer;
},
dispatch(action){
 this._state.profilePage = profileReducer(this._state.profilePage,action);
 this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
 this._state.NavPage = NavReducer(this._state.NavPage,action);
 this._callSubscriber(this._state);
}
}

window.store=store;
export default store;