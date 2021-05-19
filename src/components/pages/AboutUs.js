import React from 'react';
import CardItem from '../Cards/CardItem';
import './AboutUs.css';
// import '../../App.css';

function AboutUs() {
    return (
        <>
            <h5 className='about-us'>About Us</h5>
            <div className='cards'>
                <div className='about-text-container'>
                <h1>Our volunteers donate their time and money every day</h1>
                <h3>Our Commitment: We are here to stem the tide of abandoned dogs and cats in the southern crescent of Atlanta.  We will fight for every animal in need, and we will work tirelessly to prevent future unwanted litters, surrenders and abandonments.  That is our commitment.</h3>
                <h3>We offer a low cost spay / neuter program and pet food pantry for those in need.  We have limited space for fosters and welcome new foster homes!</h3>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={require('../../images/img-8.jpg').default}
                                text="Suzanne is a firm believer that proper training is the key to creating a harmonious human/k9 relationship. Also, that a large amount of the homeless pet population is a direct result of lack of training, both owners and pets. She has bred, raised, and trained dogs for 20+ years. Several years ago, she left a hectic professional career in transportation to work with dogs full time. She currently manages a dog daycare facility, as well as owns TAO K9 Unleashed Dog Training. Suzanne is one of the founders of Coco's and was nominated president in Sept 2012"
                                label='Suzanne Aaron, President'
                                path='/'
                            />

                        </ul>
                    </div>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={require('../../images/img-9.jpg').default}
                                text="Kathy is an avid pet protector and has been active in the community helping strays for years. Despite her hectic nursing career, she always makes time to help neighbors and others in the community. Kathy was involved with Coco's from inception and graciously accepted the role of Treasurer in Sept 2012."
                                label='Kathy Addis, Treasurer'
                                path='/'
                            />
                        </ul>
                    </div>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={require('../../images/img-8.jpg').default}
                                text="Jayne is a Pike County school teacher who is also an animal activist. In addition to being a Coco's volunteer, we asked her in September 2012 to handle our public speaking engagements and she is heading up the committee to work with Pike County Commissioners on the animal control agenda. "
                                label='Jayne Midura, Board Member'
                                path='/'
                            />
                        </ul>
                    </div>
                </div>
            </div>

        </>




    );
}

export default AboutUs;