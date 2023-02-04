import React, {useEffect, useRef } from 'react'
import "../Pages_css/Home.css";
import FutureScope from '../components/FutureScope';
import CloudServices from '../components/CloudServices';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion"

const Home = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {once:true});

    const variants = {
        visible:{opacity: [0.10, .20, 0.40, .60, .80, 1], transition:{delay:.2}},
        hidden:{opacity: 0}
    }

    useEffect(() => {
        if (inView) controls.start("visible")
    }, [inView])
    
    return (
        <div>
            <div className='service'>
                <div className="wrapper">
                    <motion.div className="content"
                        initial="hidden"
                        ref={ref}
                        animate={controls}
                        variants={variants}>
                        <p className="text-light fs-3">CLOUD MANAGED SERVICES</p>
                        <div className="line"></div><br />
                        <p className='text-light fs-5' style={{ textShadow: "1px 1px 1px black" }}> WE HELP BRANDS STAND OUT FROM THE CROWD AND SUCCEED
                            <br />WITH OUR INNOVATIVE IDEAS AND TOP-NOTCH SERVICES.</p>
                    </motion.div>
                </div>
            </div>

            <CloudServices />
            <FutureScope />
        </div>
    )
}

export default Home
