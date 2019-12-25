import React from 'react';
import './Footer.css';
import ET from '../../imgs/logo-et.png';
import LM from '../../imgs/logo-mint.png';
import NDTV from '../../imgs/logo-ndtv.png';
import BL from '../../imgs/logo-bl.png';
import BW from '../../imgs/logo-bw.png';
import BS from '../../imgs/logo-bs.png';

export default function Footer() {
    return (
        <div className="featured">
            <p className="featured-in">— FEATURED IN —</p>

            <div className="featured-channel">
            <img className="eco-times" src={ET} alt="ET"/>
            <img className="Lmint" src={LM} alt="mint"/>
            <img className="ndtv" src={NDTV} alt="ndtv"/>
            <img className="bl" src={BL} alt="bl"/>
            <img className="logo-bw" src={BW} alt="logo-bw"/>
            <img className="bs" src={BS} alt="bs"/>
            </div>

            <div className="contact">
                <div className="stay-informed">
                    <p className="stayInformed">STAY INFORMED</p>
                    <a href="https://www.orowealth.com/insights/"><p className="insights">Insights</p></a>
                    <a href="https://www.orowealth.com/insights/blog/mutual-fund-guide-for-beginners/"><p className="insights">Investor Education Program</p></a>
                </div>

                <div className="get-touch">
                    <p className="get-in-touch">GET IN TOUCH</p>
                    <i className="fas fa-phone-alt">{`  `}+91{` `}987{` `}654{` `}3210</i>
                    <i class="fas fa-envelope">{`   `}connect@orowealth.com</i><br/><br/>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                </div>

                <div className="get-app">
                <p className="get-the-app">GET THE APP</p>
                <i class="fab fa-apple">{`  `}Get it on iOS</i>
                <i class="fab fa-android">{`  `}Get it on Android</i>
                </div>

            </div>

        </div>

        
    )
}
