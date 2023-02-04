import React, { Component } from 'react';
import "../Pages_css/AWS.css";
import AWS1 from "../Images/AWS.jpg";

export default class AWS extends Component {
    render() {
        return (
        <div className='AWS'>
        	<h1>Amazon Web Services Cloud Solutions and Services</h1>

        	<div className='row1'>
        		<div className='col1'>

				<p>Amazon Web Services Solutions offers Cloud Consulting, Cloud Migrations, and Managed Services for 
				Cloud in AWS. Cloud Consulting Services offers experienced and AWS Certified experts with experience covering
				the entire AWS Architecture. Develop and Establish your approach, adopt technologies, execute your strategy, and
				enhance service quality with AWS Cloud Solutions.</p>
				<ul>
				<li>Application Migration Planning to AWS</li>
				<li>Automation For AWS Migration Processes</li>
				<li>Data Migration Services to AWS</li>
				<li>AWS Database Migration Services</li>
				<li>Fully automated framework migration and lifecycle administration</li>
				<li>Optimizing cloud enabled applications</li>
				</ul>


        		</div>

        		<div className='col2'>
        		<img src={AWS1} alt=""/>
        		</div>
        	</div>
        </div>



        	);
        }
    }
