import { NavLink } from "react-router-dom";
import "./Navbar";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaBars, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
import Cart from '../cart/Cart'

function Navbar({ cart }) {
    return (
        <header>
            <input type="checkbox" name="" id="chk1" />
            <div className="logo"><h1>PLASHOE</h1></div>
            <div className="search-box">
                <forms action="">
                    <input type="text" name="search" id="srch" placeholder="search" />
                    <button type="submit"><FaSearch className="i" /></button>
                </forms>
            </div>
            <ul>
                <li><NavLink to="/men">Men</NavLink></li>
                <li><NavLink to="/women">Women</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>

            </ul>
            <div>
                <ul className="li" >
                    <li><a href="https://www.facebook.com/Rakesh Prajapati/"><div className="i"><FaFacebook /></div></a></li>
                    <li><a href="https://x.com/YARRR_RAKESH"><div className="i"><FaTwitter /></div></a></li>
                    <li><a href="https://www.instagram.com/yarrr_rakesh/"><div className="i"><FaInstagram /></div></a></li>
                    <li>
                        <NavLink to="/Cart"><FaShoppingCart /></NavLink>
                    </li>
                </ul>
            </div>

            <div className="menu">
                <label for="chk1">
                    <div className="i"><FaBars /></div>
                </label>
            </div>
        </header>
    );
};

export default Navbar;