const SET_FILM_PAGE = "filmPage/SET_FILMS_PAGE"

const initialState = {
    film : {}
}
const filmPageReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FILM_PAGE : 
        return {
            ...state,
            film : action.payload
        }
        default :
        return state
    }
}

export const setFilmPageAC = (film) => ({type : SET_FILM_PAGE, payload : film})
export default filmPageReducer