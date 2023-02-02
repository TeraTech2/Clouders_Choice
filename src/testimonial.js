import React from 'react';
import './Pages_css/testimonial.css';
import google from './Images/google.png';
import face from './Images/facebook.png';
import jd from './Images/justdial.png';

const Testi = () => {
    return (
        <div className='Test'>
            <h2> Student Testimonials</h2>
            <section>
                <img src={google}></img> <h4>850+ Positive <br></br> Reviews on Google</h4>
            </section>
            <section>
                <img src={face}></img> <h4>500+ Positive <br></br> Reviews on Facebook</h4>
            </section>
            <section>
                <img src={jd}></img>   <h4>500+ Positive <br></br> Reviews on JustDial</h4>
            </section>

        </div>
    )

}
export default Testi;

