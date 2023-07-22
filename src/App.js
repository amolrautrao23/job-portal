import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import Header from './components/Header'
// import '/../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
