import {profileAPI, usersAPI} from "../../api/api";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
        {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let number = state.posts.length + 1;
            let newPost = {
                id: number,
                message: state.newPostText,
                likecounts: 1,
                dislikecounts: 1
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});//action creators
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});//action creators
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});//action creators
export const setStatus = (status) => ({type: SET_STATUS, status});//action creators

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(({data}) => {
            dispatch(setUserProfile(data));
        });
};//thunk
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(({data}) => {
            dispatch(setStatus(data));
        });
};//thunk
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatusAPI(status)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};//thunk

export default profileReducer;