import React from 'react';
import './Pages_css/python_datascience.css';
import Feature from './Features.js';
import Projectweb from './projects_for_web.js';
import Certify from './certification.js';
import Batch from './batches.js';
import Testi from './testimonial.js';
import Curriculuweb from './curriculum_for_web.js';



const Web = () => {
    return (
        <div className="data webdev_wrapper">
            <div className='body'>
                <h1>WEB DEVELOPMENT WITH PYTHON AND DJANGO TRAINING</h1>
                <h3> ***** (5.0/5) 380+ Students Enrolled</h3>
                <section className='content'>
                    <p>
                    Web development with Python is prominent because of the quick development of web applications using Django. The training will let you learn learn to get up and running with Django and you will walk through creating a brand-new Django project, defining a data model and fields, querying the database, and using the framework's built-in URL handlers, views, and templates to structure the rest of the back end. Django training at TeraTech will help you learn valuable skills to build your resume or advance in your existing job.
                    </p>
                    <button> ENROLL NOW</button>
                </section>
            </div>

            <div className="webdev_wrapper_body">
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


                <h2>Web Development with Python Certification Overview</h2>
                <p>
                Web development with Python and Django training prepares you for all that you need to develop web applications from scratch to the finish in the least possible time. The training is ideal for all those who have foundation-level knowledge of programming. We’ll walk through the concepts from installation of Python, selection and looping statements, OOPs, installation of Django, Django models, forms, CRUD application, Django REST framework, Django deployment on the cloud, Django DIV application, etc. As web development with Python is on the rise, and this field is booming, many people are opting to change their profession to achieve more success.
                </p>
            </div>
            <Feature />
        <Batch />
        <Curriculuweb/>
        <Certify title='TeraTech Certification for Django' head1='Is TeraTech Certification Worth it?' content1='Django training is ideal for all those who have some basic programming knowledge. The web development training will help all those web developers looking to expand their current set of skills, for those pursuing to be a web developer and even those who wish to change their career path. As web development with Python is on the rise, and this field is booming, many people are opting to change their profession to achieve more success. With Natural Language Processing, you can become a Data Scientist, Natural Language Journalist, Machine Learning Consultant, Artificial Intelligence expert, Software Engineer, Business intelligence Professional, or much more.'/>
        <Projectweb />
        <Testi />
        </div>
        </div>
    )
}

export default Web;

