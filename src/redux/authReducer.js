const SET_AUTH = "auth/SET_AUTH"
const SET_AUTH_NAME = "auth/SET_AUTH_NAME"
const initalState = {
    auth : {
        login : "",
        password : "",
    },
    isAuth : false
}

const authReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_AUTH :
            return {
                ...state,
                auth : action.payload
            }
        case SET_AUTH_NAME : 
            return {
                ...state,
                isAuth : action.isAuth
            }
        default : 
            return state
    }
}

export const setAuhtReducer = (login) => ({type : SET_AUTH, payload : login})
export const setAuthNameReducer = (isAuth) => ({type : SET_AUTH_NAME, isAuth})
export default authReducer