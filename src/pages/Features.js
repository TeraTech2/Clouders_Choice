import React from 'react';
import certification from '../Images/certification.jpg';
import exercises from '../Images/exercises.jpg';
import schedule from '../Images/flexible-schedule.jpg';
import instructor from '../Images/instructor-led.jpg';
import support from '../Images/support.jpg';
import selfpace from '../Images/self-pace-video.jpg';
import upgrade from '../Images/upgrade.jpg';

const Feature = () => {
    return (
        <div className='KeyFeatures'>

            <h1>KeyFeatures</h1>
            <section>
                <img src={certification} alt=''></img>
                <h5>Certification & Job Assistance</h5>
            </section>
            <section>
                <img src={exercises} alt=''></img>
                <h5> Exercises & Projects </h5>
            </section>
            <section>
                <img src={upgrade} alt=''></img>
                <h5>Lifetime Access & Upgrade </h5>
            </section>
            <section>
                <img src={selfpace} alt=''></img>
                <h5>Self-Paced Videos </h5>
            </section>
            <section>
                <img src={selfpace} alt=''></img>
                <h5>Self-Paced Videos </h5>
            </section>
            <section>
                <img src={schedule} alt=''></img>
                <h5> Flexible Schedule</h5>
            </section>
            <section>
                <img src={instructor} alt=''></img>
                <h5>200 Hours Instructor Led Training </h5>
            </section>
            <section>
                <img src={support} alt=''></img>
                <h5> 24/7 Lifetime Support</h5>
            </section>
        
        </div >
    )
}

export default Feature;
