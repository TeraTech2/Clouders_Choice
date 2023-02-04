 import React from 'react';
import "../Pages_css/Services.css";
import img1 from "../Images/image1.jpg";
import img2 from "../Images/image2.jpg";
import img3 from "../Images/image3.png";
import img4 from "../Images/image4.jpg";
import img5 from "../Images/image5.jpg";
import img6 from "../Images/image6.jpg";

class Services extends React.Component {
render() {
    return (

    	    <div>
        <div className='service'>
            <div className="wrapper">
                <img src={img1} width="100%"></img>
                <p className="textwrap text-light">DEVOPS, CI/CD
                                    <br />CONSULTING COMPANY</p>
                <div className="line"></div><br />
                <p className='text-light' style={{textShadow:"1px 1px 1px black"}}> WE HELP BRANDS STAND OUT FROM THE CROWD AND SUCCEED
                                    <br />WITH OUR INNOVATIVE IDEAS AND TOP-NOTCH SERVICES.</p>
            </div>
        </div>

        <div className="about">
		<div className="row1">
            <img src={img2} width="100%"></img>

            		<div className="col1">
            			<h2>About Us</h2>
						<p>TeraTech Services enable clients through our Cloud consulting services: Assessment,
						design, strategies, plan and prototype (PoC). Services include: DevOps, IDC migration,
						Cloud strategy,Managed ERP application services, application optimisation and SAP services.
				 		We provide you with hands-on technical assistance deploying and migrating your environment.
				 		We help to setup and build hybrid environments, integrations, connectivity and configurations
				 		across the entire technology stack. Our qualified technical engineers provide 24/7 proactive
				 		support, management and monitoring to customers. In addition clients are assigned a dedicated Technical consultant,
						as your go-to-person for advice and continued Cloud strategy innovation and growth.</p>
					</div>

			<div className="col2">
			<h1>We are Cloud Computing, Devops,
								<br />Consulting Company</h1>
				<img src={img3}></img>
			</div>
        </div>
    </div>

    	 <div className="services">
        		<p className="txt">Services</p>
        		<div className="simage">
        		 	<img src={img6} width="100%"></img>
        		 	<div className="swrap1">
        		 		<h1>DEVOPS & CI/CD</h1>
							<p>Adopting a DevOps culture is absolutely essential for enterprises seeking success in the cloud.
                            DevOps enables you to continuously release new features and innovations, as well as deliver services and features
                            that can be created to offer specific functionality and benefits to a variety of deployment end points.</p>
					</div>
        		</div>
        		<div className="simage2">
        		 	<img src={img5} width="100%"></img>
        		 	<div className="swrap">
        		 	<h1>BUSINESS ANALYSIS</h1>
							<p>TeraTech Services has a team of skilled and experienced professionals in Business/System Analysis,
							Project Management and IT Project delivery. We enable our clients to identify and
							articulate their business need/problem or opportunity for a positive value added change and
							recommend...</p>
					</div>
        		</div>
                    <div className="simage">
                    <img src={img4} width="100%"></img>
                    <div className="swrap1">
                        <h1>QUALITY ASSURANCE</h1>
                            <p>There is no shortcut for success – Your Product must function PERFECT to SUCCEED
                            Continuous Improvement and making your
                            product defect free are the only parameters we believe in. Software products depend
                            on quality assurance...</p>
                    </div>
                </div>
        	</div>
     </div>
);
}
}


export default Services;
