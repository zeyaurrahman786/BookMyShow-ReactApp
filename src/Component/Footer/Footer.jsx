import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";










const Footer = () => {
    return (
        <div className='bg-[#333338]'>
            <footer className=' text-white max-w-[1300px] py-5 mx-auto'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='mr-5 font-bold text-xl flex gap-1 items-center'><FaHouseLaptop className='inline text-3xl text-[#888]' /> List Your Show</h1>
                            <p className=''>Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow</p>
                        </div>
                        <button className='w-40 py-2'>Contect today!</button>
                    </div>


                    <div className='bg-[#404043] mt-5 p-3 flex justify-around capitalize text-[#999]'>
                        <div className='flex flex-col items-center'>
                            <RiCustomerServiceLine className='text-[50px]' />
                            <p>24/7 customer care</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <IoTicketOutline className='text-[50px]' />
                            <p>resend booking confirmation</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <MdNewspaper className='text-[50px]' />
                            <p>subscribe to the newsletter</p>
                        </div>
                    </div>



                    <div className=' mt-8'>
                        <h2 className='text-[#dcdcdcd6]'>COUNTRIES</h2>
                        <p className='text-[#888]'>Indonesia | Singapur | UAE | Sri-Lanka | West Indies</p>
                    </div>

                    <div className=' mt-8'>
                        <h2 className='text-[#dcdcdcd6]'>HELP</h2>
                        <p className='text-[#888]'>About Us | Contect Us | Current Openings | Press release | Terms & Conditions | Privecy Policy | FAQs | Sitemap</p>
                    </div>
                    <div className='  mt-8'>
                        <h2 className='text-[#dcdcdcd6]'>BOOKMYSHOW EXCLUSIVES</h2>
                        <p className='text-[#888]'>Watch Guide | Superstar | BookASmile | Corporate Voucher | Gift Card | Offers | Stream</p>
                    </div>

                    <p className='flex justify-center mt-10 '><span className='text-[#888]'>______________________________________________________________________________________________</span> <img className='w-40 mx-4 cursor-pointer' src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" /><span className='text-[#888]'>________________________________________________________________________________________________</span></p>


                    <div className='flex gap-3 items-center justify-center my-10'>
                        <a ><FaFacebook title='facebook' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaSquareXTwitter title='Twiter' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaSquareInstagram title='instagram' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><IoLogoYoutube title='youtube' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaLinkedin title='linkedin' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaGithub title='github' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                    </div>


                    <p className='text-[#888] hover:text-[#fff] text-center'>Copyright 2024 <a className='hover:underline' href="/" target="_self">@BookMyShow</a> Ltd.</p></div>
            </footer>
        </div>
    )
}

export default Footer
