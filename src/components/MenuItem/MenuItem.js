import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MenuItem.css';
import data from '../../data/fake_data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart'


// import image1 from '../../resources/lunch/lunch1.png'


const MenuItem = () => {
    const { addItem } = useCart();
    const { id } = useParams();
    const foodItem = data.find(food => food.id === parseInt(id))
    const { image, food_title, price, detail_description } = foodItem;


    // useEffect(() => {

    //     const savedCart = getStoredCart();

    //     const productId = Object.keys(savedCart);

    //     let quantity = Object.values(savedCart);
    //     quantity = foodItem.quantity;

    //     const cartProducts = productId.map(id => {
    //         const foodItem = data.find(pd => (pd.id).toString() === id.toString());
    //         foodItem.quantity = savedCart[id];
    //         return foodItem;
    //     });
    //     // setCart(cartProducts);
    //     console.log(quantity);
    // }, []);

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


    // const addItem = (foodItem, quantity) => {

    //     const toBeAddedId = foodItem.id;
    //     const sameItem = cart.find(item => item.id === toBeAddedId);

    //     let newCart;
    //     let count = 1;

    //     if (sameItem) {
    //         // count = sameItem.quantity + 1;
    //         // sameItem.quantity = count;
    //         sameItem.quantity = quantity;
    //         const others = cart.filter(item => item.id !== toBeAddedId)
    //         newCart = [...others, sameItem];
    //     }

    //     else {
    //         // foodItem.quantity = 1;
    //         newCart = [...cart, foodItem];
    //     }
    //     setCart(newCart);
    //     addToDb(foodItem.id);
    // }




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