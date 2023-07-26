import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BannerDetail = () => {
    
    // const state=useSelector(state=>state.banner)
    const {bid}=useParams();
        const [bannerData, setBannerData] = useState({
        title: "",
        discription: "",
        image: ""
    })
    // const getData=id=>state.data.filter(val=>val._id===id)
   
    useEffect(()=>
    {
    //    setBannerData(getData(id)[0]);
   
    //    setBannerData({
    //     title:tempData[0].title,
    //     discription:tempData[0].discription,
    //     image:tempData[0].image,
    //    })
    }
    ,[])

    // // const [image, setImage] = useState("");
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

         // sending data to api 
        //  fetch(`https://hatsoffcareer.onrender.com/api/banner/updatebanner/${bid}`,{
        //     method:"PUT",
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Access-Control-Allow-Origin':'*'
        //     },
        //     body:JSON.stringify(bannerData)
        // })
        // .then(resp=>{
        //     console.log(resp)
        // }).catch(err=>console.log(err))


        // console.log(bannerData);
        // clear input fields 
        // setBannerData({
        //     title: "",
        //     discription: "",
        //     image: ""
        // })

    }
    return (
      <>
        <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Banner</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" value={bannerData.title} onChange={handleChange} id="title" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea className="form-control" name="discription" value={bannerData.discription} onChange={handleChange} id="desc" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label">Banner Image</label>
                                <div className="b-img">
                                    <input type="file" name="image" className="form-control" onChange={e =>
                                         setBannerData({ ...bannerData, image: e.target.files[0] })} id="file" style={{ display: "none" }} />
                                    <label htmlFor="file" className="btn btn-primary">Upload</label>
                                    {bannerData.image && <div className="img-preview">
                                        <img src={bannerData.image} alt="img-preview" />
                                    </div>}
                                </div>

                                <small className='text-danger'>*Only Image are allowed</small>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                    </div>
                </div>
            </div>
      </>
    )
}

export default BannerDetail
