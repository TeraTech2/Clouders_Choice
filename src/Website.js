import React, { Component } from 'react';
import ReactDom from "react-dom";
import "./Pages_css/Website.css";
import img1 from "./Images/1.PNG";
import img2 from "./Images/2.PNG";
import img3 from "./Images/3.PNG";
import img4 from "./Images/4.PNG";
import img5 from "./Images/5.PNG";
import img6 from "./Images/6.PNG";
import img7 from "./Images/7.PNG";
import img8 from "./Images/8.PNG";
import img9 from "./Images/p1.PNG";
import img10 from "./Images/p2.PNG";
import img11 from "./Images/p3.PNG";
import img12 from "./Images/p4.PNG";
import img13 from "./Images/cloudcomputing.jpg"
import img14 from "./Images/MobileAppDevelopment.jpg"
import img15 from "./Images/webdevelopment.jpg"
import { Link } from 'react-router-dom';

class Website extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='website'>

                    <div id="carouselExampleIndicators" className="mb-3 carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img13} className="d-block" alt="img1" width={'100%'} height={'100%'} />
                            </div>
                            <div className="carousel-item">
                                <img src={img14} className="d-block" alt="img2" width={'100%'} height={'100%'} />
                            </div>
                            <div className="carousel-item">
                                <img src={img15} className="d-block" alt="img3" width={'100%'} height={'100%'} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>



                    <div className='footer'><br />
                        <h1>WEB APPLICATION DEVELOPMENT SERVICES</h1>
                        <hr />
                        <h4 className='mb-4'>What We Do</h4>

                        <div className="mb-5 row align-items-center d-flex justify-content-start justify-content-md-center">
                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img2} alt="" width={200} />
                                <p className='text-center'>We develop websites using the most compelling web technologies
                                    out there, including JavaScript,Jscript, Ruby or PHP</p>
                            </div>
                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img3} alt="" width={200} />
                                <p className='text-center'>We conduct on-page optimization campaigns and
                                    off-page link-building campaigns for top rankings</p>
                            </div>
                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img4} alt="" width={200} />
                                <p className='text-center'>We provide comprehensive Research solutions and
                                    prepare brilliant customized business models to suit the requirement of our clients</p>
                            </div>

                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img6} alt="" width={200} />
                                <p className='text-center'>Our team is equipped to deliver all types of services and solutions for the print, online and media domains
                                    with its two major wings pre-press and e-publishing.</p>
                            </div>
                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img7} alt="" width={200} />
                                <p className='text-center'>Digital Marketing is marketing a companys products or services by using digital technologies and
                                    reaching the targeted audience in over the web.</p>
                            </div>
                            <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={img8} alt="" width={200} />
                                <p className='text-center'>Mobile application testing is a process by which a developed application of a mobile device
                                    is tested for its functionality, etc..,</p>
                            </div>
                        </div>


                        <div className="details" >
                            <h5 className='text-center py-3 fs-5'>TeraTech Services Advantages</h5>
                        </div>

                        <div className="row advantages">
                            <div className="col-md-6">
                                <p className='fw-bold text-center mt-sm-3 mb-sm-2 mt-md-0'>Core Features of TeraTech Services</p>

                                <div className="mb-3 d-flex justify-content-start flex-wrap flex-column">
                                    <div className="d-flex justify-content-md-start justify-content-sm-center align-items-center">
                                        <img src={img9} alt="" className='' />
                                        <p className='fw-bold'>100% RESPONSIVE LAYOUT</p>
                                    </div>
                                    <p className='px-1 text-sm-center text-md-start'>We create easy reading and navigation with a minimum of resizing, panning, and scrolling across a wide range of devices</p>
                                </div>

                                <div className="mb-3 d-flex justify-content-start flex-wrap flex-column">
                                    <div className="d-flex align-items-center justify-content-md-start justify-content-sm-center">
                                        <img src={img10} alt="" />
                                        <p className='fw-bold'>FREE SUPPORT &#38; UPDATES</p>
                                    </div>
                                    <p className='px-1 text-sm-center text-md-start'>Work directly with an assigned team to fix bugs,
                                        maintain your application or build new features</p>
                                </div>

                                <div className="mb-3 d-flex justify-content-start flex-wrap flex-column">
                                    <div className="d-flex align-items-center justify-content-md-start justify-content-sm-center">
                                        <img src={img11} alt="" />
                                        <p className='fw-bold'>PIXEL PERFECT DESIGN</p>
                                    </div>
                                    <p className='px-1 text-sm-center text-md-start'> We considered every detail, down to individual pixels, as opposed to
                                        designing things with all kinds of anti-aliasing and compression artifacts</p>
                                </div>

                                <div className="d-flex justify-content-start flex-wrap flex-column">
                                    <div className="d-flex align-items-center justify-content-md-start justify-content-sm-center">
                                        <img src={img12} alt="" />
                                        <p className='fw-bold'>RICH LAYOUT OPTIONS</p>
                                    </div>
                                    <p className='px-1 text-sm-center text-md-start'> Clean, organized grid - The clean, sharp lines and rigid layout of this design across a wide range of devices</p>
                                </div>
                            </div>

                            {/* section2 */}
                            <div className="col-md-6 row d-flex justify-content-between align-items-start">
                                <p className='fw-bold text-center mt-3 mb-sm-4 mt-md-0'>Why Choose TeraTech Services</p>

                                <div className="mb-3 col-md-12 col-sm-6">
                                    <p className="fw-bold">DELIVERING SOLUTIONS</p>
                                    <p className="justify">It delivers intuitive web solutions loaded with features that surpass customer expectations.</p>
                                </div>

                                <div className="mb-3 col-md-12 col-sm-5">
                                    <p className="fw-bold">WE ARE FRIENDLY</p>
                                    <p className='justify'>Most of our clients have fun working with us. We make the web design process easy and pleasant. We speak in plain English, not techno-babble. And we love what we do for a living.
                                    </p>
                                </div>

                                <div className="mb-3 col-md-12 col-sm-5">
                                    <p className="fw-bold">WE'RE HONEST</p>
                                    <p className='justify'>
                                        Our business has grown word-of-mouth and we intend to continue growing this way. We'll treat you fairly and do a great job so that you'll want to continue working with us after your site has launched. And, we want you to tell all your friends and colleagues about us.
                                    </p>
                                </div>

                                <div className="mb-3 col-md-12 col-sm-5">
                                    <p className="fw-bold">YOU'RE THE BOSS</p>
                                    <p className='justify'>We'll give you options and the tools and information to make good choices.
                                        We'll give you our recommendations, but ultimately, every decision about your website is yours.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Website;
