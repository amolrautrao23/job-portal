import BannerCart from './BannerCart'
import { BsPlusSquare } from "react-icons/bs"
import BannerModal from './BannerModal'

const Banner = () => {

    return (
        <>


            <div className="section-head">
                <h2>Banner</h2>
                <div className="section-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><BsPlusSquare /></div>
            </div>
            <div className="section-body" >
                <BannerCart />
                <BannerCart />
                <BannerCart />
                <BannerCart />
                <BannerCart />
            </div>

            {/* modal */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <BannerModal />
            </div>

            {/* modal */}

        </>
    )
}

export default Banner

// generate input field dynamically using react js
