import React from 'react'
import OwlCarousel from 'react-owl-carousel';
export const Product = () => {

	const option = {
		autoplay: true,
		autoplayTimeout: 2000,
		rewind: true,
		items: 3,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1170: {
				items: 3,
			},
		},
	}

	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="container-fluid">
						<div className="row">
							<h1 className="text-center my-3">OUR PRODUCTS</h1>
							<div className="col-md-12">
								<OwlCarousel id="news-slider" className="owl-carousel owl-theme" {...option}>
									<div className="post-slide" >
										<div className="post-img">
											<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
											<a href="/" className="over-layer"><i className="fa fa-link"></i></a>
										</div>
										<div className="post-content">
											<h3 className="post-title">
												<a href="/">test name 1</a>
											</h3>
											<p className="post-description"></p>
											<span className="post-date"><i className="fas fa-clock"></i>Out 27, 2019</span>
											<a href="/" className="read-more">read more</a>
										</div>
									</div>
									<div className="post-slide" >
										<div className="post-img">
											<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
											<a href="/" className="over-layer"><i className="fa fa-link"></i></a>
										</div>
										<div className="post-content">
											<h3 className="post-title">
												<a href="/">test name 1</a>
											</h3>
											<p className="post-description"></p>
											<span className="post-date"><i className="fas fa-clock"></i>Out 27, 2019</span>
											<a href="/" className="read-more">read more</a>
										</div>
									</div>
									<div className="post-slide" >
										<div className="post-img">
											<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
											<a href="/" className="over-layer"><i className="fa fa-link"></i></a>
										</div>
										<div className="post-content">
											<h3 className="post-title">
												<a href="/">test name 1</a>
											</h3>
											<p className="post-description"></p>
											<span className="post-date"><i className="fas fa-clock"></i>Out 27, 2019</span>
											<a href="/" className="read-more">read more</a>
										</div>
									</div>
									<div className="post-slide" >
										<div className="post-img">
											<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
											<a href="/" className="over-layer"><i className="fa fa-link"></i></a>
										</div>
										<div className="post-content">
											<h3 className="post-title">
												<a href="/">test name 1</a>
											</h3>
											<p className="post-description"></p>
											<span className="post-date"><i className="fas fa-clock"></i>Out 27, 2019</span>
											<a href="/" className="read-more">read more</a>
										</div>
									</div>
								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
