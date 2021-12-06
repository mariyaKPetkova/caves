import { useNavigate } from 'react-router';
import {useContext} from 'react'
import * as authService from '../../services/authService'
import {AuthContext} from '../../contexts/AuthContext.js'

const Register = () => {

    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    
    const onRegister = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword')
        //const { email, password} = Object.fromEntries(new FormData(e.currentTarget));
        
        authService.register(email,password)
        .then(authData=>{
            login(authData)
            navigate('/')
        })
    }
    return(
        <section id="register-page" className="register">
            <form id="register-form" onSubmit={onRegister} method="Post">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlF
                        or="email">Email: </label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="password">Password: </label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="repeat-pass">Repeat Password: </label>
                        <span className="input">
                            <input type="password" name="repeatPassword" id="repeat-pass" placeholder="Repeat Password"/>
                        </span>
                    </p>
                    <input className="button-submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
    )
    }
export default Register