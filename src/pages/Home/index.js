import React from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import Capabilities from '../../components/Capabilities'
import Contact from '../../components/Contact'
import Clients from '../../components/Clients'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div>
            {/* <Nav /> */}
            <Header />
            <About />
            <Portfolio />
            <Capabilities />
            <Clients />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
