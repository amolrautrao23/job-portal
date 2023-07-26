import { BsPlusSquare } from "react-icons/bs"
import "../css/job.css"
import JobCart from "./JobCart"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ManageJobModal from "./ManageJobModal"

const ManageJob = () => {
    const state = useSelector(state => state.job)
    const [data, setData] = useState([]);
    useEffect(() => setData(state.data), [])
    
    return (
        <>
            <div className="section-head">
                <h2>Manage Openings</h2>
                <div className="section-icon" data-bs-toggle="modal" data-bs-target="#publishJob"><BsPlusSquare /></div>

            </div>
            <div className="section-body" >
                {
                    data?.map(elem => <JobCart key={elem.id} elem={elem} isEditable={true} />)
                }
            </div>


            {/* modal */}

            <div className="modal fade" id="publishJob" tabIndex="-1" aria-labelledby="publishJobLabel" aria-hidden="true">
                <ManageJobModal/>
            </div>

            {/* modal */}

        </>
    )
}

export default ManageJob
