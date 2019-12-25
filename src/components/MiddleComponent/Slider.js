import React from 'react';
import Slider from "react-slick";
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG from '../../imgs/“.svg';
import ReviewImg from '../../imgs/ic-alert.svg';
import styled from 'styled-components';

const Wrapper =  styled.div`
    width: 100%;
`;

const Page = styled.div`
    width: 100%;
`;

export default class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <Wrapper className="reviews">
        <Slider {...settings}>
            <Page>
            <div className="rewiews-1">
                <img className="quotes" src={IMG} alt="IMG"></img>
                <p className="review-text">
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,<br/> quis nostrud exercitation.
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <img className="review-img" src={ReviewImg} alt="review-img"></img>
                <p className="rajeev-sethi">Rajeev Sethi</p>
                <h className="retired">Retired</h>
            </div>
            </Page>

            <Page>
            <div className="rewiews-2">
                <img className="quotes" src={IMG} alt="IMG"></img>
                <p className="review-text">
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,<br/> quis nostrud exercitation.
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <img className="review-img" src={ReviewImg} alt="review-img"></img>
                <p className="rajeev-sethi">Rajeev Sethi</p>
                <h className="retired">Retired</h>
            </div>
            </Page>

            <Page>
            <div className="rewiews-3">
                <img className="quotes" src={IMG} alt="IMG"></img>
                <p className="review-text">
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, <br/>quis nostrud exercitation.
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <img className="review-img" src={ReviewImg} alt="review-img"></img>
                <p className="rajeev-sethi">Rajeev Sethi</p>
                <h className="retired">Retired</h>
            </div>
            </Page>

            <Page>
            <div className="rewiews-4">
                <img className="quotes" src={IMG} alt="IMG"></img>
                <p className="review-text">
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,<br/> quis nostrud exercitation.
                This is a relevant testimonial, probably by an NRI.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <img className="review-img" src={ReviewImg} alt="review-img"></img>
                <p className="rajeev-sethi">Rajeev Sethi</p>
                <h className="retired">Retired</h>
            </div>
            </Page>
        </Slider>
        </Wrapper> 
    )
  }
}