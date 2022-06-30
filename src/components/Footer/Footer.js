import React from 'react';
import logo from '../../resources/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="main-footer text-white pt-5 pb-4" style={{ backgroundColor: 'black' }}>
                <div className="container text-center text-md-start">
                    <div className="row text-center text-md-start mb-5">
                        {/* Column 1 */}
                        <div className="col-md-6 col-lg-6 col-xl-6 mt-3">
                            <img src={logo}
                                height="39"
                                className="d-inline-block align-top"
                                alt="Red Onion logo" />
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    About Online food</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Read our blog</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Sign up to deliver</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Add your restaurant</a>
                            </p>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Get help</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Read FAQs</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    View all cities</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                    Restaurants near me</a>
                            </p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row mb-4">
                        <div className="col-md-7 col-lg-8">
                            <p>
                                Copyright &copy;2022 All rights reserved by:
                                <a href="https://github.com/ShararNur?tab=repositories" style={{ textDecoration: 'none' }}>
                                    <strong className="text-warning"> Sharar Nur</strong></a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-end">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white me-5" style={{ textDecoration: 'none' }}>
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white me-5" style={{ textDecoration: 'none' }}>
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white me-4" style={{ textDecoration: 'none' }}>
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;