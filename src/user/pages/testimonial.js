import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export const Testimonial = () => {

	const option = {
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoPlay: true,
		timeout: 2000,
		dots: true,
		smartSpeed: 450,
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
		<section className="testimonials">
			<div className="container my-5">
				<div className="row">
					<h1 className="text-center my-3">TESTIMONIALS</h1>
					<h3 className="text-center">What they're saying about us</h3>
					<div className="col-sm-12">
						<OwlCarousel id="customers-testimonials" className="owl-carousel owl-theme" {...option}>
							<div className="item">
								<div className="shadow-effect">
									<img className="img-circle" src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
									<p>TEST DESCRIPTION 1</p>
								</div>
								<div className="testimonial-name">TEST NAME 1</div>
							</div>
							<div className="item">
								<div className="shadow-effect">
									<img className="img-circle" src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
									<p>TEST DESCRIPTION 1</p>
								</div>
								<div className="testimonial-name">TEST NAME 1</div>
							</div>
							<div className="item">
								<div className="shadow-effect">
									<img className="img-circle" src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
									<p>TEST DESCRIPTION 1</p>
								</div>
								<div className="testimonial-name">TEST NAME 1</div>
							</div>
							<div className="item">
								<div className="shadow-effect">
									<img className="img-circle" src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
									<p>TEST DESCRIPTION 1</p>
								</div>
								<div className="testimonial-name">TEST NAME 1</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	)
}
