import { useNavigate } from 'react-router';
import { useState } from 'react'
import * as authService from '../../services/authService'
import { useAuthContext } from '../../contexts/AuthContext.js'

const Register = () => {

    const navigate = useNavigate()
    const { login } = useAuthContext()
    const [errors, setErrors] = useState({ email: false, password: false, repeatPassword: false })
    const onRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword')
        //const { email, password} = Object.fromEntries(new FormData(e.currentTarget));

        if (password != repeatPassword) {
            setErrors(state => ({ ...state, repeatPassword: 'Passwords must be the same' }))
            return
        } else {
            setErrors(state => ({ ...state, repeatPassword: false }))
        }

        if (password.length < 3 || password.length > 20) {
            setErrors(state => ({ ...state, password: 'Password must be at least 3 and  maximum 20 characters long' }))
            return
        } else {
            setErrors(state => ({ ...state, password: false }))
        }

        if (email.length < 3 || email.length > 20) {
            setErrors(state => ({ ...state, email: 'Email must be at least 3 and  maximum 20 characters long' }))
            return
        } else {
            setErrors(state => ({ ...state, email: false }))
        }

        authService.register(email, password)
            .then(authData => {
                login(authData)
                navigate('/')
            })
    }
    // const onEmail = (e) =>{
    //     const curr = e.currentTarget.value
    //     if(curr.length < 3){
    //         setErrors(state =>({...state, email:'Email must be at least 3 characters long'}))
    //         return
    //     }else if(curr.length > 20){
    //         setErrors(state =>({...state, email:'Email must be maximum 20 characters long'}))
    //         return
    //     }else{
    //         setErrors(state =>({...state, email:false}))
    //     }
    // }
    // const onPassword = (e) =>{
    //     const curr = e.currentTarget.value
    //     if(curr.length < 3){
    //         setErrors(state =>({...state, password:'Password must be at least 3 characters long'}))
    //         return
    //     }else if(curr.length > 20){
    //         setErrors(state =>({...state, password:'Password must be maximum 20 characters long'}))
    //         return
    //     }else{
    //         setErrors(state =>({...state, password:false}))
    //     }
    // }

    return (
        <section id="register-page" className="register">
            <form id="register-form" className='form' onSubmit={onRegister} method="Post">
                <fieldset>
                    <legend>Register Form</legend>
                    <label >Email: </label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <span style={{ display: errors.email ? 'inline' : 'hidden' }}>{errors.email}</span>
                    <label >Password: </label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <span style={{ display: errors.password ? 'inline' : 'hidden' }}>{errors.password}</span>
                    <label>Repeat Password: </label>
                    <input type="password" name="repeatPassword" id="repeat-pass" placeholder="Repeat Password" />
                    <span style={{ display: errors.repeatPassword ? 'inline' : 'hidden' }}>{errors.repeatPassword}</span>
                    <input className="button-submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}
export default Register