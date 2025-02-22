import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImg from '../../images/hero.png';

const Hero = () => {
    return (
        <div className='hero_area main__header'>
            <div className='container main__header_container'>
                <div className='main__header_left'>
                    <h4>#30DaysToTransform</h4>
                    <h1>Join the Fitness Revolution!</h1>
                    <p>Step into a world where legends are made and goals are crushed. At GymFuel, we bring the energy, expertise, and community you need to achieve greatness.
                    </p>
                    <div className='hero_btn'>
                        <Link to='/plans' className='btn lg'>Get Started</Link>
                    </div>
                </div>
                <div className='main__header_right'>
                    <div className='main__header_circle'></div>
                    <div className='main__header_image'>
                        <img src={HeroImg} alt="Human"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;