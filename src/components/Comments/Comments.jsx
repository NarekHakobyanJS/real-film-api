import { Formik } from 'formik'
import * as yup from "yup"
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCommentsAC } from '../../redux/commentsReducer'
import "./Comments.css"

const Comments = () => {
    const validationSchema = yup.object().shape({
        userName : yup.string().typeError('').required('это поле обязательно...'),
        email : yup.string().typeError('это поле обязательно').required('это поле обязательно...'),
        comment : yup.string().typeError('это поле обязательно').required('это поле обязательно...'),
    })
    const dispatch = useDispatch()
    const mySubmit = (data) => {
        dispatch(setCommentsAC((data)))
    }
    return (
        <div>
            <Formik
                initialValues={{
                    userName: "",
                    email: "",
                    comment: ""
                }}
                validationSchema={validationSchema}
                validateOnBlur
                onSubmit={(values) => mySubmit(values)}
            >
                {({ values, errors, touched, isValid,  handleBlur, dirty, handleChange, handleSubmit }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='comments-form'>
                            <label>UserName</label>
                            <input
                                placeholder='userName'
                                value={values.userName}
                                onChange={handleChange}
                                name={"userName"}
                                onBlur={handleBlur}
                            />
                            <div>{touched.userName && errors.userName &&<p>{errors.userName}</p>}</div>
                        </div>
                        <div className='comments-form'>
                            <label>Email</label>
                            <input
                                placeholder='email'
                                value={values.email}
                                onChange={handleChange}
                                name={"email"}
                                onBlur={handleBlur}
                            />
                            <div>{touched.email && errors.email &&<p>{errors.email}</p>}</div>
                        </div>
                        <div className='comments-form'>
                            <label>Comment</label>
                            <textarea
                                placeholder='comment'
                                value={values.comment}
                                onChange={handleChange}
                                name={"comment"}
                                onBlur={handleBlur}
                            />
                            <div>{touched.comment && errors.comment &&<p>{errors.comment}</p>}</div>
                        </div>
                        <button disabled={!isValid &&  !dirty} className='form-btn' type={'submit'}>Send</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Comments