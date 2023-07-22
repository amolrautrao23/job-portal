import { useState } from 'react'
// import BannerCart from './BannerCart'
// import { BsPlusSquare } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { addBanner } from '../store/slices/bannerSlice'
import React from 'react'

const BannerModal = () => {
    const [bannerData, setBannerData] = useState({
        title: "",
        descrption: "",
        image: ""
    })
    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const handleChange = e => {
        const { name, value } = e.target;
        setBannerData({
            ...bannerData,
            [name]: value
        }
        )
    }
    // adding data to store 
    const handleSubmit = () => {
        // dispatch(addBanner(bannerData))
console.log(bannerData);
        // clear input fields 
        setBannerData({
            title: "",
            descrption: "",
            image: ""
        })

    }
    return (
        <>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Banner</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" value={bannerData.title} onChange={handleChange} id="title" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea className="form-control" name="descrption" value={bannerData.descrption} onChange={handleChange} id="desc" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label">Banner Image</label>
                                <div className="b-img">
                                    <input type="file" name="image" className="form-control" onChange={e => setBannerData({ ...bannerData, image: e.target.files[0] })} id="file" style={{ display: "none" }} />
                                    <label htmlFor="file" className="btn btn-primary">Upload</label>
                                    {bannerData.image && <div className="img-preview">
                                        <img src={URL.createObjectURL(bannerData.image)} alt="img-preview" />
                                    </div>}
                                </div>

                                <small className='text-danger'>*Only Image are allowed</small>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerModal
