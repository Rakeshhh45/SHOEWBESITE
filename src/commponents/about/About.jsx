import './About.css';
import { Smartphone, MapPin } from 'feather-icons-react';
import { FaLock, FaShippingFast, FaArrowsAltH, } from "react-icons/fa";
import Footer from '../footer/Footer'
import { useState } from 'react';

function About() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [send, setSend] = useState(false);

    const sendMessage = () => {
        if (name && email && message) {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("message", message);
            localStorage.setItem("send", name);
            alert("MESSAGE SENT SUCCESSFULLY")
            setSend(true);
        }

        if (name && email && message) {
            window.location.reload(true);
        }
    }

    return (
        <div className='jeet'>
            <div className="jeet1">
                <h1>Contact</h1>
            </div>
            <div className="jeet2">
                <div className="jeet3">
                    <div className="jeet4">
                        <div className="jeet5">
                            <Smartphone />
                            <h1>Products & order</h1>
                        </div>
                        <p>(+1) 123-456-7890</p>
                        <p>available 24/7</p>
                    </div>
                    <div className="jeet4">
                        <div className="jeet5">
                            <Smartphone />
                            <h1>Info & enquiriesr</h1>
                        </div>
                        <p>(+1) 123-456-7890</p>
                        <p>available 24/7</p>
                    </div>
                    <div className="jeet4">
                        <div className="jeet5">
                            <MapPin />
                            <h1>Store locator</h1>
                        </div>
                        <p>Find our retail near you</p>
                    </div>
                </div>
                <div className="jeet6">
                    <div className="jeet7">
                        <h1>Name*</h1>
                        <input type="text" placeholder='Enter your Name' onChange={(e) => { setName(e.target.value) }} required />
                        <h1>Email*</h1>
                        <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required />
                        <h1>Comment or Message</h1>
                        <input type="text" placeholder='Enter Message' onChange={(e) => { setMessage(e.target.value) }} required />
                        <br />
                        <button className='btnnnn1' onClick={() => sendMessage()}>Send Message</button>
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

export default About 