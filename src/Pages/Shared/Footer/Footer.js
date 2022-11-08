import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
                <h2 className="text-5xl font-bold mb-2">Pepperoni</h2>
                <p className="font-bold">
                    Pepperoni Industries Ltd. <br />Providing reliable tech since 2002
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link to='#' className='text-2xl'><FaFacebookF></FaFacebookF></Link>
                    <Link to='#' className='text-2xl'><FaYoutube></FaYoutube></Link>
                    <Link to='#' className='text-2xl'><FaInstagram></FaInstagram></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;