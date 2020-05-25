import * as ActionTypes from "../ActionTypes";

export const postFavorite = (dishId) => (dispatch) => {
    console.log(dishId)
    setTimeout(() => {
        dispatch(addFavorite(dishId))
    }, 2000)
}

export const addFavorite = (dishId) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: dishId
})

export  const deleteFavorite = (dishId) => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: dishId
})