import { BiSolidEdit } from "react-icons/bi"
import { RiDeleteBin5Fill } from "react-icons/ri"
import "../css/banner.css"
import image from '../img/img2.jpg'
const BannerCart = () => {
    return (
        <>

            <div className=" card banner">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner-text">
                            <h2 className="banner-heading">This is banner heading</h2>
                            <p>this is banner description</p>
                            <div className="modify-icons">
                                <div className="icon"><BiSolidEdit /></div>
                                <div className="icon"><RiDeleteBin5Fill /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="banner-img">
                            <img src={image} alt="banner-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerCart
