import React from 'react';
import Carousel from './carousel';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            
            <Carousel />
            
            <div className="artist_name">
                <div className="wrapper">
                    Arianna Grande
                </div>
            </div>
        </div>
    );
};

export default Featured;