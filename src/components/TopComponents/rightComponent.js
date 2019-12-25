import React from 'react';
import './rightComponent.css';
import Triangle from '../../imgs/triangles.svg';


export default function RightComponent() {
    return (
        <div className="right_div">
            <img className="triangle" src={Triangle} alt="Guy" />
        </div>
    )
}
