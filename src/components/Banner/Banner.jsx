import React from 'react';
import './Banner.css';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Banner = () => {
    return (
        <div className='backgroundBanner'>
            <div className='banner'>
                <div>
                    <p className='closer'>One Step <br></br> Closer To Your <br></br>
                        <span style={{ color: 'rgb(126,144,254)' }}>Dream Job</span></p>
                    <p className='explore'>Explore thousands of job opportunities with all <br></br> the information you need. Its your future. Come find it. Manage all <br></br>your job application from start to finish.</p>
                    <button className='btn-getStarted'>Get Started</button>
                </div>
                <div>
                    {/* <img className='bannerImg' src='https://flic.kr/p/2osDSSC'></img> */}
                   <img className='bannerImg' src="https://i.ibb.co/fF4b40P/soybreno-84-p-RUq-9w-unsplash.jpg" width="800" height="729" alt="P3OLGJ1 copy 1" />
                </div>
            </div>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Banner;