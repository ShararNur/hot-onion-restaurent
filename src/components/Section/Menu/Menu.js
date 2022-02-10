import React, { useEffect, useState } from 'react';
import data from '../../../data/fake_data.json';
import SelectedMenu from '../SelectedMenu/SelectedMenu'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Menu = () => {
    const [foodItem, setFoodItem] = useState(data);
    const [category, setCategory] = useState('lunch');
    const [selectedMenu, setSelectedMenu] = useState([]);

    const { totalItems } = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        const selectedFoodItems = foodItem.filter(item => item.category.toLowerCase() === category.toLowerCase())
        setSelectedMenu(selectedFoodItems);
    }, [category])

    const handleCheckout = () => {
        navigate("/login")
    }


    return (
        <div style={{ marginTop: '70px' }}>
            <ul className="text-center fw-bold list-unstyled">
                <li>
                    <Link to="/breakfast" className="me-5" onClick={() => setCategory('breakfast')} style={{ textDecoration: 'none' }}>Breakfast</Link>
                    <Link to="/lunch" className="me-5" onClick={() => setCategory('lunch')} style={{ textDecoration: 'none' }}>Lunch</Link>
                    <Link to="/dinner" onClick={() => setCategory('dinner')} style={{ textDecoration: 'none' }}>Dinner</Link>
                </li>
            </ul>
            {
                <SelectedMenu menu={selectedMenu}></SelectedMenu>
            }
            <div className="d-grid gap-2 col-md-3 col-6 mx-auto mt-5">
                {totalItems >= 1 ? <button type="button" className="btn btn-lg btn-danger" onClick={() => handleCheckout()}> Checkout Your Food</button>
                    : <button type="button" className="btn btn-lg btn-danger disabled">Checkout Your Food</button>}
            </div>
        </div >
    );
};

export default Menu;