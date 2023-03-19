const SET_SEARCH_FILMS = "search/SET_SEARCH_FILMS"

const initialState = {
    searchResult : []
}
const searcFilmsReducer = (state = initialState, action) => {
    switch(action.type){

        case SET_SEARCH_FILMS : 
        return {
            ...state,
            searchResult : action.payload
        }
        default :
        return state
    }
}

export const setSearchFilmsAC = (films) => ({type : SET_SEARCH_FILMS, payload : films})

export default searcFilmsReducer