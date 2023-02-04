import React, { useEffect, useRef } from 'react'
import "../Pages_css/Footer.css";
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion"

const Footer = () => {

  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const ref = useRef(null);
  const inView = useInView(ref);

  const ref1 = useRef(null);
  const inView1 = useInView(ref1, {once:true});

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, {once:true});

  const variants = {
    visible: { x: [-80, -50, -30, -10, 0], opacity: [0.20, 0.40, .60, .80, 1], transition: { type: "spring", stiffness: 100 } },
    "hidden": { x: [0], opacity: 0 }
  }
  const variants1 = {
    visible: { x: [80, 50, 30, 10, 0], opacity: [0.20, 0.40, .60, .80, 1], transition: { type: "spring", stiffness: 100 } },
    "hidden": { x: [0], opacity: 0 }
  }
  const variants2 = {
    visible: { opacity: [.10, .20, .40, .60, .80, 1], transition: {delay:.2} },
    "hidden": { opacity: 0 }
  }

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
  }, [inView, inView1, inView2]);

  return (
    <>
      <footer className="page-footer font-small mdb-color py-2">
        <div className="container text-center text-md-left">

          <div className="row text-center text-md-left mt-3 pb-3">
            <hr className="w-100 clearfix d-md-none"></hr>

            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>
                <NavLink to="/Consulting">Consulting</NavLink>
              </p>
              <p>
                <NavLink to="/Webdevelopment">Web Development</NavLink>
              </p>
              <p>
                <NavLink to="/MobileAppDevelopment">Mobile App Development</NavLink>
              </p>
            </motion.div>

            <hr className="w-100 clearfix d-md-none"></hr>

            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls2}
              variants={variants2} 
              className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Technologies</h6>
              <p>
                <NavLink to="/MicrosoftAzure">Microsoft Azure</NavLink>
              </p>
              <p>
                <NavLink to="/AmazonWebServices">Amazon Web Services</NavLink>
              </p>
              <p>
                <NavLink to="/GoogleCloudPlatform">Google Cloud Platform</NavLink>
              </p>
              <p>
                <NavLink to="/Office365">Office 365</NavLink>
              </p>
            </motion.div>

            <hr className="w-100 clearfix d-md-none"></hr>


            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls1}
              variants={variants1}
              className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="bi bi-geo-alt-fill"></i> Chennai, India</p>
              <p className="change">
                <i className="bi bi-envelope-fill"></i> support@teratechservices.com </p>
              <p>
                <i className="bi bi-telephone-fill"></i> + 91 8667239438</p>
            </motion.div>
          </div>

          <hr></hr>

          <div className="row d-flex align-items-center">

            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">© 2022 Copyright:
                <NavLink to="/">
                  <strong> TeraTechServices.com</strong>
                </NavLink>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <NavLink className="btn-floating btn-md rgba-white-slight mx-1" to={""}>
                      <i className="bi bi-facebook"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="btn-floating btn-md rgba-white-slight mx-1" to={""}>
                      <i className="bi bi-twitter"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="btn-floating btn-md rgba-white-slight mx-1" to={""}>
                      <i className="bi bi-google"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="btn-floating btn-md rgba-white-slight mx-1" to={""}>
                      <i className="bi bi-linkedin"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer