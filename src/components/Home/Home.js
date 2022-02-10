import React from 'react';
import About from '../Article/About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Section/Menu/Menu';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Menu></Menu>
            <About></About>
            <Footer />
        </div>
    );
};

export default Home;