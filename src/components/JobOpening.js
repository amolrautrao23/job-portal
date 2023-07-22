import React, { useEffect, useState } from 'react'
import JobCart from './JobCart'
import { useSelector } from 'react-redux'
const JobOpening = () => {  
  // accessing data from store 
  const state = useSelector(state => state.job)
  const [data, setData] = useState([])
  useEffect(() => setData(state), [])
  
  return (
    <>
      <div className="heading p-3 ">
        <h2 className='text-decoration-underline'>Job Openings</h2>
      </div>
      <div className="openings-outer">
        <div className="row">
          <div className="col-12">
            {
              data?.map(elem=><JobCart key={elem.id} elem={elem} />)
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default JobOpening
