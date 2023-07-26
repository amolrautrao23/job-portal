import BannerCart from './BannerCart'
import { BsPlusSquare } from "react-icons/bs"
import BannerModal from './BannerModal'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Banner = () => {

    const [data ,setData]=useState([]);
    const state=useSelector(state=>state.banner)
    useEffect(()=>setData(state.data),[state])

    return (
        <>
           <div className="section-head">
                <h2>Banner</h2>
                <div className="section-icon" data-bs-toggle="modal" data-bs-target="#addNewBanner"><BsPlusSquare /></div>
            </div>
            <div className="section-body" >
                {
                    data.map(value=><BannerCart key={value.id} value={value} />)
                }
            </div>

            {/* modal */}

            <div className="modal fade" id="addNewBanner" tabIndex="-1" aria-labelledby="addNewBannerLabel" aria-hidden="true">
                <BannerModal />
            </div>

            {/* modal */}

        </>
    )
}

export default Banner

// generate input field dynamically using react js
