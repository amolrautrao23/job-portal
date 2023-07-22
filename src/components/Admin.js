import React, { useState } from 'react'
import Login from './Login'
import { NavLink } from 'react-router-dom'
import JobOpening from './JobOpening'
import Banner from './Banner'
import ManageJob from './ManageJob'
import ViewApplication from './ViewApplication'

const Admin = () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <div className="container">
                <div className="">
                    <div className="row admin-section">
                        <div className="col-md-2 p-0">
                            <div className="text-center section" style={{ padding: "10px 0" }}>
                                Section
                            </div>
                            <div className="section-menu">
                                <div className={tab === 1 ? "menu-item active" : "menu-item"} onClick={() => setTab(1)}>
                                    {/* <NavLink to="/banner"> Banner</NavLink> */}
                                    Banner
                                </div>
                                <div className={tab === 2 ? "menu-item active" : "menu-item"} onClick={() =>setTab(2)}>
                                    {/* <NavLink to="/openings"> Manage <br /> Openings</NavLink> */}
                                    manage openings
                                </div>
                                <div className={tab === 3 ? "menu-item active" : "menu-item"} onClick={() => setTab(3)}>
                                    {/* <NavLink to="/application"> View <br /> Applications</NavLink> 
                */}
                                    view
                                </div>
                            </div>

                        </div>
                        <div className="col-md-10 p-0">
                            <div className="content">
                                {
                                        tab === 1 ? <Banner /> : tab === 2 ? <ManageJob /> : tab === 3 ? <ViewApplication /> : null
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Admin
