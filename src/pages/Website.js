import React, { useContext } from 'react';
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";
import img6 from "../Images/6.png";
import img13 from "../Images/cloudcomputing.jpg"
import img14 from "../Images/MobileAppDevelopment.jpg"
import img15 from "../Images/webdevelopment.jpg"
import { ThemeContext } from '../context/Theme';

const Website = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`website_wrapper theme-${theme}`}>
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



            <div className='website_content mt-5'>
                <h1 className='text-center'>WEB APPLICATION DEVELOPMENT SERVICES</h1>
                <h4 className='mb-4 text-center'>What We Do</h4>

                <div className="content g-0 mb-5 row d-flex justify-content-center justify-content-md-center">
                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-around">
                        <img src={img1} alt="" width={200} height={200} />
                        <div>
                            <h5>Website Development</h5>
                            <p>We develop websites using the most compelling web technologies out there, including JavaScript,Jscript, Ruby or PHP</p>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-around">
                        <img src={img2} alt="" width={200} height={200} />
                        <div>
                            <h5>SEO</h5>
                            <p>We conduct on-page optimization campaigns and
                                off-page link-building campaigns for top rankings</p>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-around">
                        <img src={img3} alt="" width={280} height={200} />
                        <div>
                            <h5>Business Research</h5>
                            <p>We provide comprehensive Research solutions and
                                prepare brilliant customized business models to suit the requirement of our clients</p>
                        </div>
                    </div>

                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <img src={img4} alt="" width={200} height={200} />
                        <div>
                            <h5>E-Publishing</h5>
                            <p>Our team is equipped to deliver all types of services and solutions for the print, online and media domains
                                with its two major wings pre-press and e-publishing.</p>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <img src={img5} alt="" width={200} height={200} />
                        <div>
                            <h5>Digital Marketing</h5>
                            <p>Digital Marketing is marketing a companys products or services by using digital technologies and
                                reaching the targeted audience in over the web.</p>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <img src={img6} alt="" width={200} height={200} />
                        <div>
                            <h5>App development & Testing</h5>
                            <p>Mobile application testing is a process by which a developed application of a mobile device
                                is tested for its functionality, etc..,</p>
                        </div>
                    </div>
                </div>


                <div className="details text-center">
                    <h5 className='text-center py-3 fs-5'>TeraTech Services Advantages</h5>
                </div>

                <div className="row advantages g-0">

                    <p className='fw-bold text-center mt-4 text-shadow-none'>Core Features of TeraTech Services</p>
                    <div className="col-12 d-flex flex-wrap">

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className='fw-bold p-0 m-0 text-shadow-none text-center text-md-start'>100% RESPONSIVE LAYOUT</p>
                            <p>We create easy reading and navigation with a minimum of resizing, panning, and scrolling across a wide range of devices</p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className='fw-bold p-0 m-0 text-shadow-none text-center text-md-start'>FREE SUPPORT &#38; UPDATES</p>
                            <p>Work directly with an assigned team to fix bugs,
                                maintain your application or build new features</p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className='fw-bold p-0 m-0 text-shadow-none text-center text-md-start'>PIXEL PERFECT DESIGN</p>
                            <p> We considered every detail, down to individual pixels, as opposed to
                                designing things with all kinds of anti-aliasing and compression artifacts</p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className='fw-bold p-0 m-0 text-shadow-none text-center text-md-start'>RICH LAYOUT OPTIONS</p>
                            <p> Clean, organized grid - The clean, sharp lines and rigid layout of this design across a wide range of devices</p>
                        </div>
                    </div>

                    {/* section2 */}
                    <p className='fw-bold text-center mt-5 text-shadow-none'>Why Choose TeraTech Services</p>
                    <div className="col-12 d-flex flex-wrap">

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className="fw-bold p-0 m-0 text-shadow-none text-center text-md-start">DELIVERING SOLUTIONS</p>
                            <p className="text-start">It delivers intuitive web solutions loaded with features that surpass customer expectations.</p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className="fw-bold p-0 m-0 text-shadow-none text-center text-md-start">WE ARE FRIENDLY</p>
                            <p>Most of our clients have fun working with us. We make the web design process easy and pleasant. We speak in plain English, not techno-babble. And we love what we do for a living.
                            </p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className="fw-bold p-0 m-0 text-shadow-none text-center text-md-start">WE'RE HONEST</p>
                            <p>
                                Our business has grown word-of-mouth and we intend to continue growing this way. We'll treat you fairly and do a great job so that you'll want to continue working with us after your site has launched. And, we want you to tell all your friends and colleagues about us.
                            </p>
                        </div>

                        <div className="advantage col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content- flex-wrap flex-column">
                            <p className="fw-bold p-0 m-0 text-shadow-none text-center text-md-start">YOU'RE THE BOSS</p>
                            <p>We'll give you options and the tools and information to make good choices.
                                We'll give you our recommendations, but ultimately, every decision about your website is yours.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Website;
