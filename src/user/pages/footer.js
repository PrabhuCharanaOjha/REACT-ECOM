import React from 'react'

export const Footer = () => {
    return (
        <section className="bg-dark">
            <div className="container">
                <footer className="py-3">
                    <ul className="nav justify-content-center pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light">Home</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light">Features</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light">Pricing</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light">FAQs</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light">About</a></li>
                    </ul>
                    <ul className="nav justify-content-center pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light"><i className="fa fa-facebook"></i></a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light"><i className="fa fa-twitter"></i></a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light"><i className="fa fa-phone"></i></a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light"><i className="fa fa-whatsapp"></i></a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 link-light"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                    <p className="text-center link-light">© 2023 Company, Inc</p>
                </footer>
            </div>
        </section>
    )
}
