import React from 'react';
import './MiddleComponent.css';
import Advisory from './Advisory';
import Overview from './Overview';

export default function MiddleComponent() {
    return (
        <div className="rectangle-7">
            <Advisory />
            <Overview />
        </div>
    )
}
