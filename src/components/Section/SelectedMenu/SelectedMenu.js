import React from 'react';
import Card from '../../Card/CardUI'



const SelectedMenu = (props) => {
    const foods = props.menu;
    // console.log(foods);
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row g-4 mx-5">
                    {
                        foods.map(food => <div className="col-md-4 d-flex justify-content-evenly ">
                            <Card foodItem={food} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectedMenu;