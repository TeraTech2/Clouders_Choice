import React, { Component } from 'react';
import "../Pages_css/GCP.css";
import GCP1 from "../Images/GCP.jpg";

export default class GCP extends Component {
    render() {
        return (
        <div className='GCP'>

            <h1>Google Cloud Consulting, Cloud Migrations, and Managed Services Solutions</h1>
        	<div className='row1'>
        		<div className='col1'>

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
        		<div className='col2'>
                <img src={GCP1} alt=""/>
        		</div>
        	</div>
                    </div>



        	);
        }
    }

