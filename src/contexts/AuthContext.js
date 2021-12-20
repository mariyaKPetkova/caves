import { createContext , useContext} from "react";

import useLocalStorage from '../hooks/useLocalStorage.js'

export const AuthContext = createContext()

const initUserState = {
    _id:'',
    email:'',
    accessToken:''
  }
  
export const AuthProvider = ({children}) =>{
    const [user,setUser]= useLocalStorage('user',initUserState)

    const login = (data) =>{
        setUser(data)
      }
      const logout = ()=>{
        setUser(initUserState)
      }

    return(
        <AuthContext.Provider  value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = ()=>{
    const authState = useContext(AuthContext)
    return authState
}