import React, { useContext } from 'react'
import {ThemeContext } from '../../context/Theme'
import CloudBin from '../components/CloudBin'
import Hero from '../components/Hero'
import ImagesSection from '../components/ImagesSection'

const Home = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`office365_wrapper theme-${theme}`}>
            <Hero />
            <div className="container-fluid content">
                <p className="text-center fs-6 p-1 p-md-4">Cloud IBN M365 migration experts help organisation to smoothly transit to Office 365 and leverage the suite to boost employee performance and collaboration.</p>

                <ImagesSection />

                <CloudBin />
            </div>
        </div>
    )
}

export default Home