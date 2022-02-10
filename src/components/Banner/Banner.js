import React from 'react';
import './Banner.css'
import '@fontsource/roboto/';
import Typography from '@mui/material/Typography';
import bannerimg from '../../resources/bannerbackground.png'
import img from '../../resources/croppedbannerimg.png'


const Banner = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <Typography variant="h3" component="h3" sx={{ fontSize: '2.9rem' }}>
                        Best food waiting for your belly
                    </Typography>
                    <div className="input-group" style={{ maxWidth: "500px", marginLeft: "110px", marginTop: '30px', }}>
                        <input type="search" className="form-control rounded rounded-pill" placeholder="Search food items" aria-label="Search"
                            aria-describedby="search-addon" />
                        <button type="button" className="btn btn-danger rounded-pill px-4" style={{ right: '70px' }}>Search</button>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Banner;