import React from 'react'
import Carousel1 from '../imgs/Carousel1/Carousel1.PNG'
import Carousel2 from '../imgs/Carousel2/Carousel2.PNG'
import Carousel3 from '../imgs/Carousel3/Carousel3.PNG'

const data = [
    {
        title: "Launch of news portal",
        desc: " CloudFest is a world-leading conference geared towards the cloud, hosting and service provider industries. More than 6,500 of potential customers, peers",
        img: Carousel1
    },
    {
        title: "CloudIBN bags orders from Finance Sector",
        desc: "CloudFest is a world-leading conference geared towards the cloud, hosting and service provider industries. More than 6,500 of potential customers, peers",
        img: Carousel2
    },
    {
        title: "Launch of news portal",
        desc: "The companys cloud consultancy business has secured order worth USD 1 Mn in India from Gurgaon based BFSI. CloudIBN improvements security merit helps team to BAG such a big.",
        img: Carousel3
    },
    {
        title: "CloudIBN bags orders from Finance Sector",
        desc: "CloudFest is a world-leading conference geared towards the cloud, hosting and service provider industries. More than 6,500 of potential customers, peers",
        img: Carousel1
    },
    {
        title: "Launch of news portal",
        desc: "CloudFest is a world-leading conference geared towards the cloud, hosting and service provider industries. More than 6,500 of potential customers, peers",
        img: Carousel2
    },
]

const Blogs = () => {
    return (
        <div className="my-5 bg-body">
            <h1 className='text-center'>Recent Blog</h1>
            <div className="blogs_wrapper mt-5 pt-5 pb-3">
                {
                    data.map((card, index) => {
                        return <div className='col-12 col-sm-8 col-md-6 col-lg-4' key={index}>
                        <a href='#' className='text-decoration-none'>
                        <div className="blog rounded shadow-lg mx-3 p-3 py-2 blog" key={index}>
                        <img 
                        src={`https://source.unsplash.com/random/400x300?information technology?sign=${Math.random()}`} 
                        className="img-fluid" alt={card?.title}/>
                        <h1 className='fs-5 text-dark my-2'>{card?.title}</h1>
                        <p>{card?.desc}</p>
                    </div>
                    </a>
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default Blogs