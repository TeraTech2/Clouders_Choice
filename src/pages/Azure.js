import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import Azure1 from "../Images/Azure.png";

const GCP = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`azure_wrapper theme-${theme}`}>
            <h2>Microsoft Azure Cloud Services</h2>
            <div className='row1'>

                <div className='col1 col-12 col-md-5'>
                    <p>Microsoft Azure offers application life cycle and cloud maturity with innovative industry-proven solutions customized to meet the Enterprise Cloud Requirements.
                        Azure Service Offerings for Cloud-Native Development, Cloud Security, and Cloud Integration.
                    </p>
                    <ul>
                        <li>Cloud Architecture Selection</li>
                        <li>Cloud Solution and Platform Creation</li>
                        <li>Application Migration Plan</li>
                        <li>Continuous Integration and Continuous Delivery</li>
                        <li>Cloud Readiness Assessment</li>
                        <li>Data Migration Strategy Consulting</li>
                    </ul>
                </div>

                <div className='col2 col-12 col-md-6'>
                    <img src={Azure1} alt="Azure image"/>
                </div>

            </div>
        </div>
    );
}

export default GCP