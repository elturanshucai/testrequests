import React, { Component, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Nav'
import SignIn from './Components/SignIn'
import './app.css'
import PostReq from './Components/PostReq'
import GetReq from './Components/GetReq'
import Profile from './Profile'
import Protected from './Protected'

function App() {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Nav login={login} setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login2' element={<Login setLogin={setLogin} />} />
          <Route path='/register' element={<SignIn />} />
          <Route path='/post' element={<PostReq />} />
          <Route path='/list' element={<GetReq />} />
          <Route
            path='/user'
            element={
              <Protected login={login}><Profile /></Protected>
            }
          />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App