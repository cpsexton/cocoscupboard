import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../../images/img-9.jpg').default}
                            text='Check out this crazy shit'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={require('../../images/img-8.jpg').default}
                            text='Check out this even crazier shit'
                            label='Adopt'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default Cards;