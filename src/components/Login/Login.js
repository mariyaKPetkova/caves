import { useNavigate } from 'react-router-dom'

import * as authService from '../../services/authService.js'
const Login = () => {
    const navigate = useNavigate()
    const onLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        authService.login(email,password)
        .then(()=>{
            navigate('/')
        })
    }
    return(
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLogin} method="Post">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlF
                        or="email">Email: </label>
                        <span className="input">
                            <input type="text" name="email" id="email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="password">Password: </label>
                        <span className="input">
                            <input type="password" name="password" id="password"/>
                        </span>
                    </p>
                    <input className="button-submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Login