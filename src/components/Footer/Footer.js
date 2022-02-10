import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGooglePlus, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../resources/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="main-footer bg-dark text-white pt-5 pb-4">
                <div className="container text-center text-md-start">
                    <div className="row text-center text-md-start">
                        {/* Column 1 */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">
                                Company Name
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in
                                cumque repellat laboriosam voluptatibus quam ducimus officia
                                officiis consequuntur qui.
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">
                                Products
                            </h5>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    TheProviders</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Creativity</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    SourceFiles</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>bootstrap 5 alpha</a>
                            </p>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">
                                Useful links
                            </h5>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Your Account</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Become an Affiliates</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Help</a>
                            </p>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">
                                Contact
                            </h5>
                            <p>
                                <FontAwesomeIcon icon={faHome} className="me-3" /> C-35, Mohanagar Project, Rampura
                            </p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> shararnur@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} className="me-3" /> +880 1749648808</p>
                            <p><FontAwesomeIcon icon={faPrint} className="me-3" /> +880 1521218627</p>
                        </div>
                    </div>

                    <hr className="mb-4" />

                    {/* Footer Bottom */}
                    <div className="row">
                        <div className="col-md-7 col-lg-8">
                            <p>
                                Copyright &copy;2020 All rights reserved by:
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <strong className="text-warning"> The Providers</strong></a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-end">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FontAwesomeIcon icon={faFacebook} /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FontAwesomeIcon icon={faTwitter} /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FontAwesomeIcon icon={faGooglePlus} /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FontAwesomeIcon icon={faLinkedin} /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FontAwesomeIcon icon={faYoutube} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer 2 */}


            {/* <div className="container bg-dark text-white">
                <footer className="row row-cols-5 py-5 my-5 border-top">
                    <div className="col ">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                            <img className="bi me-2" height="32" src={logo} alt="" />
                        </a>
                        <p className="text-muted">&copy; 2021</p>
                    </div>
                    <div className="col">

                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column ">
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div> */}




        </div>







    );
};

export default Footer;