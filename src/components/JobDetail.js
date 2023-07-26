import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <div className="container">
        detail page {id}
      </div>
    </>
  )
}

export default JobDetail
