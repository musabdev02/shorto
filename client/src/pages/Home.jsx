import React from 'react'
// components
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-[65px]'>
                <main>
                    <Hero />
                </main>
            </div>
        </div>
    )
}

export default Home