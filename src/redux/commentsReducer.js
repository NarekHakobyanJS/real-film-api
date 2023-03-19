const SET_COMMENTS = "comments/SET_COMMENTS"

const initalState = {
    comment : {}
}
const commentsReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_COMMENTS : 
        return {
            ...state,
            comment : action.payload
        }
        default:
            return state
    }
}

export const setCommentsAC = (comment) => ({type : SET_COMMENTS, payload : comment})
export default commentsReducer