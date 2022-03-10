let ADD_POST='ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={
    posts : [
        {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
        {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
    ]
};
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{

        let newPost = {
            id: 3,
            message: state.newPostText,
            likecounts:1,
            dislikecounts:1
        };
       return {
            ...state,
            posts : [...state.posts, newPost],
            newPostText:''
              }
        }
            case UPDATE_NEW_POST_TEXT:{
                return {...state,
                    newPostText : action.newText}
            }

        default :return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text});

export default profileReducer;