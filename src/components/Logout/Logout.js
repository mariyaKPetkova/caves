import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService.js'
import { useAuthContext } from '../../contexts/AuthContext.js'
import { useEffect } from 'react'

const Logout = () => {

    const navigate = useNavigate()
    const {user,logout} = useAuthContext()
    
    useEffect(()=>{
        authService.logout(user.accessToken)
        .then(()=>{
            logout()
            navigate('/')
        })
    },[])
    return null
}
export default Logout