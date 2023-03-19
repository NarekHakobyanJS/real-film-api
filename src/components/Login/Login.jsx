import React, { useState } from 'react'
import './Login.css'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setAuhtReducer, setAuthNameReducer } from '../../redux/authReducer';
import {FaEyeSlash} from "react-icons/fa"
import {IoEyeSharp} from "react-icons/io5"

const Login = () => {
    const [showHide, setShowHide] = useState(false)
    const dispatch = useDispatch()

    const auhtFunction = (data) => {
        dispatch(setAuhtReducer(data))
        if(data.login === "Narek" && data.password === "narek95"){
            dispatch(setAuthNameReducer(true))
        }else{
            dispatch(setAuthNameReducer(false))
        }
    }

    const showHidePassword = () => {
        setShowHide((prev => !prev))
    }
    return (
        <div className='login-block'>
            <div className='login'>
                <div className='login-form'>
                <img className="logo-form" src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg" />
                    <Formik
                        initialValues={{
                            login: "",
                            password: "",
                        }}
                        onSubmit={(values) => auhtFunction(values)}
                    >
                        {({ values, errors, handleSubmit, handleChange }) => (
                            <form className='form-login' onSubmit={handleSubmit}>
                                <div className='from-block'>
                                    <label>Login</label>
                                    <input
                                        value={values.login}
                                        onChange={handleChange}
                                        name={"login"}
                                    />

                                </div>
                                <div className='from-block'>
                                    <label>Password</label>
                                    <div className='passowrd-block'>
                                    <input
                                        type={showHide ? "text" : "password"}
                                        value={values.password}
                                        onChange={handleChange}
                                        name={"password"}
                                    />
                                {showHide ? <IoEyeSharp onClick={showHidePassword}/> :<FaEyeSlash 
                                onClick={showHidePassword}
                                />}
                                </div>
                                </div>
                                <button className='loginBTN' type='submit'>Login</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className='overlay-login'>
            </div>
        </div>
    )
}

export default Login