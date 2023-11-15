import React from 'react'
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom"
// import { useContext } from "react";
// import { UserAuthenticationDetails } from "../../context/userContext"


export const Banner = () => {

	const BackgroundImage = process.env.PUBLIC_URL + "/assets/images/common_files/banner.png";
	// const backgrounImage = {
	// 	backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/common_files/banner.png"})`,
	// };

	return (
		<section className="bannerBackGround" style={{ backgroundImage: `url(${BackgroundImage})` }}>
			<div className="container">

				<div className="row">
					<div className="header_section_top">
						<div className="row">
							<div className="col-sm-12">
								<div className="custom_menu">
									<ul>
										<li><NavLink exact to="/">Best Sellers</NavLink></li>
										<li><NavLink exact to="/">Gift Ideas</NavLink></li>
										<li><NavLink exact to="/">New Releases</NavLink></li>
										<li><NavLink exact to="/">Today's Deals</NavLink></li>
										<li><NavLink exact to="/">Customer Service</NavLink></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row my-5">
					<nav className="navbar navbar-expand-lg">
						<div className="container-fluid">
							<Link className="navbar-brand" to="/">Navbar</Link>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Home</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Product</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Event</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Gallery</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Team</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Testimonial</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" aria-current="page" >Contact Us</span>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/login">login</NavLink>
									</li>
								</ul>
								{/* <form className="d-flex position-absolute top-50 start-50 translate-middle" role="search">
									<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
									<button className="btn btn-outline-success" type="button">Search</button>
								</form> */}
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item position-absolute top-50 start-100 translate-middle">
										<a className="nav-link active" aria-current="page" href="/"> <i className="fa fa-cart-plus" aria-hidden="true"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</section>
	)
}
