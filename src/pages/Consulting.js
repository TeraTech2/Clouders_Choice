import React, { Component } from "react";
import BlogTemplete from "../components/BlogTemplete"
import HomeServices from "../components/HomeServices";

const consultingData = {
	introHeading: "Cloud Consulting Services includes",
	intro: "Our experts help organizations learn to utilize cloud products and services tailored specifically to individual needs ranging from infrastructure design, implementation and managed services.",
	data: [{
		title: "Cloud Migrations",
		desc: "Our Cloud Consultants will assess your existing infrastructure to get an understanding of the nuances of your current stack and create a customized design and strategy to implement your cloud migration",
	},
	{
		title: "Cloud Infrastructure Design & Strategy",
		desc: "Our Cloud Infrastructure Design & Strategy Engineers use proven design patterns to ensure we are creating an infrastructure that can easily be maintained, is scalable and secure to meet the demands of your organization. We will design your infrastructure to be 100% codified & automated, making it less error prone, more reliable and stable."
	},
	{
		title: "Universal Scalability",
		desc: "Cloud computing lets you scale globally, on-demand. We architect your infrastructure for high-availability and improved overall performance, offering intrinsic flexibility throughout any enterprise life-cycle.",
	},
	{
		title: "Multi-platform Operations",
		desc: "We can build your infrastructure using a hybrid approach of seamless connectivity between your internal data centers and your Virtual Private Cloud (VPC) for sending data upstream, downstream or both.",
	},
	{
		title: "Uninterrupted Operations",
		desc: "Uptime is of the utmost importance, so we make sure to build out your infrastructure to be self healing. We try to foresee problems before they happen by implementing proper monitoring, introspection and telemetry for a total holistic view of your cloud infrastructure.",
	},
	{
		title: "Security First",
		desc: "From the start we build out a new cloud infrastructure with security in mind, following the principle of least privilege. In doing so we ensure your infrastructure is secure from external threats but also internal threats like careless engineers deleting something they shouldn’t.",
	},
	{
		title: "Cloud Cost Optimization and Cost Management",
		desc: "Cost Management is a must when utilizing the cloud because if your organization isn’t following the right patterns or paying attention, your cloud costs can easily get out of control. With a cost optimization audit of your infrastructure and implementation, we could help you save an estimated 30%-40% per year.",
	}],
}



export default class Consulting extends Component {
	render() {
		return (
			<>
				<BlogTemplete BlogData={consultingData} className={"Consulting"} />
				<HomeServices />
			</>
		);
	}
}
