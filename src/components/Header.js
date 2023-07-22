import React from 'react'
import logo from "../img/logo.png"
import { BsSunFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import "../css/header.css"
const Header = () => {
    return (
        <>
        
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo">
                                <img src={logo} alt="app-logo" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="menu">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin">Admin</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <form action="">
                                    <input className='form-control' type="search" placeholder='Search' />
                                    <button className='btn btn-outline-primary'>Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="theme">
                                <BsSunFill />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
