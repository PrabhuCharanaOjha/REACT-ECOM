import { useContext } from "react";
import { Route, Switch, NavLink, useHistory, BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
import { Dashboard } from './dashboard'
import { Banner } from './banner'
import { Event } from './event'
import { Gallery } from './gallery'
import { Testimonial } from './testimonial'
import { Contact } from './contact'
import { Footer } from './footer'
import { SuperAdminPermission } from './superAdminPermission'
import { Test } from './test'
import { Team } from './team'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { UserAuthenticationDetails } from "../../context/userContext";
import { useEffect } from "react";
import { CreateAdmin } from "./createAdmin";
// import { useEffect } from 'react'

export const SuperAdminPage = () => {
    const history = useHistory();
    const { user, setUser, token, setToken } = useContext(UserAuthenticationDetails);

    useEffect(() => {
        if(user === null){
            history.push('/login');
        }
    },[user, history])

    const logout = async () => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            axios({
                url: "http://127.0.0.1:8000/api/logout",
                method: "POST",
                headers: {
                    authorization: 'Bearer ' + token,
                }
            }).then((res) => {
                console.log(res)
                const message = res.data['msg'];
                if (message === 'success') {
                    localStorage.clear();
                    setUser(null);
                    setToken(null);
                    history.push('/login');
                }
            }).catch((error) => {
                console.log(error);
            })
        }

    }

    return (
        <BrowserRouter>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto px-0">
                    <div id="sidebar" className="collapse collapse-horizontal show border-end vh-100 shadow-sm bg-dark">
                        <div id="sidebar-nav">
                            <div className="d-flex flex-column flex-shrink-0 p-3 text-white" style={{ width: "280px", }}>
                                <Link to="/super-admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none bg-p">
                                    <i className="fa fa-user-circle p-2" aria-hidden="true"></i>
                                    <span className="fs-4">Super Admin Dashboard</span>
                                </Link>
                                <hr />
                                <ul className="nav nav-pills flex-column mb-auto text-light sideBarUl">
                                    <li className="nav-item">
                                        <NavLink to="/super-admin/dashboard" className="nav-link text-light" aria-current="page" activeStyle={{ fontWeight: "bold", backgroundColor: "#0d6efd" }}>
                                            <i className="fa fa-building" aria-hidden="true"></i>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/super-admin/create-admin" className="nav-link text-light" aria-current="page">
                                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                                            Create Admin
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-toggle align-items-center rounded collapsed nav-link text-light" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                                            <i className="fa fa-crosshairs" aria-hidden="true"></i>
                                            Dynamic
                                        </button>
                                        <div className="collapse" id="orders-collapse">
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li><NavLink to="/super-admin/banner" className="nav-link rounded text-light ms-4">Banner Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/event" className="nav-link rounded text-light ms-4">Events Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/gallery" className="nav-link rounded text-light ms-4">Gallery Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/team" className="nav-link rounded text-light ms-4">Team Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/testimonial" className="nav-link rounded text-light ms-4">Testimonial Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/contact" className="nav-link rounded text-light ms-4">Contact Dynamic</NavLink></li>
                                                <li><NavLink to="/super-admin/footer" className="nav-link rounded text-light ms-4">Footer Dynamic</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/super-admin/sidebar-permission" className="nav-link text-light" aria-current="page">
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            Sidebar Permission
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/super-admin/test" className="nav-link text-light" aria-current="page">
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            Super Admin Test
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col ps-md-2 pt-3">
                    <div className="d-flex justify-content-between">
                        <span data-bs-target="#sidebar" data-bs-toggle="collapse" className="p-2 text-decoration-none">
                            <i className="fa fa-bars fa-xl" aria-hidden="true"></i>
                        </span>
                        <button className="btn btn-sm btn-danger rounded p-2" onClick={logout}>
                            <i className="fa fa-power-off" aria-hidden="true"></i>Logout
                        </button>
                    </div>
                    <hr />
                    <div className="row">

                        <Switch>
                            <Route exact path="/super-admin/dashboard" component={Dashboard} />
                            <Route exact path="/super-admin/create-admin" component={CreateAdmin} />
                            <Route exact path="/super-admin/banner" component={Banner} />
                            <Route exact path="/super-admin/event" component={Event} />
                            <Route exact path="/super-admin/gallery" component={Gallery} />
                            <Route exact path="/super-admin/team" component={Team} />
                            <Route exact path="/super-admin/testimonial" component={Testimonial} />
                            <Route exact path="/super-admin/contact" component={Contact} />
                            <Route exact path="/super-admin/footer" component={Footer} />
                            <Route exact path="/super-admin/sidebar-permission" component={SuperAdminPermission} />
                            <Route exact path="/super-admin/test" component={Test} />
                        </Switch>

                    </div>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}
