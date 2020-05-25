/*
* commentsReducer reducer
*/

import * as ActionTypes from '../ActionTypes'

const localState = {
    errMess: null,
    comments: []
}

export const commentsReducer = (state=localState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state,
                errMess: null,
                comments: action.payload
            }
        case ActionTypes.COMMENTS_FAILED:
            return {...state,
                errMess: action.payload,
                comments: []
            }
        case ActionTypes.ADD_COMMENT:
            console.log('comment reducer', state)
            return {
                ...state, comments: [...state.comments, action.payload]
            }
        default:
            return state
    }
}