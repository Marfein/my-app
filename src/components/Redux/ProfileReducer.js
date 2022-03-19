let ADD_POST='ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState={
    posts : [
        {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
        {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
    ],
 newPostText:"",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
        let number = state.posts.length + 1;
        let newPost = {
            id: number,
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
            case SET_USER_PROFILE:{
                return {...state,
                    profile : action.profile}
            }

        default :return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });

export default profileReducer;