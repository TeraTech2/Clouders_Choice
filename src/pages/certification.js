import React from 'react';
import '../Pages_css/certification.css';

const Certify = (props) => {
    return (
        <div className='certification'>

            <h3>Certification In This Program</h3>

            <div className='contents'>
                <h3>{props.title}</h3>
                <h4>{props.head1}</h4>
                <p>{props.content1}</p>
                <h4>{props.head2}</h4>
                <p>{props.content2}</p>
                <p>{props.content3}</p>
            </div>
           
        </div>
    )
}

export default Certify;
