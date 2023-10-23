import { useState } from 'react'
import './App.css'
import SignUp from './pages/sign-up';
import { Login } from './pages/login';
import { Home } from './pages/home';
import {Route,Routes} from 'react-router-dom'
function App() {


  return (
  <>
  <Routes>
    <Route path='/' element={<SignUp />} />
    <Route path='/login' element={ <Login />} />
    <Route path='/home' element={ <Home />} />
  </Routes> 
  </>
  );
}

export default App
