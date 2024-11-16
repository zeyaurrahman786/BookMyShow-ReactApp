import React from 'react'

let eventData = [
    {
        title: 'Workshops & More',
        event: '5 Event',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png'
    },
    {
        title: 'Workshops & More',
        event: '5 Event',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png'
    },
    {
        title: 'Workshops & More',
        event: '5 Event',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png'
    },
    {
        title: 'Workshops & More',
        event: '5 Event',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png'
    },
]

const EventCard = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-[-25px]'>
            <h1 className='font-bold text-2xl mb-6'>Recommended Movies</h1>
            <div className='flex gap-8 overflow-auto p-4'>
                {
                    eventData.map((val, index) => {
                        return (
                            <div className='min-w-[250px] flex flex-col bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105'>
                                <img className='w-full h-[100%] object-contain' src={val.image} alt={val.title} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventCard
