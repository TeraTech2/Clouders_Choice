import cyber from "../Images/cyber-security.png";
import cloud from "../Images/cloud.png";
import netSuite from "../Images/netSuite.png";
import CloudConsulting from "../Images/svgs/CloudConsulting";
import CloudArchitecture from "../Images/svgs/CloudArchitecture";
import CloudHosting from "../Images/svgs/CloudHosting";
import CloudManage from "../Images/svgs/CloudManage";
import Office365 from "../Images/svgs/Office365";
import AppMig from "../Images/svgs/AppMig";

export const CloudServicesData = [
    {
        heading:"CLOUD CONSULTING",
        desc:"We will help you put together a business case for different cloud options, whether it be public, private or hybrid. We will work with you to develop a migration plan as well as identify applications that may need further optimisation before moving to the cloud.",
        img:<CloudConsulting width={100}/>
    },
    {
        heading:"CLOUD SOLUTION ARCHITECTURE",
        desc:"We will provide recommendations for cloud migration approaches to ensure a smooth transition as well as upskilling of your IT team.",
        img:<CloudArchitecture width={100}/>
    },
    {
        heading:"CLOUD HOSTING",
        desc:"We will help you setup your cloud environment whether that be on Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform or your own private cloud, all considering data sovereignty as a potential business concern.",
        img:<CloudHosting width={100}/>
    },
    {
        heading:"MANAGED CLOUD SERVICES",
        desc:"We will manage your cloud for you from applications, system monitoring, performance testing and database administration so that you can focus on your core business.",
        img:<CloudManage width={100}/>
    },
    {
        heading:"OFFICE 365 MIGRATIONS",
        desc:"We will safely manage your migration to Office 365 end-to-end, removing any risks or uncertainties you may have. Moving to Office 365 will provide your employees with email and calendar access from anywhere, whilst maintaining a secure environment that meets your company’s compliance needs. Once the migration has been successfully completed, we will provide post-migration training so that your IT team can confidently manage your new Office 365 environment.",
        img:<Office365 width={100}/>
    },
    {
        heading:"APPLICATION MIGRATION",
        desc:"We will review your current application architecture and provide recommendations to leverage cloud scalability and availability. We can then execute the full set of activities to fully migrate your application to the cloud, including ongoing running and maintenance.",
        img:<AppMig width={100}/>
    },
]