import React, { useContext } from 'react';
import map from '../../resources/Image/map.png'
import './OrderComplete.css';
import img1 from '../../resources/Image/Group 1151.png'
import img2 from '../../resources/Image/Group 1152.png'
import { CurrentUserContext } from '../../App';

const OrderComplete = () => {
    const [loggedInUser, setLoggedInUser] = useContext(CurrentUserContext);
    console.log(loggedInUser)

    return (
        <div className="d-flex">
            <div className="live-location">
                <img className="img-fluid " src={map} alt="" style={{ marginTop: '90px', marginLeft: '200px', height: "76vh" }} />
            </div>
            <div className="delivery-address " >
                <img src={img1} alt="" style={{ height: "90px" }} className="img-fluid ms-5 mt-4 mb-3" />
                <div className="bg-white location">
                    <p className="ms-4" style={{ marginBottom: '0rem', paddingTop: '1rem', fontWeight: '500' }}>Your Location</p>
                    <p className="ms-4 text-muted" style={{ fontSize: 14 }} >107 Rd No 8</p>
                    <p className="ms-4" style={{ marginBottom: '0rem', fontWeight: '500' }}>Shop Address</p>
                    <p className="ms-4 text-muted" style={{ fontSize: 14 }}>Gulshan Plaza Restaurant GPR</p>
                </div>
                <h3 className="ms-4 mt-3">09: 30</h3>
                <p className="ms-4 text-muted" style={{ fontSize: 14 }} >Estimated delivery time</p>
                <div className="bg-white raider d-flex">
                    <img src={img2} alt="" className="m-2" />
                    <div>
                        <p className="ms-2 mt-2" style={{ marginBottom: '0rem', fontWeight: '500' }}>{loggedInUser.user.displayName}</p>
                        <p className="ms-2 text-muted" style={{ fontSize: 14 }} >Your raider</p>
                    </div>
                </div>
                <button className="btn btn-lg btn-danger mt-4 ms-3" type="submit" style={{ width: "90%" }}>Contact</button>
            </div>
        </div >
    );
};

export default OrderComplete;