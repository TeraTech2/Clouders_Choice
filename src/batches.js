import React from 'react';
import './Pages_css/batches.css';

const Batch = () => {
    return (
        <div className='batch'>

            <h2>Select the best suited training for you</h2>

            <section className='one'>
                <h3> Self Paced Training </h3> <br></br>
                <h4> i) 60 Hrs E-Learning Videos</h4>
                <h4> ii) Lifetime Access</h4>
                <h4> iii) 24/7 Support</h4>
            </section>

            <br></br>

            <section className='two'>

                <section className='three'>
                    <h1>Course Price</h1>
                    <h1 style={{color:'red'}}>29500</h1>
                    <h1><del>59000</del></h1>
                    <h3> 50% off </h3>
                </section>

                <h3> Classroom training</h3> <br></br>
                <h6> (Only for Chennai)</h6>
                <input type="radio"></input> <h5>22nd march | Weekday (Classroom) | 10:00AM to 12:00PM</h5>  <br></br>
                <input type="radio"></input> <h5>1th april | Weekday (Classroom) | 07:00PM- 09:00PM</h5>  <br></br>
                <input type="radio"></input>  <h5>30th april | Weekday (online) | 07:00PM- 09:00PM</h5> <br></br>



            </section>

        </div>
    )
}

export default Batch;
