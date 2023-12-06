import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet, FaHome } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
        let timerInterval;
        Swal.fire({
            title: "You are logging out!",
            html: "It will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    };

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <Link to="/">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                        BRTA <span className='font-bold'>GOVT</span>
                    </h1>
                </Link>
                {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>English</p>
                    <p className='p-2'>Bangla</p>
                </div> */}
            </div>

            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search foods'
                />
            </div>
            {/* Cart button */}
            <div className='flex items-center'>
                <Link to="/">
                    <button className=' text-black hidden md:flex items-center mr-8 cursor-pointer hover:text-gray-600'>
                        Home
                    </button>
                </Link>
                <Link to="/get-license">
                    <button className='text-black hidden md:flex mr-8 items-center cursor-pointer hover:text-gray-600'>
                        License Apply
                    </button>
                </Link>
                {user ? (
                    // If user is available, show logout button and dashboard link
                    <>
                        <Link to="/dashboard">
                            <button className='text-black hidden md:flex mr-8 items-center cursor-pointer hover:text-gray-600'>
                                Dashboard
                            </button>
                        </Link>
                        <button onClick={handleLogout} className="btn btn-error text-white">
                            Logout
                        </button>
                    </>
                ) : (
                    // If user is not available, show login button
                    <Link to="/login">
                        <button className="btn btn-active bg-blue-400 text-white hidden md:flex items-center cursor-pointer hover:text-gray-600">Login</button>
                    </Link>
                )}
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    BRTA <span className='font-bold'>GOVT</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><FaHome size={25} className='mr-4' /><Link to="/">Home</Link></li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> <Link to="/get-license">License Apply</Link></li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> <Link to="/dashboard">Dashboard</Link></li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;