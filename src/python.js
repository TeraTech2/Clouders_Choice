import React from 'react';
import './Pages_css/python_datascience.css';
import Feature from './Features.js';
import Projectpy from './projects_for_py.js';
import Certify from './certification.js';
import Batch from './batches.js';
import Testi from './testimonial.js';
import Curriculupy from './curriculum_for_py';



const Python = () => {
    return (
        <div className="data">
            <div className='body p-5'>
                <h1>Python Training Course in Vijayawada</h1>
                <h3> ***** (5.0/5) 145+ Students Enrolled</h3>
                <section className='content'>
                    <p>
                    Python is increasingly the most chosen language in the IT ecosystem. It is probably the richest language because of the collection of cool libraries that are written for almost everything. Python training with TeraTech will provide you with learning usage of NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more! If you are looking to enrich your career growth in IT then choosing Python will be the best decision for you. Python certification is the most sought after skill in the whole era of software programming languages. As the demand for Python programming language is increasing so rapidly, it will soon become the Next Must-Have skill for every person in the software industry.
                    </p>
                    <button> ENROLL NOW</button>
                </section>
            </div>

            <div className='wrapper_div'>
            <div className='list'>
                <li>Overview</li>
                <li>Key Features</li>
                <li>Upcoming Batches</li>
                <li>Curriculum</li>
                <li>Projects</li>
                <li>Certification</li>
                <li>Testimonials </li>
            </div>

            <div className='overview'>

                <aside className='booking'>
                    <h3> HAVE MORE QUESTIONS ?</h3>
                    <input type="text" placeholder='Name'></input> <br></br>
                    <input type="text" placeholder='Email'></input> <br></br>
                    <input placeholder='Phone Number'></input> <br></br>
                    <input type="submit" value="Book your Call"></input>
                </aside>


                <h2>Python Training in Vijayawada Overview</h2>
                <p>
                Python programming language training main objective for the student is to develop primary programming skills up to the higher end to solve the different programming logic. A student can able to write a different type of logic at the end of the sessions. After learning python programming language course, the student can able to build web applications, database access and data analysis. After completing the python training, a student can able to attend any MNC Company interview and can solve the technical rounds both theoretically and practically. A student can able to build web pages and host in cloud servers which can be accessible by anyone in the world.
                </p>
            </div>
            <Feature />
        <Batch />
        <Curriculupy/>
        <Certify title='MTA Certification - Python for Data Science' head1='Python for Data Science Certification' content1='Training on different technologies provided by TeraTech is a set of blended learning models that brings classroom learning experience with its world-class LMS. We understand the effort of students; thus, as a token of motivation, our training is honored by top leading industries like Microsoft and HP. After the successful completion of your Python certification course, you will be awarded Microsoft MTA certification.' head2='Can I get a job with Python for Data Science certification?' content2='Python has emerged as the standard language and has been called the "Next Big Thing" and a "Must" for Professionals. It is quite impressive that 41 top organizations in the world have adopted Python as their primary programming language in a very small span of time. Some of the big players like Quora, Facebook, YouTube, SlideShare, Dropbox, Pinterest, Reddit, and Netflix have most of their new code written in Python.' content3='It is an open secret in the developer world that Google has now adopted Python as its secondary coding language, and has committed to using it more in its new product offerings. With Python, you will have an open door for various career prospects like Software Engineer Python Developer Research Analyst Data Analyst Data Scientist Software Developer.' />
        <Projectpy />
        <Testi />
        </div>
        </div>
    )
}

export default Python;

