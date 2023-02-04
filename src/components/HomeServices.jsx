import React from 'react';
import personUsingComputer from "../Images/personUsingComputer.png";
import cyber from "../Images/cyber-security.png";
import cloud from "../Images/cloud.png";
import netSuite from "../Images/netSuite.png";
import "../Pages_css/Services.css";

const HomeServicesData = [
    {
        heading:"Managed IT Services:",
        desc:"Are you looking for your IT service superheroes to save the day? From IT automation to IT helpdesk support, and all points in between, Newtec Services can take the pain out of even the most complex system.",
        img:personUsingComputer
    },
    {
        heading:"Cyber Security:",
        desc:"In an increasing world of ransomware and hackers, business owners must be ever vigilant to protect their assets. Don’t leave your data to chance. If you are unsure about your system’s security, Newtec Services can help.",
        img:cyber
    },
    {
        heading:"Cloud Services:",
        desc:"Improve productivity, collaboration, and efficiency all while reducing costs on expensive hardware upgrades by migrating to the cloud. We offer custom cloud migration services that fit your business needs.",
        img:cloud
    },
    {
        heading:"NetSuite:",
        desc:"Looking for an all inclusive suite of services, without a custom price tag? With NetSuite through Newtec Services, your business can have an integrated CRM, ERP, and even ecommerce solutions up and running in no time. Learn more now.",
        img:netSuite
    },
]


const HomeServices = () => {
  return (
    <>
        <div className="homeServicesWrapper mt-5 container">
            <h1 className='text-center'>Services</h1>

            <div className="row homeServicesBody">
                {
                    HomeServicesData.map(service => <HomeServicesItem service={service}/>)
                }
            </div>
        </div>
    </>
  )
}
export default HomeServices




const HomeServicesItem = ({service}) => {
    return <>
        <section className="homeServicesItem col-lg-6 d-md-flex align-items-center mx-auto my-5 mb-0">
            <div className='text-center text-md-start'>
                <img src={service.img} alt={`${service.heading}`} width={150} height={130}/>
            </div>
            <div className="homeServicesItemText mx-md-5 my-sm-3 text-center text-md-start">
                <h4 className='font-weight-bold'>{service.heading}</h4>
                <p>{service.desc}</p>
            </div>
        </section>
    </>
}