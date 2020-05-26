import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import {dishesReducer} from './reducers/dishesReducer'
import {commentsReducer} from './reducers/commentsReducer'
import {promotionsReducer} from './reducers/promotionsReducer'
import {leadersReducer} from './reducers/leadersReducer'
import {favoritesReducer} from "./reducers/favoritesReducer";
import {persistStore, persistCombineReducers} from "redux-persist";
import storage from "redux-persist/es/storage";


export const ConfigureStore = () => {
    
    const config = {
        key: 'root',
        storage,
        debug: true
    }
    
    const store = createStore(
        persistCombineReducers(config, {
            dishes: dishesReducer,
            comments: commentsReducer,
            promotions: promotionsReducer,
            leaders: leadersReducer,
            favorites: favoritesReducer
        }),
        applyMiddleware(thunk)
    )

    const persistor = persistStore(store)

    return {persistor, store}
};
