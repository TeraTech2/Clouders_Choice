import React, { useEffect, useRef } from 'react';
import { CloudServicesData } from '../content/CloudServicesContent';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion"
import { useOutletContext } from 'react-router-dom';

const CloudServices = () => {
    return (
        <div className="CloudServicesWrapper py-5 mx-auto">
            <h3 className='text-center'>Our Cloud Services</h3>

            <div className="row CloudServicesBody">
                {
                    CloudServicesData.map((service, i) => <CloudServicesItem key={i} service={service} animateX={i % 2 == 0 ? -100 : 100} />)
                }
            </div>
        </div>
    )
}
export default CloudServices




const CloudServicesItem = ({ service, animateX }) => {
    const { theme } = useOutletContext();

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    const variants = {
        visible: { x: [animateX, 0], opacity: [0.10, 0.15, 0.25, .30, .50, .75, 1], transition: { type: "spring", stiffness: 50 } },
    }

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView]);

    return <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="CloudServicesItem col-lg-6 d-md-flex align-items-start mx-auto my-5 mb-0">
        <div className='text-center text-md-start mb-5'>
            {service.img({ width: 100, fill: theme == "dark" ? "#e0e0e0" : "#000" })}
        </div>
        <div className="CloudServicesItemText mx-md-5 my-sm-3 text-center text-md-start">
            <h4 className='font-weight-bold mb-2'>{service.heading}</h4>
            <p>{service.desc}</p>
        </div>
    </motion.section>
}