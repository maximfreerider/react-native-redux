import * as ActionTypes from './ActionTypes'
const initialstate = {
    favorites: []
}
export const favorites = (state=[], action) => {
    switch (action.type) {
        case ActionTypes.DELETE_FAVORITE:
            return state.filter(favorite => favorite !== action.payload)
        case ActionTypes.ADD_FAVORITE:
            if (state.some(el => el === action.payload)) {
                console.log(state)
                return state
            } else {
                return state.concat(action.payload)
            }
        default:
            return state
    }
}