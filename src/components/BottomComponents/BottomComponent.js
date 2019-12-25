import React from 'react';
import './BottomComponent.css';
import Signup from '../TopComponents/Signup';
import Footer from './Footer';

export default function GetStarted() {
    return (
        <div className="get-started2">
            <p className="get-started-today">Get started today.</p>
            <p className="signup-2"><Signup /></p>
            <Footer />
        </div>
        
    )
}
