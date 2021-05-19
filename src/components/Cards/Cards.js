import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Coco's Cupboard Inc. is run by volunteers and funded by donations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../../images/img-2.jpg').default}
                            text='Open your home and help by fostering'
                            label='Foster'
                            path='/services'
                        />
                        <CardItem
                            src={require('../../images/img-1.jpg').default}
                            text='Adopt a new best friend today!'
                            label='Adopt'
                            path='/services'
                        />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../../images/img-3.jpg').default}
                            text='More ways to help'
                            label='Foster'
                            path='/services'
                        />
                        <CardItem
                            src={require('../../images/img-2.jpg').default}
                            text='More ways to help out'
                            label='Adopt'
                            path='/services'
                        />
                        <CardItem
                            src={require('../../images/img-3.jpg').default}
                            text='Even more ways you can help today'
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