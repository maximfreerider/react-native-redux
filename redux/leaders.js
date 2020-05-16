/*
* leaders reducer
*/

import * as ActionTypes from './ActionTypes'

const localState = {
    isLoading: true,
    errMess: null,
    leaders: []
}

export const leaders = (state=localState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state,
                isLoading: false,
                errMess: null,
                leaders: action.payload
            }
        case ActionTypes.LEADERS_LOADING:
            return {...state,
                isLoading: true,
                errMess: null,
                leaders: []
            }
        case ActionTypes.LEADERS_FAILED:
            return {...state,
                errMess: action.payload,
                leaders: [],
                isLoading: false
            }
        default:
            return state
    }
}