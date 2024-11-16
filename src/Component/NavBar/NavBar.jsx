import React, { useState } from 'react'
import Logo from '/Logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { FcCallback } from "react-icons/fc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { Link } from 'react-router-dom';






const NavBar = () => {
    let [loginTogle, setLoginTogle] = useState(false);
    let [menuTogle, setMenuTogle] = useState(false);




    return (
        <div className='relative overflow-hidden'>



            {/*  Login SignUp Page */}
            <div className='bg-[#55555591] h-full w-full rounded fixed z-10' style={loginTogle ? { display: 'block' } : { display: 'none' }}>
                <div className='w-[420px] h-[550px] p-5 bg-white fixed left-[35%] translate-y-28 rounded flex flex-col items-center'>
                    <p onClick={() => setLoginTogle(false)} className='absolute right-4 top-4 cursor-pointer'><RxCross2 className='text-3xl text-[#555]' /></p>
                    <h2 className='my-3 text-2xl text-[#555] mt-8'>Get Started</h2>

                    <div className='flex items-center gap-8 border border-[#777] px-8 py-2 rounded cursor-pointer mt-8 hover:border-transparent hover:bg-[#f0efef]'>
                        <FcGoogle className='text-2xl' /> <p className=' text-[#555555ba] font-bold'>Continue With Google</p>
                    </div>
                    <div className='flex items-center gap-8 border border-[#777] px-10 py-2 rounded cursor-pointer mt-8  hover:border-transparent hover:bg-[#f0efef]'>
                        <MdOutlineMailOutline className='text-2xl text-[#555]' /> <p className=' text-[#555555ba] font-bold'>Continue With Email</p>
                    </div>
                    <div className='flex items-center gap-8 border border-[#777] px-9 py-2 rounded cursor-pointer mt-8 hover:border-transparent hover:bg-[#f0efef]'>
                        <FaApple className='text-2xl' /> <p className=' text-[#555555ba] font-bold'>Continue With Apple</p>
                    </div>


                    <h2 className='my-6 font-bold text-[#666]'>OR</h2>


                    <div className='flex items-center gap-10 text-[#555]'>
                        <FcCallback className='text-xl text-[#555]' /> <input type='tel' className=' text-[#555555ba] w-[200px] border-0 border-b border-[#555] rounded-none ml-[-20px]' placeholder='e:g  +91 8080808080......' />
                    </div>
                    <div className='mt-12'>
                        <button className='w-[300px]'>Continue</button>
                    </div>
                </div>
            </div>



            {/* Side memnu area */}
            <div className='bg-[#55555591] h-full w-full rounded fixed z-10' onClick={() => setMenuTogle(false)} style={menuTogle ? { display: 'block' } : { display: 'none' }}>
                <div className='w-[350px] h-full bg-white fixed right-0'>
                    <h2 className='text-xl text-[#404040] font-bold p-3'>Hey!</h2>
                    <p className='bg-gray-500 h-[1px] mt-3'></p>

                    <div className='flex items-center gap-4 mt-5 shadow-xl p-2 pb-4'>
                        <img className='h-10 w-10' src='https://in.bmscdn.com/webin/movies/superstar/rewards_login.png' alt="" />
                        <p className='text-[14px] font-bold text-[#747eaae1]'>Unlock spacial offers & great benefits</p>
                        <p className='border border-red-600 rounded text-xs w-36 p-2 text-[red] font-bold cursor-pointer'>Login/Register</p>
                    </div>

                    <div className='flex items-center justify-between p-5'>
                        <p className='flex items-center gap-3 text-[14px]  text-[#444] font-bold'><IoIosNotificationsOutline className='text-2xl' /> Notifications</p> <span>⟩</span>
                    </div>

                    <p className='bg-gray-300 h-[1px] mt-3'></p>


                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center gap-3 text-[14px]  text-[#333] font-bold'><FaShoppingCart className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Your Orders</h2>
                                <p className='text-xs capitalize'>View Your Booking & Purcheses</p>
                            </div>
                        </div>
                        <CiLock className='text-2xl' />
                    </div>



                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#888]'><HiOutlineCurrencyRupee className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Play Creadit Card</h2>
                                <p className='text-xs'>View Your Play Creadit Card Details</p>
                            </div>
                        </div> < CiLock className='text-2xl' />
                    </div>



                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#888]'><IoChatbubbleEllipsesOutline className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Help & Support</h2>
                                <p className='text-xs capitalize'>View Commanly Asked Quaries  and chats</p>
                            </div>
                        </div> <span span className='text-2xl' >⟩</span>
                    </div>


                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#333]'><GoGift className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Rewards</h2>
                                <p className='text-xs capitalize'>View Your Rewards & Unlocks New Ones</p>
                            </div>
                        </div> < CiLock className='text-2xl' />
                    </div>


                </div>
            </div>


            <nav className='flex justify-around items-center my-4'>
                <div className='flex gap-8 items-center'>
                    <Link to='/'>
                        <img className='h-10 cursor-pointer' src={Logo} alt="book my show logo" />
                    </Link>
                    <div className='flex items-center border border-[#7777776d] px-2 rounded'>
                        <CiSearch /> <input className='w-[450px] border-0' type="search" placeholder='Search for Movies,Evants,Plays,Sports, and Activities' />
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <li>Bhopal <RiArrowDropDownLine className='inline text-3xl text-[#555]' /></li>
                    <button onClick={() => setLoginTogle(true)}>Sign In</button>
                    <h2 className='ml-8' onClick={() => setMenuTogle(true)}><IoMenu className='text-3xl cursor-pointer' /></h2>
                </div>
            </nav>

            <nav className='Nav-Bar flex justify-around bg-[#F5F5F5] p-2'>
                <div className='Lefttnav flex gap-4'>
                    <Link to='/AllCard'>
                        <p>Movies</p>
                    </Link>
                    <p>Stream</p>
                    <p>Events</p>
                    <p>Plays</p>
                    <p>Sports</p>
                    <p>Activities</p>
                </div>
                <div className='Rightnav flex gap-4 text-xs items-center'>
                    <p className=''>ListYourShow</p>
                    <p>Corporate</p>
                    <p>Offers</p>
                    <p>Gift Cards</p>
                </div>
            </nav>


        </div >
    )
}

export default NavBar
