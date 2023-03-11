import React, { useContext } from 'react';
import GCP1 from "../Images/GCP.png";
import { ThemeContext } from '../context/Theme';

const GCP = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`gcp_wrapper theme-${theme}`}>

            <h3>Google Cloud Consulting, Cloud Migrations, and Managed Services Solutions</h3>
            <div className='row1'>
                <div className='col1 col-12 col-md-5'>

                    <p>Google enables an endless number of possibilities to manage, analyze, utilize your data with Google Cloud Platform
                        customized to meet your unique business needs. Ensure smooth transition as well as quality and performance application with
                        Google Cloud Platform. It helps retain control of continuous deployment onto platforms by combining cloud automation tools with
                        chosen development methods and boosts your time to market.
                        Discover all the possibilities that GCP brings in its growing collection of cloud services.</p>
                    <ul>
                        <li>Cloud Architecture Selection</li>
                        <li>Cloud Solution and Platform Creation</li>
                        <li>Application Migration Plan</li>
                        <li>Continuous Integration and Continuous Delivery</li>
                        <li>Cloud Readiness Assessment</li>
                        <li>Monitoring, Maintenance and 24×7 Support</li>
                    </ul>
                </div>
                <div className='col2 col-12 col-md-5'>
                    <img src={GCP1} alt="GCP image" />
                </div>
            </div>
        </div>



    );
}
export default GCP
