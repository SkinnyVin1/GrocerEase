import "../Components/NavbarForMobile.css";
import Logo from "../Images/logo.png";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Heart from "../Images/heart.png";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import Avatar from "../Images/21-avatar-outline.png";

const NavforMobile = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    const [activeLink, setActiveLink] = useState('link1');

    const changeColor = (link) => {
      setActiveLink(link);
    }
    const linkStyle = (linkId) => {
      return {
        backgroundColor: activeLink === linkId ? '#8dd08a' : 'white',
      };
    }

    return (
        <div className={scrolled ? 'navForMobile scrolled' : 'navForMobile'}>
            <div className="logoimg">
                <img src={Logo} alt="" />
            </div>
            <div className="iconsforMobile">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="icon-container-forMobile">
                                <img src={Heart} alt="" />
                                <span>Wishlist</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="icon-container-forMobile">
                                <img src={Cart} alt="" />
                                <span>Cart</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            <div className="icon-container-forMobile">
                                <img src={Avatar} alt="" />
                                <span>Account</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="NavMobil">
                <label htmlFor="check"><i class="fa-solid fa-bars ham"></i></label>
                <input id="check" type="checkbox" />
                <ul>
                    <li style={linkStyle('link1')}>
                        <Link to="/" onClick={() => changeColor('link1')} className="Nav-Link">Home</Link>
                    </li>
                    <li style={linkStyle('link2')}>
                        <Link to="/AboutUs" onClick={() => changeColor('link2')} className="Nav-Link">About Us</Link>
                    </li>
                    <li style={linkStyle('link3')}>
                        <Link to="/Shop" onClick={() => changeColor('link3')} className="Nav-Link">Shop</Link>
                    </li>
                    <li style={linkStyle('link4')}>
                        <Link to="/Orders" onClick={() => changeColor('link4')} className="Nav-Link">Orders</Link>
                    </li>
                    <li style={linkStyle('link5')}>
                        <Link to="/Dashboard" onClick={() => changeColor('link5')} className="Nav-Link">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavforMobile;