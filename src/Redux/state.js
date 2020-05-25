import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReducerMovie from './Reducermovies'
import { detailReducer } from '../Redux/detailReducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    movies: ReducerMovie,
    detail: detailReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store