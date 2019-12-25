import React from 'react';
import './topComponent.css'
import LeftComponent from './leftComponent';
import RightComponent from './rightComponent';
import Signup from './Signup';


export default function TopComponent() {
    return (
        <div className="bg_imgs">
            <LeftComponent />
            <RightComponent />
            <Signup />
        </div>
    )
}
