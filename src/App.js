import { Routes,Route} from 'react-router-dom'
import { useState } from 'react';

import Header from './components/Header/Header.js';
import Create from './components/Create/Create.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Details from './components/Details/Details.js'
import Edit from './components/Edit/Edit.js'
import Login from './components/Login/Login.js'
import Logout from './components/Logout/Logout.js'
import MyVisits from './components/MyVisits/MyVisits.js'
import Register from './components/Register/Register.js'
import {AuthContext} from './contexts/AuthContext.js'
import useLocalStorage from '../src/hooks/useLocalStorage.js'

const initUserState = {
  _id:'',
  email:'',
  accessToken:''
}
function App() {
  const [user,setUser]= useLocalStorage('user',initUserState)
  
  const login = (data) =>{
    setUser(data)
  }
  const logout = ()=>{
    setUser(initUserState)
  }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
    <div id="container">
      <Header/>
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/my-visits" element={<MyVisits/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/details/:caveId" element={<Details/>} />
        </Routes>

      </main>

      <footer id="site-footer">
        <p>My App</p>
      </footer>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
