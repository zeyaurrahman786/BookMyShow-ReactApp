import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import MovieCards from '../Cards/MovieCards'



const AllCard = () => {
    let img1 = 'https://i.pinimg.com/736x/0b/2c/05/0b2c05ae9f33989667c278cb574d438b.jpg'
    let img2 = 'https://pbs.twimg.com/media/EAVP32bU8AAw2Kb.jpg'
    let img3 = 'https://i.pinimg.com/736x/a5/e9/a9/a5e9a9b8dd049017d1af4f0b8c23e6cb.jpg'
    let img4 = 'https://assets-in.bmscdn.com/promotions/cms/creatives/1730810821149_webmukta991.jpg'
    let img5 = 'https://www.sacnilk.com/image/bunnyimagenews.php?newsid=6136'

    const images = [img1, img2, img3, img4, img5];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    let data = [
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397455-zspcesjcyb-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399519-vqwblafcrv-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00417711-dbmenxtqnx-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399961-zkjfrmhmbk-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ni45SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00406660-dvgrhutgvp-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00370489-unxypwbqex-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393536-qemhuxjrph-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00331567-bkawaqmgpc-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00389476-byhhdpjbpk-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393163-bbqmbdhynf-portrait.jpg",


        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389109-seqtjelnyz-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00378435-zlzburabyc-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00358147-mrpgvrjcen-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00313350-wckjamhksm-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00308210-qtunaxlpjn-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00417741-kwubwpytud-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00389719-peulachqzz-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00406908-ahxjdaqtlh-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393199-pnzxqkbpnr-portrait.jpg",

        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00390813-qydjwektvp-portrait.jpg",


    ];




    return (
        <div>
            {/*  Image Slider */}
            <div className="relative top-3  max-w-[1320px] mx-auto  ">
                <div className="relative  h-80 overflow-hidden rounded-lg md:h-96">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={image}
                                className="block w-[1480px] rounded h-96 object-cover ml-5 cursor-pointer"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

            </div>


            <div className='bg-[#2B3149] mt-8 py-10' >
                <div>
                    <img className='ml-12 cursor-pointer' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="" />
                </div>
                <MovieCards />
            </div>


            <h1 className='mt-10 ml-28 font-bold text-2xl text-[#444]'>Top Reginal Cinema & Top Hindi Movies</h1>
            <div className='flex flex-wrap gap-x-10 gap-y-16 mt-10 max-w-[1300px] mx-auto mb-10'>

                {
                    data.map((item) => {
                        return (
                            <div className='h-84 w-[290px]'>
                                <img className='h-full w-full object-cover rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105' src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>



            <Footer />
        </div>
    )
}

export default AllCard
