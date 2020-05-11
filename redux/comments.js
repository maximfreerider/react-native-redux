/*
* comments reducer
*/

import * as ActionTypes from './ActionTypes'

const localState = {
    errMess: null,
    comments: []
}

export const comments = (state=localState, action) => {
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
        default:
            return state
    }
}