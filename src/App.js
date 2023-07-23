import React, { useEffect } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { fetchJobs } from './store/slices/JobSlice'
import JobDetail from './components/JobDetail'
// import '/../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const dispatch =useDispatch();
  useEffect(()=>
  {
    dispatch(fetchJobs())
  },[])
  return (
    <>
      <BrowserRouter>
      <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/jobDetail/:id' element={<JobDetail/>}/>
                <Route path='/*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
