import React, { Component } from 'react';
import "./Pages_css/Azure.css";
import Azure1 from "./Images/Azure.jpg";

export default class GCP extends Component {
    render() {
        return (
        <div className='Azure'>

            <h1>Microsoft Azure Cloud Services</h1>
        	<div className='row1'>
        		<div className='col1'>

                <p>Microsoft Azure offers application life cycle and cloud maturity with innovative industry-proven solutions 
                customized to meet the Enterprise Cloud Requirements. 
                Azure Service Offerings for Cloud-Native Development, Cloud Security, and Cloud Integration.</p>
                <ul>
                <li>Cloud Architecture Selection</li>
                <li>Cloud Solution and Platform Creation</li>
                <li>Application Migration Plan</li>
                <li>Continuous Integration and Continuous Delivery</li>
                <li>Cloud Readiness Assessment</li>
                <li>Data Migration Strategy Consulting</li>

                </ul>
        		
        		</div>
        		<div className='col2'>
                <img src={Azure1} alt=""/>
        		</div>
        	</div>
        </div>



        	);
        }
    }

