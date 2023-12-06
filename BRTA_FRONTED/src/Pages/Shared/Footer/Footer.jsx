import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../api/api';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}subscribe`, {
                email: email,
            });

            // Log success message
            console.log('Subscription successful:', response.data.message);
            Swal.fire({
                icon: "success",
                title: "Thanks for subscribing!",
                showConfirmButton: false,
                timer: 1500
              });
              
        } catch (error) {
            // Log error message
            console.error('Subscription error:', error.response.data.message);
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    };
    return (
        <>
            <footer className="footer p-10 bg-zinc-600 text-white lg:flex lg:justify-between grid grid-cols-1 text-lg">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form onSubmit={handleSubscribe}>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item text-gray-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="btn bg-blue-400 join-item">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer footer-center p-4 bg-zinc-600 text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Naim Siddiqui</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;