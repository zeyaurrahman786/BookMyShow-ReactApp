import React from 'react'
import MovieCards from '../Cards/MovieCards'

const PrimuimCard = () => {

    return (
        <div className='bg-[#2B3149] mt-8 py-10' >
            <div>
                <img className='ml-12 cursor-pointer' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="" />
            </div>
            <MovieCards />
        </div>
    )
}

export default PrimuimCard
