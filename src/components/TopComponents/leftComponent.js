import React from 'react';
import './leftComponent.css';
import Li1 from '../../imgs/li1.svg';
import Li2 from '../../imgs/li2.svg';
import Li3 from '../../imgs/li3.svg';
export default function LeftComponent() {
    
    return (
        <div className="left_component">
            <p className="easy-investing-for-n">Easy investing for NRIs</p>
            <p className="make-better-investme">Make better investments back home in India.</p>
            <ul className="stacked-group" style={{listStyle:'none'}}>
                <li className="personalised-advisor" 
                style={{display: 'block', paddingLeft: '50px', 
                paddingTop: '10px', backgroundImage:`url(${Li1})`, 
                backgroundRepeat: 'no-repeat', backgroundPosition: '0 2px', 
                marginBottom: '10px'}}>Personalised advisory services</li>

                <li className="paperless-proce"
                style={{display: 'block', paddingLeft: '50px', 
                paddingTop: '10px', backgroundImage:`url(${Li2})`, 
                backgroundRepeat: 'no-repeat', backgroundPosition: '0 2px', 
                marginBottom: '10px'}}>100% paperless process</li>

                <li className="support"
                style={{display: 'block', paddingLeft: '50px', 
                paddingTop: '10px', backgroundImage:`url(${Li3})`, 
                backgroundRepeat: 'no-repeat', backgroundPosition: '0 2px', 
                marginBottom: '10px'}}>24 x 7 support</li>
            </ul>
            
        </div>
    )
}
