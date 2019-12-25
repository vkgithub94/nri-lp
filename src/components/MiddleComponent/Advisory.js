import React from 'react';
import './Advisory.css';
import Chat from '../../imgs/chat.png';
import Chart from '../../imgs/img-zero-commissions.png';

export default function Advisory() {
    return (
        <div>
            <p className="save-more-worry-les">Save more. Worry less.</p>
            <p className="we-put-a-lot-into-ma">We put a lot into maximising your investment potential — <br />
            time-tested strategies, predictive technology, and instinct born from years of experience in the field.</p>

            <div className="top-div">
                <div className="left-dive2">
                    <p className="save-thousands-in-co">Save thousands in<br/> commissions.</p>
                    <p className="regular-mutual-funds">Regular mutual funds cost you 1% - 2% in commissions every year.
                     That sounds small, but it all adds up! Buy direct with Orowealth, and never pay commissions again.</p>
                </div>

                <div className="right-div2">
                    <img className="Commissions" src={Chart} alt="Chart"></img>
                </div>

                <div className="left-div3">
                    <img className="chat" src={Chat} alt="chat-head" />
                </div>

                <div className="right-div3">
                    <p className="get-guidance-from-yo">Get guidance from your own personal advisor.</p>
                    <p className="sometimes-you-need-t">Sometimes you need the comfort of having an actual human advisor you can trust. 
                    We get that. That’s why we offer you a dedicated advisor who understands your specific needs and tailors your investment plan accordingly.</p>
                </div>

            </div>
        </div>
    )
}
