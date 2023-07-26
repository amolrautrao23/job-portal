import React, { useEffect, } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            navigate("/login")
        }
    }, []);

    return <>



        <div className="container scb">

            <div className="row admin-section">
                <div className="col-md-2 p-0">
                    <div className="text-center section" style={{ padding: "10px 0" }}>
                        Section
                    </div>
                    <div className="section-menu">
                        <NavLink to="/admin/banner" className={"menu-item"}> Banner
                        </NavLink>
                        <NavLink to="/admin/manage-job" className={"menu-item"}>
                            Manage openings
                        </NavLink>
                        <NavLink to="/admin/view-application" className={"menu-item"}>
                            view
                        </NavLink>
                    </div>

                </div>
                <div className="col-md-10 p-0">
                    {/* content is here  */}
                        <Outlet />
                </div>
            </div>

        </div>


    </>
}

export default Admin
