import React from 'react'
import OwlCarousel from 'react-owl-carousel';
export const Team = () => {
	const option = {
		autoWidth: true,
		loop: true,
		mouseDrag: true,
		autoplay: true,
	}

	return (
		<section className="game-section">
			<h1 className="text-center my-3">OUR TEAM</h1>
			<OwlCarousel className="owl-carousel custom-carousel owl-theme" id="teamId" {...option}>
				<div className="item">
					<div className="item-desc">
						<h3>TEST NAME 1</h3>
						<p>TEST DESCRIPTION 2</p>
					</div>
				</div>
				<div className="item">
					<div className="item-desc">
						<h3>TEST NAME 1</h3>
						<p>TEST DESCRIPTION 2</p>
					</div>
				</div>
				<div className="item">
					<div className="item-desc">
						<h3>TEST NAME 1</h3>
						<p>TEST DESCRIPTION 2</p>
					</div>
				</div>
				<div className="item">
					<div className="item-desc">
						<h3>TEST NAME 1</h3>
						<p>TEST DESCRIPTION 2</p>
					</div>
				</div>
				<div className="item">
					<div className="item-desc">
						<h3>TEST NAME 1</h3>
						<p>TEST DESCRIPTION 2</p>
					</div>
				</div>
			</OwlCarousel>
		</section>
	)
}
