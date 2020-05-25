/*
* dishesReducer reducer
*/

import * as ActionTypes from '../ActionTypes'

const localState = {
    isLoading: true,
    errMess: null,
    dishes: []
}

export const dishesReducer = (state= {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case ActionTypes.DISHES_LOADING:
            return {...state,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case ActionTypes.DISHES_FAILED:
            return {...state,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
        default:
            return state
    }
}