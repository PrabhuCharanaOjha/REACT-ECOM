import React from 'react'
import { Banner } from './banner'
import { Contact } from './contact'
import { Event } from './event'
import { Footer } from './footer'
import { Gallery } from './gallery'
import { Product } from './product'
import { Team } from './team'
import { Testimonial } from './testimonial'

export const HomePage = () => {
	return (
		<>
			<Banner />
			<Product/>
			<Event />
			<Gallery />
			<Team />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	)
}
