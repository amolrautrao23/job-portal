import React from 'react'
import BannerCart from './BannerCart'
import { BsPlusSquare } from "react-icons/bs"
const ViewApplication = () => {
  return (
    <>

          <div className="section-head">
                <h2>Banner</h2>
                <div className="section-icon"><BsPlusSquare /></div>
            </div>
            <div className="section-body" >
                <BannerCart />
                <BannerCart />
                <BannerCart />
                <BannerCart />
                <BannerCart />
            </div> 
    </>
  )
}

export default ViewApplication
