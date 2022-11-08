import React from 'react';
import img from '../../../Asstes/hero-image.png';

const Slider = () => {
    return (
        <div className="hero min-h-screen bg-primary text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Sweet and Spicy Pepperoni</h1>
                    <p className="py-6"> A classic pizza topped with mozzarella cheese and spicy pepperoni can be made at home for a fraction of the price of takeout.</p>
                    <button className="btn glass">View Pepperoni</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;