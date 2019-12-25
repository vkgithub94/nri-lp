import React from 'react';
import './Overview.css';
import SimpleSlider from './Slider';

export default function Overview() {
    return (
        <div className="testimonial-bg-lines">

            <div className="number">
                <p className="₹-500-cr">₹ 500Cr+</p>
                <h className="invested">INVESTED</h>

                <p className="₹-6-cr">₹ 6Cr+</p>
                <h className="commissions-saved">COMMISSIONS SAVED</h>

                <p className="t-20-k">20K+</p>
                <h className="users">USERS</h>
            </div>
            
              <SimpleSlider /> 
        
        </div>
    )
}