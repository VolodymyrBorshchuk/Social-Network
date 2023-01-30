import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const USER_FULL_NAME = 'USER_FULL_NAME';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        { id: "1", message: "Hello, its my 1 post", likesCount: "3" },
        { id: "2", message: "Hello, its my 2 post?", likesCount: "6" },
        { id: "3", message: "Hello, its my 3 post", likesCount: "13" },
    ],
    profile: null,
    user: "",
    status: ""
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                message: action.newPostText,
                likesCount: "0"
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case USER_FULL_NAME: {
            return { ...state, user: action.user }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        case DELETE_POST: {
            return { ...state, postsData: state.postsData.filter(p => p.id != action.id) }
        }

        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photo: action.photo } }
        }
        default: return state;
    }
}

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserFullName = (user) => ({ type: USER_FULL_NAME, user });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));
    dispatch(setUserFullName(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photo))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer