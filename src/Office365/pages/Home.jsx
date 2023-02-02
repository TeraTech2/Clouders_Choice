import React from 'react'
import CloudBin from '../components/CloudBin'
import Hero from '../components/Hero'
import ImagesSection from '../components/ImagesSection'
// import Navbar from '../components/Navbar'
import '../styles/main.css'

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <div className="container-fluid">
                <p className="text-justify fs-6 text-secondary p-1 p-md-4">Cloud IBN M365 migration experts help organisation to smoothly transit to Office 365 and leverage the suite to boost employee performance and collaboration.</p>

                <ImagesSection />

                <CloudBin />
            </div>
        </div>
    )
}

export default Home