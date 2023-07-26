import { useEffect, useState } from "react"
import { BsPlusSquare } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const EditJob = () => {

    const { id } = useParams();
    // console.log("edit",state)
    const [jobData, setJobData] = useState({
        title: "",
        salary: "",
        experience: "",
        summury: "",
        desc: [],
        resp: [],
        must: [],
    })
   
    const [descPoint, setDescPoint] = useState(['']);
    const [respPoint, setRespPoint] = useState(['']);
    const [mustPoint, setMustPoint] = useState(['']);

    // description point add and remove start
    const handleAdd = () => {
        const abc = [...descPoint, []]
        setDescPoint(abc);
    }
    const handleDescChange = (e, i) => {
        const inputData = [...descPoint]
        inputData[i] = e.target.value
        setDescPoint(inputData)
        console.log(descPoint);
    }
    const handleDescDelete = i => {
        const deleteValue = [...descPoint]
        deleteValue.splice(i, 1);
        setDescPoint(deleteValue)
    }
    // description point add and remove end

    // Responsibilities point add and remove start

    const handleAddResp = () => {
        const abc = [...respPoint, []]
        setRespPoint(abc);
    }
    const handleRespChange = (e, i) => {
        const inputData = [...respPoint]
        inputData[i] = e.target.value
        setRespPoint(inputData)
        console.log(respPoint);
    }
    const handleRespDelete = i => {
        const deleteValue = [...respPoint]
        deleteValue.splice(i, 1);
        setRespPoint(deleteValue)
    }

    // Responsibilities point add and remove end

    // Must have point add and remove start

    const handleAddMust = () => {
        const abc = [...mustPoint, []]
        setMustPoint(abc);
    }
    const handleMustChange = (e, i) => {
        const inputData = [...mustPoint]
        inputData[i] = e.target.value
        setMustPoint(inputData)
        console.log(mustPoint);
    }
    const handleMustDelete = i => {
        const deleteValue = [...mustPoint]
        deleteValue.splice(i, 1);
        setMustPoint(deleteValue)
    }

    // must have point add and remove end

    // const [image, setImage] = useState("");
    const handleChange = e => {
        const { name, value } = e.target;
        setJobData({
            ...jobData,
            [name]: value
        },
            console.log(descPoint)
        )
    }
    // adding data to store 
    const handleSubmit = () => {


        // clear input fields 
        setJobData({
            ...jobData,
            desc: ([...descPoint]),
            resp: (respPoint),
            must: (mustPoint),
        })
        setJobData({
            title: "",
            salary: "",
            experience: "",
            summury: "",
            desc: [],
            resp: [],
            must: [],
        })

        // sending data to api 
        // fetch("http://localhost:3000/jobs",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Access-Control-Allow-Origin':'*'
        //     },
        //     body:JSON.stringify(jobData)
        // })
        // .then(resp=>{
        //     console.log(resp)
        // }).catch(err=>console.log(err))


    }
    return (
        <>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Opening</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" name='title' className="form-control" value={jobData.title} onChange={handleChange} id="title" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">'Salary'</label>
                                <input type="number" name='salary' className="form-control" value={jobData.salary} onChange={handleChange} id="salary" aria-describedby="emailHelp" required />
                                <small className='text-danger'>*Enter Only Number</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Experience" className="form-label">Experience</label>
                                <input type="number" name='experience' className="form-control" value={jobData.experience} onChange={handleChange} id="Experience" aria-describedby="emailHelp" required />
                                <small className='text-danger'>*Enter Only Number</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea className="form-control" name="summury" value={jobData.summury} onChange={handleChange} id="desc" rows="3" required></textarea>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Job Description Points:
                                    {
                                        descPoint.map((e, i) => {
                                            return (
                                                <div className="pts" key={i}>
                                                    <div htmlFor="title">
                                                        Point {i + 1}:
                                                    </div>
                                                    <input type="text" value={e} className="pts-input" onChange={e => handleDescChange(e, i)} />
                                                    <span className="pts-icons">
                                                        <GrClose className="btn-remove-point" onClick={e => handleDescDelete(i)} />  <BsPlusSquare onClick={handleAdd} className="btn-add-point" />
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </label>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Job Responsibilities Points:
                                    {
                                        respPoint.map((e, i) => {
                                            return (
                                                <div className="pts" key={i}>
                                                    <div htmlFor="title">
                                                        Point {i + 1}:
                                                    </div>
                                                    <input type="text" value={e} className="pts-input" onChange={e => handleRespChange(e, i)} />
                                                    <span className="pts-icons">
                                                        <GrClose className="btn-remove-point" onClick={e => handleRespDelete(i)} />  <BsPlusSquare onClick={handleAddResp} className="btn-add-point" />
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </label>
                            </div>
                            <div className="mb-3 points">
                                <label className="form-label">Must Have Points:
                                    {
                                        mustPoint.map((e, i) => {
                                            return (
                                                <div className="pts" key={i}>
                                                    <div htmlFor="title">
                                                        Point {i + 1}:
                                                    </div>
                                                    <input type="text" value={e} className="pts-input" onChange={e => handleMustChange(e, i)} />
                                                    <span className="pts-icons">
                                                        <GrClose className="btn-remove-point" onClick={e => handleMustDelete(i)} />  <BsPlusSquare onClick={handleAddMust} className="btn-add-point" />
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </label>
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

export default EditJob
