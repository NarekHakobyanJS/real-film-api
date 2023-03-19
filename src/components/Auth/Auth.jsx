import React from 'react'
import './Auth.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAuhtReducer, setAuthNameReducer } from '../../redux/authReducer'

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const userName = useSelector((state) => state.auth.auth.login)
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(setAuhtReducer({}))
    dispatch(setAuthNameReducer(false))
  }
  return (
    <div className='auth'>
        <div className='auth-block'>
          {isAuth ? <>
            <h3>{userName}</h3>
            <button onClick={logOut}>Logout</button>
            </>
            :  null
          }
        </div>
    </div>
  )
}

export default Auth