import { createStore, combineReducers } from "redux";
import authReducer from "./authReducer";
import commentsReducer from "./commentsReducer";
import filmPageReducer from "./filmPageReducer";
import filmsCardReducer from "./FilmsCardReducer";
import genresReducer from "./genresReducer";
import searcFilmsReducer from "./searchFilmsReducer";

const reducers = combineReducers({
    genresReducer: genresReducer,
    filmsReducer: filmsCardReducer,
    filmPage: filmPageReducer,
    search : searcFilmsReducer,
    comments : commentsReducer,
    auth : authReducer
})
const store = createStore(reducers)

window.store = store
export default store