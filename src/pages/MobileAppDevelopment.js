import React, { useContext } from 'react'
import img2 from "../Images/Eficient-Resource-Management.svg";
import img3 from "../Images/Scalable_Products.svg";
import img4 from "../Images/Visual_Design.svg";
import img5 from "../Images/Cross-Platform_Mobile_App_dev.svg";
import img6 from "../Images/iOS_Mobile_App_dev.svg";
import img7 from "../Images/Android_Mobile_App_dev.svg";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/Theme';


const MobileAppDevelopment = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`mobile_wrapper theme-${theme}`}>
            <div className="mobile-imgDiv">
                <div className="mobile-imgDiv-content">
                    <h4 className='imgDiv-heading'>Mobile Application Development Services</h4>
                    <div className="line"></div><br />
                    <p className='imgDiv-text d-none d-md-block'> TeraTech app development company
                        creates products that win the hearts and minds of your customers. Whenever you are looking to leverage the power of mobile app
                        development solutions, our experts are here to support you with
                        this task. Modern technologies help businesses across all domains
                        to grow revenues, win new competitive advantages and stand out
                        with their products or services. It is exactly what our qualified and
                        experienced mobile app developers do. </p>
                    <button className="btn btn-primary">
                        <NavLink to="/Contact" className='text-decoration-none'>Contact Us</NavLink>
                    </button>
                </div>
            </div>


            {/* services */}
            <div className="mob_services_wrapper">
                <div className="mt-4 mb-3 text-center">
                    <h1 className="">Our Services</h1>
                    <h2>About Our App Development Services</h2>
                </div>

                <div className="services-row service-row-1 row px-1">
                    <div className="col-md-6 col-sm-10 col-xs-12 service-row-content">
                        <p className="fs-3 text-center text-md-start">Efficient Resource Management</p>
                        <p className="text-center text-md-start px-1">When you reach out to us for quality mobile app development services, we carefully analyze your needs
                            and come up with the most optimal solution that perfectly aligns with your business goals and budget. Thus,
                            you can be sure that applications developed by TeraTech mobile development organization are always time and money-efficient.</p>
                    </div>
                    <div className="img-div col-md-6 col-sm-4 col-xs-12">
                        <img src={img2} className="img-responsive"></img>
                    </div>
                </div>

                <div className="mt-5 services-row service-row-2 row px-1">
                    <div className="img-div col-md-6 col-sm-4 col-xs-12">
                        <img src={img3} className="img-responsive"></img>
                    </div>
                    <div className="col-md-6 col-sm-10 col-xs-12 service-row-content">
                        <p className="fs-3 text-center text-md-start">Scalable Products</p>
                        <p className="text-center text-md-start px-1">Leaving room for improvement is essential when it comes to mobile app development. Even if your product is perfect, the time comes when you’ll need to integrate new features to meet your users’ needs and keep up with the latest trends.
                            TeraTech app development services help you to create products that are easy to scale and maintain.</p>
                    </div>
                </div>

                <div className="mt-5 services-row service-row-3 row px-1">
                    <div className="col-md-6 col-sm-10 col-xs-12 service-row-content">
                        <p className="fs-3 text-center text-md-start">Unique Visual Design</p>
                        <p className="text-center text-md-start px-1">There are more than 3 million applications in the App Store, and this figure continues to grow.
                            In such a saturated market, it is often challenging to stand out and attract your audience. What can grab users’
                            attention better than a bright and appealing user
                            interface? Create your app with the best UI/UX designers to outpace your competitors. </p>
                    </div>
                    <div className="img-div col-md-6 col-sm-4 col-xs-12">
                        <img src={img4} className="img-responsive"></img>
                    </div>
                </div>
            </div>


            {/* layer */}
            <div className="layer mt-5 py-2">
                <h4 className='p-2 text-center mt-4'>Mobile App Development</h4>
                <h1 className='text-center mb-5'>Services We Provide</h1>

                <div className="layer1 mb-4">
                    <div className="row justify-content-evenly align-items-start flex-column flex-column-reverse flex-sm-column flex-sm-column-reverse flex-md-row">
                        <div className="col-sm-12 col-md-6">
                            <p className='fs-4'>Cross-Platform App Development</p>
                            <p className='text-justify'>Cross-platform applications often serve as a unique and cost-effective solution for companies. single codebase, ease of maintenance, reduced development costs are just a few benefits provided cross-platform solutions. TeraTech mobile application development services empower businesses and boost their performance</p>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-1 text-center">
                            <img src={img5} className="img-responsive ml-5 mt-2"></img>
                        </div>
                    </div>
                </div>

                <div className="layer2 mb-4">
                    <div className="row justify-content-evenly align-items-start flex-column flex-column-reverse flex-sm-column flex-sm-column-reverse flex-md-row">
                        <div className="col-sm-12 col-md-6">
                            <p className='fs-4'>iOS Mobile App Development</p>
                            <p className='text-justify'>iPhone products are famous for their quality and elegant design.
                                Apple’s followers value premium quality they get, which means they are not ready to comprise it with application development
                                services. If you are looking for a mobile app development company to launch your next iOS app, rely on TeraTech experts.
                                With vast expertise in the field, we will create software to meet your users’ needs.</p>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-1 text-center">
                            <img src={img6} className="img-responsive pl-5 ml-5 mt-2"></img>
                        </div>
                    </div>
                </div>

                <div className="layer3">
                    <div className="row justify-content-evenly align-items-start flex-column flex-column-reverse flex-sm-column flex-sm-column-reverse flex-md-row">
                        <div className="col-sm-12 col-md-6">
                            <p className='fs-4'>Android Mobile App Development</p>
                            <p className='text-justify'>Android is the most widespread operating system in the world. With 2.5 billion active Android users, you have
                                a great chance to extend your reach with our custom application development.
                                TeraTech experienced developers know how to make your app appealing and fascinating to the target audience.</p>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-1 text-center">
                            <img src={img7} className="img-responsive pl-5 ml-5 mt-2"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileAppDevelopment