import React from 'react';
import MailingList from '../MailingList/MailingList';
import SectionA from '../SectionA/SectionA';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <SectionA></SectionA>
            <MailingList></MailingList>
        </div>
    );
};

export default Home;