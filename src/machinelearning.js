import React from 'react';
import './Pages_css/python_datascience.css';
import Feature from './Features.js';
import Projectml from './projects_for_ml.js';
import Certify from './certification.js';
import Batch from './batches.js';
import Testi from './testimonial.js';
import Curriculuml from './curriculum_for_ml.js';



const ML = () => {
    return (
        <div className="data machine_learning_wrapper">
            <div className='body'>
                <h1>MACHINE LEARNING WITH PYTHON ONLINE TRAINING</h1>
                
                <section className='content'>
                    <p>
                    Machine Learning training is designed to help you develop necessary skills that are vital to gain in-depth knowledge in supervised learning, unsupervised learning, machine learning algorithms, vector machines, and much more through real-time use cases and project-based learning. If you are an aspirant who wants to explore how a device can recognize patterns and messages from data, then machine learning with Python is an ideal start for you! We’ll prepare you to play with the army of powerful machine learning models to solve any problem.
                    </p>
                    <button> ENROLL NOW</button>
                </section>
            </div>

        <div className="machine_learning_body">
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


                <h2>Machine Learning with Python Certification Overview</h2>
                <p>
                The Machine Learning training by Codegnan has over 60 hours to ensure that you have the proper understanding of every concept before going to the next module. You will get acquainted with the requirement of product-based companies. The detailed overview on algorithms and techniques, such as regression, classification, time series modeling, supervised and unsupervised learning, SKLearn usage, statistical thinking, etc. Working on real-time case studies will make you understand the job aspect of a Machine Learning engineer. We assure you the great command in practicals along with theoretical concepts. So, get leveled up in Machine Learning in less investment! Your dream job is waiting for you!
                </p>
            </div>
            <Feature />
        <Batch />
        <Curriculuml/>
        <Certify title='Codegnan Certification for Machine Learning' head1='Machine Learning Certification' content1='Training on different technologies provided by Codegnan is a set of blended learning models that brings classroom learning experience with its world-class LMS. We understand the effort of students; thus, as a token of motivation, our training is honored by top leading industries like Microsoft and HP. After the successful completion of your Machine Learning course, you will be awarded Codegnan’s certification.' head2='Can I get a job with Machine Learning certification?' content2='We cant even imagine what will happen with the technology we will see in the coming years, but we know we already have a lack of skilled AI and machine-learning professionals. Only when we get people educated and put in the millions of AI jobs can the gap increase.' content3=' If you want to be one of those experts, get certified the sooner you start your training you will be working in this exciting and rapidly changing field.' />
        <Projectml />
        <Testi />
        </div>
        </div>
    )
}

export default ML;
