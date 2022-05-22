import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import HomeProduct from '../HomeProduct/HomeProduct';
import Quality from '../Quality/Quality';

const Home = () => {
    return (
        <div>
           <Banner />
           <HomeProduct />
           <Quality />
           <Clients />
        </div>
    );
};

export default Home;