import React, { useEffect, useState } from 'react'
import JobCart from './JobCart'
import {  useSelector } from 'react-redux'

const JobOpening = () => {
  // accessing data from store 
  const state = useSelector(state => state.job)
  const [data, setData] = useState([])
  useEffect(() => setData(state.data), [state],[])

  return (
    <>
      <div className="heading">
        <h2 className='text-decoration-underline'>Job Openings</h2>
      </div>
      <div className="openings-outer">
        <div className="row">
          <div className="col-12">
            {
              state.isLoading ?
                <h3>Loading...</h3>
                : state.isError ?
                  <h4 className='text-danger'>Something went wrong!</h4>
                  : data.length > 0 && data.map(elem => <JobCart key={elem._id} elem={elem} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default JobOpening