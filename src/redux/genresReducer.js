const SET_GENRES = "genres/SET_GENRES"

const initialState = {
    genresArray: []
}
const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genresArray: action.payload
            }
        default:
            return state
    }
}

export const setGenresAC = (genres) => ({ type: SET_GENRES, payload: genres })
export default genresReducer