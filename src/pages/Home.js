import React, {useContext, useEffect, useRef } from 'react';
import FutureScope from '../components/FutureScope';
import CloudServices from '../components/CloudServices';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { ThemeContext } from '../context/Theme';

const Home = () => {
    const {theme} = useContext(ThemeContext);

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
        <div className={`homePage theme-${theme}`}>
            <div className='service'>
                <div className="wrapper">
                    <motion.div className="content"
                        initial="hidden"
                        ref={ref}
                        animate={controls}
                        variants={variants}>
                        <p className="fs-3">CLOUD MANAGED SERVICES</p>
                        <div className="line"></div><br />
                        <p className='fs-5'> WE HELP BRANDS STAND OUT FROM THE CROWD AND SUCCEED
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
