import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import img3 from "../Images/image3.png";

const About = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`row bg-${theme == "light" ? "light" : "dark"}`} style={{minHeight:"100vh", height: "auto"}}>

            <div className="col-12 col-md-12 col-lg-6 pt-4 mt-lg-0">
                <h1 className={`heading text-${theme == "light" ? "dark" : "light"}`}>About Us</h1>
                <p style={{ textAlign: "justify" }} className={`px-1 text-${theme == "light" ? "dark" : "light"}`}>
                    TeraTech Services was established in the year 2020. We are headquartered in
                    Chennai, India. Our main focus is on providing multi-cloud solutions and services.
                    With over 15 years of combined experience in IT infrastructure and cloud
                    computing, our dedicated team of experts are committed to help businesses
                    adopt cloud computing to transform their infrastructure and business needs. We
                    also extend our technical expertise on Web Development, App Development &
                    Leveraging corporate trainings on technologies.
                </p>
                <p style={{ textAlign: "justify" }} className={`px-1 text-${theme == "light" ? "dark" : "light"}`}>
                    TeraTech Services enable clients through our Cloud consulting services: Assessment, design, strategies, plan and prototype (PoC). Services include: Cloud Architecture designing, Cloud Migration, DevOps Cloud strategy & application optimisation. We provide you with hands-on technical assistance deploying and migrating your environment. We help to setup and build hybrid environments, integrations, connectivity and configurations across the entire technology stack. Our qualified technical engineers provide proactive on call support, management and monitoring to customers. In addition clients are assigned a dedicated Technical consultant, as your go-to-person for advice and continued Cloud strategy innovation and growth.
                </p>
            </div>

            <div className="col-12 col-lg-5 col-md-12 pt-5">
                <img src={img3} className="img-responsive w-100"></img>
            </div>
        </div>
    )
}

export default About