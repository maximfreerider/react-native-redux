import * as ActionTypes from "../ActionTypes";

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})