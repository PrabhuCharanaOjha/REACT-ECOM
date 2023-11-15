import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export const Event = () => {
	const option = {
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		mouseDrag: false,
		autoplay: true,
		animateOut: "slideOutUp",
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	}
	return (
		<section className="eventCarousel">
			<h1 className="text-center my-3">EVENTS</h1>
			<OwlCarousel className="owl-carousel owl-theme" id="owl-carousel-event" {...option}>
				<div className="item">
					<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
					<div className="cover">
						<div className="container">
							<div className="header-content">
								<div className="line"></div>
								<h2>TEST NAME 1</h2>
								<h1>TEST DATE 1</h1>
								<h4>TEST DESCRIPTION 1</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
					<div className="cover">
						<div className="container">
							<div className="header-content">
								<div className="line"></div>
								<h2>TEST NAME 2</h2>
								<h1>TEST DATE 2</h1>
								<h4>TEST DESCRIPTION 2</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
					<div className="cover">
						<div className="container">
							<div className="header-content">
								<div className="line"></div>
								<h2>TEST NAME 3</h2>
								<h1>TEST DATE 3</h1>
								<h4>TEST DESCRIPTION 3</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={process.env.PUBLIC_URL + "/assets/images/common_files/no-image-available.jpg"} alt="" />
					<div className="cover">
						<div className="container">
							<div className="header-content">
								<div className="line"></div>
								<h2>TEST NAME 4</h2>
								<h1>TEST DATE 4</h1>
								<h4>TEST DESCRIPTION 4</h4>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel>
		</section>
	)
}
