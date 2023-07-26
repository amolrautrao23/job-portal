import React, { useEffect, useState } from 'react'
import { BiFilterAlt } from "react-icons/bi"
import { useSelector } from 'react-redux';
import AppliedCard from './AppliedCard';
const ViewApplication = () => {
  const [data ,setData]=useState([]);
  const state=useSelector(state=>state.banner)
  useEffect(()=>setData(state.data),[state])

  return (
    <>
      <div className="section-head">
        <h2>View Application</h2>
        <div className="section-icon fw-bold"><span>Application</span></div>
      </div>
        <div className="sort-outer">
          <div className="sort-icon">
          <BiFilterAlt/>
          </div>
          <div className="sort-dropdown">
            <span>sort by:</span>
          </div>
        </div>
      <div className="section-body" >
        {
          // data.map(value => <AppliedCard key={value.id} value={value} />)
          <AppliedCard/>
        }
      </div>

    

    </>
  )
}

export default ViewApplication
