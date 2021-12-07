import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext,useEffect } from 'react'

const Logout = () => {

    const navigate = useNavigate()
    const {user,logout} = useContext(AuthContext)
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