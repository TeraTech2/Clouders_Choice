import React from 'react';
import ems1 from '../imgs/ems1/ems1.PNG'
import ems2 from '../imgs/ems2/ems2.PNG'
import ems3 from '../imgs/ems3/ems3.PNG'
import ems4 from '../imgs/ems4/ems4.PNG'
import ems5 from '../imgs/ems5/ems5.PNG'
import ems6 from '../imgs/ems6/ems6.PNG'

const data = [
    {
        title: "Emergency Call Support",
        desc: "Our dedicated team will identify and find the solution of any server issue over call.",
        img: ems1
    },
    {
        title: "Dedicated NOC Team",
        desc: "Our team of experienced professionals will be monitoring the state of infrastructure 24/7/365.",
        img: ems2
    },
    {
        title: "Highly Secured Infrastructure",
        desc: "Our extensive experience in the latest technologies and network security allows us to provide the most secure infrastructure.",
        img: ems3
    },
    {
        title: "100% Refund Policy",
        desc: "We are proud to provide the highest quality service and guarantee a complete refund, if you aren’t satisfied.",
        img: ems4
    },
    {
        title: "Min Response Time",
        desc: "No need to wait long for the response, we guarantee you will get the support in record time.",
        img: ems5
    },
    {
        title: "White Label Support",
        desc: "We value your reputation and we will be taking care of your customers as our own absolutely anonymously.",
        img: ems6
    },

];


const CloudBin = () => {
    return (
        <div className="row blogs_wrapper_container pt-5">
            <h1 className="fs-2 text-center">Why Clouders Choice?</h1>
            <h4 className="mt-3 px-md-5 px-1 fs-6 text-center"> IBN cloud management services make it easier to request, change, and support business services on premise, on demand, and from anywore</h4>
            <div className="blogs_wrapper py-5">
                {
                    data.map((card, index) => {
                        return <div className='col-12 col-sm-8 col-md-6 col-lg-4' key={index}>
                            <div className="blog rounded shadow-lg mx-3 p-3 blog" key={index}>
                                <img
                                    src={`https://source.unsplash.com/random/400x300?information technology?sign=${Math.random()}`}
                                    className="img-fluid" alt={card?.title} width="100%" />
                                <h1 className='fs-5 my-2'>{card?.title}</h1>
                                <p>{card?.desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CloudBin