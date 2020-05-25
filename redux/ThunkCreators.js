import {addDishes, dishesFailed, dishesLoading} from "./actionCreators/dishActionCreators";
import {addComment, addComments, commentsFailed} from "./actionCreators/commentActionCreators";
import {addPromos, promosFailed, promosLoading} from "./actionCreators/promotionActionCreators";
import {addLeaders, leadersFailed, leadersLoading} from "./actionCreators/leadersActionCreators";
import {getData} from "../services/APIService";


export const fetchComments = () => (dispatch) => {
    return getData('comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error)))
}


export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId, rating, author, comment
    }
    newComment.date = new Date().toISOString()
    newComment.id = Math.floor(Math.random() * 10**4)
    setTimeout(() => {
        dispatch(addComment(newComment))
        console.log('dispatched', newComment)
    })
}


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return getData('dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading())
    return getData('promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading())
    return getData('leaders')
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}
