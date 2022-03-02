let ADD_POST='ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
                    {id: 4, message: 'lol'}]
            }

        },
    _callSubscriber () {
        console.log('statechange')
    },
    getState(){
       debugger;
      return this._state;
    },
subscribe (observer) {
    this._callSubscriber = observer;
},
dispatch(action){
  if (action.type === 'ADD-POST'){
      let newPost = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount:1,
          dislikesCount:1
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText='';
      this._callSubscriber(this._state);
  }else if (action.type==='UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText=action.newText;
      this._callSubscriber(this._state);
  }
}
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text});

window.store=store;
export default store;