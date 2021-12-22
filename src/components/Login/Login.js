import { useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import * as authService from '../../services/authService.js'
import { useAuthContext } from '../../contexts/AuthContext.js'

const Login = () => {
    const navigate = useNavigate()
    const {login} = useAuthContext()
    const [errors,setErrors] = useState({message:false})
    
    const onLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        //console.log(email,password)
        authService.login(email,password)
        .then((data)=>{
            login(data)
            navigate('/')
        })
        .catch(err=>{
            console.log(err);
            setErrors(state =>({...state, message:'Incorrect email or password'}))
        })
    }
    return(
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLogin} method="Post">
                <fieldset>
                    <legend>Login Form</legend>
                    <span style={{display: errors.message?'inline':'hidden'}}>{errors.message}</span>
                    <p className="field">
                        <label>Email:</label>
                        <p className="field"></p>
                            <input type="text" name="email" id="email"/>
                    </p>
                    <p className="field">
                        <label>Password:</label>
                        <p className="field"></p>
                            <input type="password" name="password" id="password"/>
                    </p>
                    <input className="button-submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Login