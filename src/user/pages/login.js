import { useEffect } from "react";
import { UserAuthenticationDetails } from "../../context/userContext"
import { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from 'react-toastify';

export const LoginPage = () => {

    const history = useHistory();
    const { user, setUser, token, setToken } = useContext(UserAuthenticationDetails);
    console.log(token);

    useEffect(() =>{
        if(user !== null){
            if(user['userType'] === "1"){
                history.push('/super-admin');
            }
        }
    },[user,history])


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const login = () => { 

        if(formData.email === ""){
            alert("fill email")
            return false;
        }
        if(formData.password === ""){
            alert("fill password")
            return false;
        }        

        axios({
            url:'http://127.0.0.1:8000/api/login',
            method:"POST",
            data:formData,
        }).then((res) => {
            const message = res.data['msg'];
            // console.log(res);
            if(message === 'success'){
                localStorage.setItem("user",JSON.stringify(res.data['user']));
                localStorage.setItem("token",res.data['token']);

                setUser(res.data['user']);
                setToken(res.data['token']);
        
                if(res.data['user']['userType'] === "1"){
                    toast.success("Login Successfully",{autoClose:5000})
                    history.push('/super-admin');
                }
            }
        }).catch((error) => {
            console.log(error);
        })        
    }

    return (
        <section>
            <div className="container-fluid my-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} className="img-fluid my-3" alt="" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <h1 className="text-center my-5">LOGIN HERE</h1>
                            <div className="form-outline mb-4">
                                <input type="email" id="email" name="email" className="form-control form-control-lg shadow shadow-lg" placeholder="Enter a valid email address" value={formData.email} onChange={handleChange} />
                                <label className="form-label" htmlFor="email">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" name="password" className="form-control form-control-lg shadow shadow-lg" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            <div className="d-grid text-center text-lg-start my-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg shadow shadow-lg" style={{ paddingLeft: "40px", paddingRight: "2.5rem" }} onClick={() => login()}>Login</button>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <a href="/" className="link-danger">Register</a>
                                </p>

                                <a href="/" className="text-body float-right">Forgot password?</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                <div>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

        </section>
    )
}