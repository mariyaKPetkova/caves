import { useNavigate } from 'react-router';
import {  useState } from 'react'
import * as authService from '../../services/authService'
import { useAuthContext} from '../../contexts/AuthContext.js'

const Register = () => {

    const navigate = useNavigate()
    const {login} = useAuthContext()
    const [errors,setErrors] = useState({email:false,password:false,repeatPassword:false})
    const onRegister = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword')
        //const { email, password} = Object.fromEntries(new FormData(e.currentTarget));
        
        if(password != repeatPassword){
            setErrors(state =>({...state, repeatPassword:'Passwords must be the same'}))
            return
        }else{
            setErrors(state =>({...state, repeatPassword:false}))
        }

        authService.register(email,password)
        .then(authData=>{
            login(authData)
            navigate('/')
        })
    }
    const onEmail = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 3){
            setErrors(state =>({...state, email:'Email must be at least 3 characters long'}))
        }else if(curr.length > 20){
            setErrors(state =>({...state, email:'Email must be maximum 20 characters long'}))
        }else{
            setErrors(state =>({...state, email:false}))
        }
    }
    const onPassword = (e) =>{
        const curr = e.currentTarget.value
        if(curr.length < 3){
            setErrors(state =>({...state, password:'Password must be at least 3 characters long'}))
        }else if(curr.length > 20){
            setErrors(state =>({...state, password:'Password must be maximum 20 characters long'}))
        }else{
            setErrors(state =>({...state, password:false}))
        }
    }
    
    return(
        <section id="register-page" className="register">
            <form id="register-form" onSubmit={onRegister} method="Post">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label >Email: </label>
                        <p className="field"></p>
                            <input type="text" name="email" id="email" placeholder="Email" onChange={onEmail} />
                            <p className="field"></p>
                        <span style={{display: errors.email?'inline':'hidden'}}>{errors.email}</span>
                        </p>
                        <p className="field">
                        <label >Password: </label>
                        <p className="field"></p>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={onPassword}/>
                            <p className="field"></p>
                        <span style={{display: errors.password?'inline':'hidden'}}>{errors.password}</span>
                        </p>
                        <p className="field">
                        <label>Repeat Password: </label>
                        <p className="field"></p>
                            <input type="password" name="repeatPassword" id="repeat-pass" placeholder="Repeat Password" />
                            <p className="field"></p>
                        <span style={{display: errors.repeatPassword?'inline':'hidden'}}>{errors.repeatPassword}</span>
                        </p>
                    <input className="button-submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
    )
    }
export default Register