import React, { useEffect } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { fetchJobs } from './store/slices/JobSlice'
import JobDetail from './components/JobDetail'
import Login from './components/Login'
import BannerDetail from './components/BannerDetail'
import { fetchBanner } from './store/slices/bannerSlice'
import Banner from './components/Banner'
import ManageJob from './components/ManageJob'
import ViewApplication from './components/ViewApplication'
import { fetchAppliedJobs } from './store/slices/appliedJobSlice'
import EditJob from './components/EditJob'
// import '/../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs())
    dispatch(fetchBanner())
    dispatch(fetchAppliedJobs())

  }, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/' element={<Admin />} >
          <Route index element={<Banner />} />
          <Route path='banner' element={<Banner />} />
          <Route path='manage-job' element={<ManageJob />} />
          <Route path='view-application' element={<ViewApplication />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/job-detail/:id' element={<JobDetail />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
