import React from 'react';
import { Link } from 'react-router-dom';
import './CardUI.css';
const CardUI = (props) => {
    // console.log(props)
    const { id, image, food_title, short_description, price, category } = props.foodItem;


    return (
        <Link to={`/${category}/${id}`} style={{ textDecoration: 'none' }}>
            <div className="custom-card text-center border-0" >
                <div className="overflow">
                    <img src={image} alt="Image1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">{food_title}</h5>
                    <p className="card-text text-secondary">
                        {short_description}
                    </p>
                    <h5>${price}</h5>
                </div>
            </div>
        </Link>


    );
};

export default CardUI;