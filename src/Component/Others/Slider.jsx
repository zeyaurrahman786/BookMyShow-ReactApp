import React, { useEffect, useState } from 'react';
import img1 from '/image.png';
import img2 from '/image1.png';
import img3 from '/image2.avif';

const images = [img1, img2, img3];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative top-3  max-w-[1320px] mx-auto  ">
            <div className="relative  h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image}
                            className="block w-[1480px] rounded h-full object-cover ml-5 cursor-pointer"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {/* <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div> */}
        </div>
    );
};

export default Slider;
