import { BiSolidEdit } from "react-icons/bi"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { NavLink } from "react-router-dom"

const JobCart = ({ elem, isEditable }) => {

    return (
        <>
        <NavLink to={`/jobDetail/${elem.id}`} style={{"textDecoration":"none"}}>
            <div className="job-cart" onClick={() => console.log("clicked on ", elem.id)}>
                <h2 className="job-title">{elem.title}</h2>
                <p><strong>Salary :</strong> {elem.salary}</p>
                <p><strong>Experience :</strong> {elem.experience}</p>
                <p><strong>Summury :</strong> {elem.description}</p>

                {
                    isEditable && <div className="modify-icons">
                        <div className="icon"><BiSolidEdit /></div>
                        <div className="icon"><RiDeleteBin5Fill /></div>
                    </div>
                }
            </div>
            </NavLink>
        </>
    )
}

export default JobCart
