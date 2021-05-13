import React from 'react';
import { Button } from '../Button/Button';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require('../../videos/video-1.mp4').default} autoPlay loop muted />
            <h1>Coco's Cupboard</h1>
            <p>Pet Food Pantry and Pet Rescue</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Who We Are
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='bi-play-circle bi-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;