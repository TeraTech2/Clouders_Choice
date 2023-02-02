import React, { useEffect, useRef } from 'react';
import "./Pages_css/FutureScope.css";
import brand1 from "./Images/Brands/AWS.png";
import brand2 from "./Images/Brands/Azure.png";
import brand3 from "./Images/Brands/Devops.png";
import brand4 from "./Images/Brands/Docker.png";
import brand5 from "./Images/Brands/GCP.jpg";
import brand6 from "./Images/Brands/kubernetes.png";
import brand7 from "./Images/Brands/M365.png";
import brand8 from "./Images/Brands/SharePoint.png";
import brand9 from "./Images/Brands/SQL_Server.png";
import brand10 from "./Images/Brands/Terraform.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion"

export const brandLogos = {
    AWS: brand1,
    Azure: brand2,
    Devops: brand3,
    Docker: brand4,
    GCP: brand5,
    SQL_Server: brand9,
    kubernetes: brand6,
    M365: brand7,
    SharePoint: brand8,
    Terraform: brand10,
}

const FutureScope = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    const variants = {
        visible: {
            opacity: [0.10, 0.15, 0.25, .30, .50, .75, 1],
            scale: [.20, .40, .60, .80, 1],
            transition: { type: "tween", duration: .6 }
        },
        hidden: { opacity: 0, scale: 0, transition: 0 }
    }

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <div className='container-fluid my-5 mx-auto FutureScope'>
            <h2 className='text-center'>Our Support Scope</h2>
            <div className="row d-flex align-items-center justify-content-center">
                {
                    Object.keys(brandLogos).map(brand => {
                        return (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={variants}
                                className="brandImgDiv mt-5" key={brand}>
                                <motion.img whileHover={{ scale: 1.1 }} src={brandLogos[brand]} alt={brand} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FutureScope