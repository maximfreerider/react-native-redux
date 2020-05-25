import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import {dishesReducer} from './reducers/dishesReducer'
import {commentsReducer} from './reducers/commentsReducer'
import {promotionsReducer} from './reducers/promotionsReducer'
import {leadersReducer} from './reducers/leadersReducer'
import {favoritesReducer} from "./reducers/favoritesReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishesReducer,
            comments: commentsReducer,
            promotions: promotionsReducer,
            leaders: leadersReducer,
            favorites: favoritesReducer
        }),
        applyMiddleware(thunk)
    )
    return store
};