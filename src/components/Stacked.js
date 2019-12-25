import React from 'react';
import './Stacked.css';

export default function Stacked() {
    return (
        
        <div className="stacked-group1">
            <p className="its-personalised-f">It's personalised, fast and hassle-free.</p>
            <div className="line-4"></div>

            <div className="left-div1">
                <div className="circle-1">
                    <p className="one">1</p>
                    <p className="sign-up1">Sign up.</p>
                    <p className="your-name-and-conta">Your name, and contact details-- that's all we need to get started.</p>
                </div>
            </div>

            <div className="middle-div">
                <div className="circle-2">
                    <p className="two">2</p>
                    <p className="speak-to-an-expert">Speak to an expert.</p>
                    <p className="an-advisor-will-get">
                    An advisor will get in touch to understand your specific requirements and create a pesonalised investment plan for you.</p>
                </div>
            </div>

            <div className="right-div1">
                <div className="circle-3">
                    <p className="three">3</p>
                    <p className="start-investing">Start investing!</p>
                    <p className="well-create-an-acco">
                    We'll create an account for you right away, and let you know when it's time to invest.</p>
                </div>
            </div>

        </div>
    )
}
