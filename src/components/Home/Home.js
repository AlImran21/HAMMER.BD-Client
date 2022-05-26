import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Clients from '../Clients/Clients';
import Reviews from '../Dashboard/Dashboard/Reviews';
import HomeProduct from '../HomeProduct/HomeProduct';
import Quality from '../Quality/Quality';

const Home = () => {
    return (
        <div>
           <Banner />
           <HomeProduct />
           <Quality />
           <Reviews />
           <BusinessSummary />
           <Clients />
        </div>
    );
};

export default Home;