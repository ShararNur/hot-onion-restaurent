import React, { useEffect } from 'react';
import './PlaceOrder.css';
import img from '../../resources/lunch/lunch1.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PlaceOrder = () => {
    const [deliveryOption, setDeliveryOption] = useState("");
    const [address, setAddress] = useState("");
    const [floor, setFloor] = useState("");


    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/')
    }

    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/placeOrder')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])


    const handleOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleFloorChange = (event) => {
        setFloor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your state values: \n 
                Delivery option: ${deliveryOption} \n 
                Address: ${address} \n 
                Flat, suit or floor: ${floor} \n 
                You can replace this alert with your process`);
    };

    const handlePlaceOrder = () => {
        navigate("/orderComplete")
    }


    return (
        <div className='container d-flex'>
            <div className="delivery-details">
                <button className="btn btn-danger rounded-pill mb-3 px-3" onClick={handleLogout}>Log out</button>
                <h4>Edit Delivery Details</h4>
                <hr className="hr-wd" />
                <main className="form-checkout">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-light" id="option" placeholder="Delivery option" value={deliveryOption} onChange={handleOptionChange} />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control bg-light" id="address" placeholder="Address" value={address} onChange={handleAddressChange} />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control bg-light" id="floor" placeholder="Flat, suite or floor" value={floor} onChange={handleFloorChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-light" id="exampleFormControlInput4" placeholder="Business Name" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Add delivery instructor" ></textarea>
                        </div>

                        <button className="w-100 btn btn-lg btn-danger" type="submit">Save & Continue</button>

                    </form>
                </main>
            </div>
            <div className="order-cart">
                <p>From <span className="fw-bold">Gulshan Plaza Restaurant GPR</span>  </p>
                <p>Arriving in 20-30 min</p>
                <p>107 Rd No 8</p>
                <div className="ordered-item d-flex">
                    <img src={img} className="m-3" style={{ width: '20%' }} alt="" />
                    <div className="mt-2">
                        <small style={{ fontSize: 12 }}>Butter Naan</small>
                        <br />
                        <small className="text-danger fw-bold">$40</small>
                        <br />
                        <small className="text-muted" style={{ fontSize: 9 }}>Delivery free</small>
                    </div>
                </div>
                <div className="ordered-item d-flex mt-3">
                    <img src={img} className="m-3" style={{ width: '20%' }} alt="" />
                    <div className="mt-2">
                        <small style={{ fontSize: 12 }}>Butter Naan</small>
                        <br />
                        <small className="text-danger fw-bold">$40</small>
                        <br />
                        <small className="text-muted" style={{ fontSize: 9 }}>Delivery free</small>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <p className="mt-4">Subtotal - 4 item</p>
                        <p>Tax</p>
                        <p>Delivery fee</p>
                        <p className="fw-bold">Total</p>
                    </div>
                    <div className="mt-4" style={{ marginLeft: '140px' }}>
                        <p>$320</p>
                        <p>$5.00</p>
                        <p>$2.00</p>
                        <p className="fw-bold">$327</p>
                    </div>
                </div>
                <button id="orderButton" className="w-75 btn btn-lg btn-danger" type="submit" disabled={!deliveryOption || !address || !floor} onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </div>
    );
};

export default PlaceOrder;