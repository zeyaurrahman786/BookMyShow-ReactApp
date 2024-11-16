import React from 'react'
import NavBar from './NavBar/NavBar'
import Slider from './Others/Slider'
import Poster from './Others/Poster'
import EventCard from './Cards/EventCard'
import PrimuimCard from './PrimiumCard/PrimuimCard'
import MusicCard from './Cards/MusicCard'
import GamesSportCard from './Cards/GamesSportCard'
import Footer from './Footer/Footer'
import MovieCards from './Cards/MovieCards'

const Home = () => {
    return (
        <div>
           
            <Slider />
            <MovieCards headName='Recommended Movies' />
            <Poster />
            <EventCard />
            <PrimuimCard />
            <MusicCard headName='Your Music Studio' />
            <GamesSportCard headName='Top Games & Sports Events' />
            <Footer />

        </div>
    )
}

export default Home
