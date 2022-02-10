import React from 'react';
import img1 from '../../../resources/Image/adult-blur-blurred-background-687824.png';
import img2 from '../../../resources/Image/chef-cook-food-33614.png';
import img3 from '../../../resources/Image/architecture-building-city-2047397.png'
import './About.css';
import icon1 from '../../../resources/ICON/Group 204.png'
import icon2 from '../../../resources/ICON/Group 245.png'
import icon3 from '../../../resources/ICON/Group 1133.png'

const About = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <div className="crd">
                        <img src={img1} alt="Image1" className="card-img" />
                        <div className="crd-bdy">
                            <img src={icon1} style={{ height: '2.5rem', marginRight: '15px' }} alt="" />
                            <div>
                                <h5 className="crd-title">Fast Delevery</h5>
                                <p className="crd-txt">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore id doloremque adipisci eius dolorum, recusandae sapiente soluta delectus minus nisi?
                                </p>
                                <a href="#" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="crd">
                        <img src={img2} alt="Image1" className="card-img" />
                        <div className="crd-bdy">
                            <img src={icon2} style={{ height: '2.5rem', marginRight: '15px' }} alt="" />
                            <div>
                                <h5 className="crd-title">A Good Auto Responder</h5>
                                <p className="crd-txt">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore id doloremque adipisci eius dolorum, recusandae sapiente soluta delectus minus nisi?
                                </p>
                                <a href="#" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="crd">
                        <img src={img3} alt="Image1" className="card-img" />
                        <div className="crd-bdy">
                            <img src={icon3} style={{ height: '2.5rem', marginRight: '15px' }} alt="" className="h-15" />
                            <div>
                                <h5 className="crd-title">Home Delevery</h5>
                                <p className="crd-txt">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore id doloremque adipisci eius dolorum, recusandae sapiente soluta delectus minus nisi?
                                </p>
                                <a href="#" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;