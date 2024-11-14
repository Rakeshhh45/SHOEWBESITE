import './Men.css';
import Footer from '../footer/Footer'
import { FaStar, FaStarHalfAlt, FaLock, FaShippingFast, FaArrowsAltH } from "react-icons/fa";
import { useState } from 'react';

function Men() {

    const [product, setProduct] = useState(
        [
            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg",
                name: "Men’s Green Training",
                price: "$49.90",
            },

            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg",
                name: "Men’s Tosca City Run",
                price: "$60.80",
            },

            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg",
                name: "Men’s Red Running Shoe",
                price: "$70.90",
            },
        ]
    );

    const [products, setProducts] = useState(
        [
            {
                id:1,
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg",
                name: "Men’s Green Training",
                price: "$49.9",
            },

            {
                id:2,
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg",
                name: "Men’s Tosca City Run",
                price: "$60.9",
            },

            {
                id:3,
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg",
                name: "Men’s Red Running Shoe",
                price: "$70.9",
            },
        ]
    );

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.name === product.name);
        if (productIndex >= 0) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addToCarts = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex >= 0) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className='rakesh'>
            <div className="rakesh1">
                <h1>Men</h1>
            </div>
            <div className="rakesh2">
                <p>Showing all 9 results</p>
            </div>
            <div className='logo15'>
                {
                    product.map((product, index) => {
                        return (
                            <div className='con1' key={index}>
                                <img src={product.img} alt={product.name} srcSet="" />
                                <br />
                                <button className='btn5' onClick={() => addToCart(product)}>Add to Cart</button>
                                <a href=""><h2 className='logo16'>{product.name}</h2></a>
                                <p className='price'>{product.price}</p>
                                <div className="star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Tosca City Run</h2></a>
                    <p className='price'>$60.80</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Red Running Shoe</h2></a>
                    <p className='price'>$70.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
            </div>
            <div className='logo15'>
                {
                    products.map((products, index) => {
                        return (
                            <div className='con1' key={index}>
                                <img src={products.img} alt={products.name} srcSet="" />
                                <br />
                                <button className='btn5' onClick={() => addToCarts(products)}>Add to Cart</button>
                                <a href=""><h2 className='logo16'>{products.name}</h2></a>
                                <p className='price'>{products.price}</p>
                                <div className="star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Tosca City Run</h2></a>
                    <p className='price'>$60.80</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Red Running Shoe</h2></a>
                    <p className='price'>$70.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
            </div>
            <div className='logo15'>
                <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Green Training</h2></a>
                    <p className='price'>$49.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Tosca City Run</h2></a>
                    <p className='price'>$60.80</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Men’s Red Running Shoe</h2></a>
                    <p className='price'>$70.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
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
            <Footer />
        </div>

    )
}

export default Men;