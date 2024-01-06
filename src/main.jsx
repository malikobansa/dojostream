import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import Home from './components/Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home'  element={<Home/>}/>
    </Routes>
    </BrowserRouter>
)
