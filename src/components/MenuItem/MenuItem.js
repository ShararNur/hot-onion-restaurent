import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MenuItem.css';
import data from '../../data/fake_data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart'




const MenuItem = () => {
    const { addItem } = useCart();
    const { id } = useParams();
    const foodItem = data.find(food => food.id === parseInt(id))
    const { image, food_title, price, detail_description } = foodItem;

    let a = 1;
    const handlePlusEvent = () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        let num = document.querySelector(".num");
        num.innerText = a;
        foodItem.quantity = parseFloat(a);
        // console.log(foodItem);
    }

    const handleMinusEvent = () => {
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            let num = document.querySelector(".num");
            num.innerText = a;
            foodItem.quantity = parseFloat(a);
        }
    }


    return (
        <div className="container mt-4">
            <ul className="text-center fw-bold list-unstyled">
                <Link to="#" className="me-5" style={{ textDecoration: 'none' }}>Breakfast</Link>
                <Link to="#" className="me-5" style={{ textDecoration: 'none' }}>Lunch</Link>
                <Link to="#" className="me-5" style={{ textDecoration: 'none' }}>Dinner</Link>
            </ul>

            <div className="d-flex" style={{ marginLeft: '80px', marginTop: '35px' }}>
                <div className="item-details">
                    <h1>{food_title}</h1>
                    <p>{detail_description}</p>
                    <div className="d-flex">
                        <h2>${price}</h2>
                        <div className="wrapper rounded-pill ms-4">
                            <span className="minus" onClick={handleMinusEvent}>-</span>
                            <span className="num">01</span>
                            <span className="plus" onClick={handlePlusEvent}>+</span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger rounded-pill px-4 py-2 my-3" onClick={() => addItem(foodItem)} > <FontAwesomeIcon icon={faShoppingCart} className="me-3" />Add</button>


                    <div className="d-flex mt-4">
                        <img src={image} className="me-5" style={{ height: "150px" }} alt="" />
                        <img src={image} style={{ height: "150px" }} alt="" />
                        <FontAwesomeIcon icon={faChevronRight} size="lg" style={{ marginTop: "65px", marginLeft: "50px", cursor: "pointer" }} />
                    </div>
                </div>

                <div className="item-pic">
                    <img src={image} alt="" style={{ height: "35rem", marginLeft: "150px" }} />
                </div>
            </div>
        </div >
    );
};

export default MenuItem;