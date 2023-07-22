import { useState } from "react"
import { BsPlusSquare } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { useDispatch } from "react-redux"

const ManageJobModal = () => {
    
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
                        <h5 className="modal-title" id="exampleModalLabel">Publish New Opening</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" value={bannerData.title} onChange={handleChange} id="title" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">'Salary'</label>
                                <input type="text" name='salary' className="form-control" value={bannerData.salary} onChange={handleChange} id="salary" aria-describedby="emailHelp" />
                                <small className='text-danger'>*Enter Only Number</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Experience" className="form-label">Experience</label>
                                <input type="text" name='Experience' className="form-control" value={bannerData.Experience} onChange={handleChange} id="Experience" aria-describedby="emailHelp" />
                                <small className='text-danger'>*Enter Only Number</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea className="form-control" name="descrption" value={bannerData.descrption} onChange={handleChange} id="desc" rows="3"></textarea>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Job Description Points:</label>
                                <div className="pts">
                                    <div htmlFor="title">
                                        Point 1:
                                    </div>
                                    <input type="text" className="pts-input" onChange={handleChange} />
                                    <span className="pts-icons">
                                        <GrClose />  <BsPlusSquare />
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Job Responsibility Points:</label>
                                <div className="pts">
                                    <div htmlFor="title">
                                        Point 1:
                                    </div>
                                    <input type="text" className="pts-input" onChange={handleChange} />
                                    <span className="pts-icons">
                                        <GrClose />  <BsPlusSquare />
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Must To Have Points:</label>
                                <div className="pts">
                                    <div htmlFor="title">
                                        Point 1:
                                    </div>
                                    <input type="text" className="pts-input" onChange={handleChange} />
                                    <span className="pts-icons">
                                        <GrClose />  <BsPlusSquare />
                                    </span>
                                </div>
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

export default ManageJobModal
