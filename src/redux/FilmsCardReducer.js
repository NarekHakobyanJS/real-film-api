const SET_FILMS_DATA = "films/SET_FILMS_DATA"
const CHANGE_CURRENT_PAGE = "films/CHANGE_CURRENT_PAGE"
const SET_ACTUAL_PAGES = "films/SET_ACTUAL_PAGES"
const SET_FILTER_GENRES = "films/SET_FILTER_GENRES"
const initialState = {
    filmsCard: [],
    pageSize : 20,
    pageNumber : 10000,
    currentPage : 1
}
const filmsCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS_DATA:
            return {
                ...state,
                filmsCard: action.payload
            }
        case CHANGE_CURRENT_PAGE : 
        return {
            ...state,
            currentPage : action.payload
        }
        case SET_ACTUAL_PAGES : 
        return {
            ...state,
            pageNumber : action.payload
        }
        case SET_FILTER_GENRES : 
        return {
            ...state,
            filmsCard: [...action.payload]
        }
        default:
            return state
    }
}

export const setFilmsCardAC = (films) => ({ type: SET_FILMS_DATA, payload: films })
export const changeCurrentPageAC = (currentPage) => ({type : CHANGE_CURRENT_PAGE, payload : currentPage})
export const setActualPagesAC = (pages) => ({type : SET_ACTUAL_PAGES, payload : pages})
export const setFilterFilmsGenres = (films) => ({type : SET_FILTER_GENRES, payload : films})
export default filmsCardReducer