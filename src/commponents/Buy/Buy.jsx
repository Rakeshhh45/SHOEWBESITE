import React from 'react'
import './Buy.css';
import { useState, useEffect } from 'react';
import { FaLock, FaShippingFast, FaArrowsAltH } from "react-icons/fa";

const Buy = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace('$', ''));
    };

    const calculateItemTotal = (price, quantity) => {
        return parsePrice(price) * quantity;
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
    };

    const totalProductPrice = calculateTotalPrice();
    const discount = 0;
    const orderTotal = totalProductPrice - discount;


    return (
        <div className='checkout'>
            <div className="checkout2">
                <h1>Checkout</h1>
            </div>
            {/* <div className="checkout1"> */}
            <div className="checkout3">
                <div className="rowww">
                    <div className="checkout4">
                        <h1>Customer information</h1>
                    </div>
                    <div className="checkout5">
                        <input type="text" placeholder='Username or Email Address *' />
                        <h1>Billing details</h1>
                        <div className="checkout6">
                            <input type="text" placeholder='First name *' />
                            <input className='input1' type="text" placeholder='Last name *' />
                        </div>
                        <br />
                        <input type="text" placeholder='Company name *' />
                        <br /><br />
                        <input type="text" placeholder='Country Name *' />
                        <br />
                        <div className="checkout7">
                            <input type="text" placeholder='House number and street name' />
                            <input className='input1' type="text" placeholder='Apartment, suite, unit, etc. (optional)' />
                        </div>
                        <div className="checkout8">
                            <input type="text" placeholder='Town / City' />
                            <input className='input1' type="text" placeholder='State' />
                            <input className='input1' type="text" placeholder='Pin Code*' />
                        </div>
                        <br />
                        <input type="text" placeholder='Phone *' />
                        <div className="checkout9">
                            <h1>Additional information</h1>
                        </div>
                        <br />
                        <input type="text" placeholder='Notes about your order, e.g. special notes for delivery. *' />
                        <br />
                        <div className="checkout10">
                            <input type="text" placeholder='Coupon Code ' />
                            <button>APPLY</button>
                        </div>
                        <h1>Payment</h1>
                        <div className="checkout11">
                            <div className="checkout12">
                                <span>Sorry, it seems that there are no available payment methods. <br /><br /> Please contact us if you require assistance or wish to make <br /><br />alternate arrangements.</span>
                            </div>
                        </div>
                        <button className='buttt'><FaLock /> PLACE ORDER </button>
                    </div>
                </div>
                <div className="checkout12">
                    <div className="your-order-sticky">
                        <h3>Your Order</h3>
                        <div className="checkout13">
                            <div className="checkout14">
                                <h3 className='h2'>Product</h3>
                                <h3 className='h3'>Subtotal</h3>
                            </div>
                            {cart.map((item, index) => (
                                <div key={index} className="checkout15">
                                    <img className="small-img" src={item.img} alt={item.name} />
                                    <h4 className="small-name">{item.name}</h4>
                                    <h4>${calculateItemTotal(item.price, item.quantity).toFixed(2)}</h4>
                                </div>
                            ))}
                            <div className="checkout16">
                                <h4 className='h4'>Subtotal</h4>
                                <h4 className='h5'>${totalProductPrice.toFixed(2)}</h4>
                            </div>
                            <div className="checkout17">
                                <h4 className='h4'>Total</h4>
                                <h4 className='h5'>${orderTotal.toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rakesh3">
                <div className="rakesh4">
                    <h1>Better for People & the Planet</h1>
                    <p>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
                    <div className="btnn">
                        <a href="./Men"><button className='btn6'>SHOP MEN</button></a>
                        <a href="./Women"><button className='btn6'>SHOP WOMEN</button></a>
                    </div>
                </div>
            </div>
            <div className="delivery">
                <div className="payment">
                    <FaLock />
                    <h2>Secure Payment</h2>
                </div>
                <div className="payment">
                    <FaShippingFast />
                    <h2>Express Shipping</h2>
                </div>
                <div className="payment">
                    <FaArrowsAltH />
                    <h2>Free Return</h2>
                </div>
            </div>
            <footer className='footar2'>
                <div className="paras">
                    <p>© 2024 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
                </div>
                <div className="imggg">
                    <img src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png" />
                </div>
            </footer>
        </div>

        // </div>
    )
}

export default Buy