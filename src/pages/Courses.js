import React from 'react';
import Searching from './search';

const Courses = () => {
    return(
        <div className='body'>
           <Searching />
            <h2>Courses</h2>
            <section className='set set1'>
                <div className='coursename'>
                    <a href="/Datascience" className='links'>Python for Data Science </a>
                </div>
                <div className='coursedetails'>

                    <h3>MTA Certification - Python for Data Science</h3>

                </div>
                <button className='view-button1'><a href="/Datascience">View Details</a> </button>
            </section>

            <section className='set set2'>
                <div className='coursename'>
                    <a href="/Python" className='links'>Python training in Vijayawada</a>
                </div>
                <div className='coursedetails'>
                    <h3>MTA Certification - Python for Data Science</h3>
                </div>
                <button className='view-button2'><a href="/Python">View Details</a> </button>
            </section>

            <section className='set set3'>
                <div className='coursename'>
                    <a href="/ML" className='links'>Machine learning with Python Certification</a>
                </div>
                <div className='coursedetails'>
                    <h3>Certification for Machine learning</h3>

                </div>
                <button className='view-button3'><a href="/ML">View Details</a> </button>
            </section>

            <section className='set set4'>
                <div className='coursename'>
                    <a href="/Web" className='links'>Web Development with Python Certification </a>
                </div>
                <div className='coursedetails'>
                    <h3>Certification for Django</h3>
                </div>
                <button className='view-button4'><a href="/Web">View Details</a> </button>
            </section>



        </div>

    )
}

export default Courses;
//box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
