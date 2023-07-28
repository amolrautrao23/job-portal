import React, { useEffect, useState } from 'react'
import { BiFilterAlt } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import AppliedCard from './AppliedCard';
import { sortApplication } from '../store/slices/appliedJobSlice';


const ViewApplication = () => {
  const [data, setData] = useState([]);
  const state = useSelector(state => state.application)
  useEffect(() => setData(state.sortedData), [state.sortedData])
  useEffect(() => setData(state.data), [state])

  const dispatch = useDispatch();

  const sorting = e => {
    let sortValue = e.target.value;
    console.log(sortValue);
    dispatch(sortApplication(sortValue))

  }

  return (
    <>
      <div className="section-head">
        <h2>View Application</h2>
        <div className="section-icon fw-bold"><span>{data.length} Application</span></div>
      </div>
      <div className="sort-outer">
        <div className="sort-icon">
          <BiFilterAlt />
        </div>
        <div className="sort-dropdown">
          <form action="#">
            <label htmlFor="sort">sort by:</label>
            <select name="sort" id="sort" onChange={sorting} className='sort-dropdown'>
              <option value="default"></option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
            </select>
          </form>
        </div>
      </div>
      <div className="section-body" >
        {
          state.isLoading ?
            <h3>Loading...</h3>
            : state.isError ?
              <h4 className='text-danger'>Something went wrong!</h4>
              : data.map(value => <AppliedCard key={value._id} value={value} />)

        }
      </div>



    </>
  )
}

export default ViewApplication
