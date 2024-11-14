import './Main.css';
import Footer from '../footer/Footer'
import { FaStar, FaStarHalfAlt, FaLock, FaShippingFast, FaArrowsAltH } from "react-icons/fa";
import { useState } from 'react';


function Main() {

    const [product, setProduct] = useState(
        [

            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg",
                name: 'Women’s Tosca City Run',
                price: '$49.90',
            },

            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012-400x400.jpg",
                name: 'Women’s Green Training',
                price: '$60.90',
            },

            {
                img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg",
                name: 'Men’s Red Running Shoe',
                price: '$70.50',
            },

            // {
            //     img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg",
            //     name: 'Women’s Tan Sneaker Shoe',
            //     price: '$50.90',
            // },

            // {
            //     img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg",
            //     name: 'Women’s Blue Training Shoe',
            //     price: '$40.90',
            // },

            // {
            //     img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg",
            //     name: 'Women’s Pink Training Shoe',
            //     price: '$90.90',
            // },
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


    return (
        <>

            <div className="container">
                <div className="main">
                    <h1 className='headline'>Love the Planet
                        <br /> we walk on</h1>
                    <p className='para'>A stylish shoe combines modern design, comfort, and high-quality materials,
                        <br /> enhancing both fashion and functionality for everyday wear.</p>
                    <div className='btn'>
                        <a href="./Men"><button className='btn1'><b>SHOP MAN</b></button></a>
                        <a href="./Women"><button className='btn2'><b>SHOP WOMEN</b></button></a>
                    </div>
                </div>
                <div className="logo1">
                    <h4>As seen in:</h4>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg" alt="" srcset="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg" alt="" srcset="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg" alt="" srcset="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg" alt="" srcset="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg" alt="" srcset="" />
                </div>
                <div className="logo2">
                    <div className="logo3">
                        <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg" alt="" srcset="" />
                    </div>
                    <div className="logo4">
                        <h4 className='about'>About Us</h4>
                        <br /><br />
                        <h1 className='logo5'>Selected materials <br />designed for comfort <br />and sustainability</h1>
                        <p className='logo6'>A shoe e-commerce website offers a wide <br /><br />selection of footwear for men, women, and children. Customers can <br /><br />browse various styles, sizes, and brands, make secure purchases <br /><br /> online, and enjoy convenient delivery and return options.</p>
                        <a href="./About"><button className='btn3'>READ MORE</button></a>
                    </div>
                </div>
                <div className="logo7">
                    <div className='harsh1'>
                        <h1 className='logo8'>See how your shoes are made</h1>
                        <span className='logo9'>Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec <br /><br />adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</span>
                        <div className="logo10">
                            <div className="rakeshh">
                                <div className="logo11">
                                    <p className='parag'>01.</p>
                                    <h2 className='head1'>Pet canvas</h2><br />
                                    <span className='spann'>Morbi eget bibendum sit <br />adipiscing morbi ac nisl vitae <br />maecenas nulla cursus</span>
                                </div>
                                <div className="logo12">
                                    <p className='parag'>02.</p>
                                    <h2 className='head1'>Algae foam + <br />vegan glue</h2><br />
                                    <span className='spann'>Morbi eget bibendum sit <br />adipiscing morbi ac nisl vitae <br />maecenas nulla cursus</span>
                                </div>
                            </div>
                            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png" alt="" srcset="" />
                            <div className="rakeshh">
                                <div className="logo13">
                                    <p className='parag1'>03.</p>
                                    <h2 className='head1'>Organic cotton</h2><br />
                                    <span className='spann'>A vel ipsum, sed dignissim <br />elementum ultrices ame</span>
                                </div>
                                <div className="logo12">
                                    <p className='parag1'>04.</p>
                                    <h2 className='head1'>Upcycled plastic <br />bottles</h2><br />
                                    <span className='spann'>A vel ipsum, sed dignissim <br />elementum ultrices ame</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='logo14'>
                    <h2 className='head2'>Our Best Seller</h2>
                    <button className='btn4'>View All Best Sellers</button>
                </div>
                <div className='logo15 '>
                    {
                        product.map((product, index) => {
                            return (
                                <div className='con1' key={index}>
                                    <img src={product.img} alt={product.name} srcset="" />
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
                </div>

                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Women’s Tosca City Run</h2></a>
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
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg" alt="" srcset="" />
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
                {/* </div> */}
                {/* <div className='logo15'> */}
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Women’s Tan Sneaker Shoe</h2></a>
                    <p className='price'>$50.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Women’s Blue Training Shoe</h2></a>
                    <p className='price'>$40.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
                {/* <div className='con1'>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg" alt="" srcset="" />
                    <br />
                    <button className='btn5'>Quick View</button>
                    <a href=""><h2 className='logo16'>Women’s Blue Training Shoe</h2></a>
                    <p className='price'>$90.90</p>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div> */}
                {/* </div> */}
                <div className="logo17">
                    <div className="img">
                        <div className="men">
                            <h1 className='nilesh'>MEN</h1>
                            <br />
                            <a href="./Men"><button className='btn6'>SHOP MEN</button></a>
                        </div>
                    </div>
                    <div className="img1">
                        <div className="men">
                            <h1 className='nilesh'>WOMEN</h1>
                            <br />
                            <a href="./Men"><button className='btn6'>SHOP WOMEN</button></a>
                        </div>
                    </div>
                </div>
                <div className="logo18">
                    <div className="hiten">
                        <div className="word">
                            <p>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar  laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
                        </div>
                        <div className="word1">
                            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg" alt="" srcset="" />
                            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg" alt="" srcset="" />
                            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg" alt="" srcset="" />
                        </div>
                    </div>
                    <div className="prakash">
                        <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg" alt="" srcset="" />
                    </div>
                </div>
                <div className="logo19">
                    <div className="cus">
                        <h1>Our Customers speak for us</h1>
                    </div>
                    <div className="rivew">
                        <div className="rivew1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p>“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”</p>
                            <div className="rivew2">
                                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg" alt="" srcset="" />
                                <p>Julia Keys</p>
                            </div>
                        </div>
                        <div className="rivew1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p>“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”</p>
                            <div className="rivew2">
                                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg" alt="" srcset="" />
                                <p>Luis Adrian</p>
                            </div>
                        </div>
                        <div className="rivew1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p>“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”</p>
                            <div className="rivew2">
                                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg" alt="" srcset="" />
                                <p>Maria Anna</p>
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
                <div className="rating">
                    <h4>4.8 average rating from 1814 reviews</h4>
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
        </>
    )
}

export default Main 