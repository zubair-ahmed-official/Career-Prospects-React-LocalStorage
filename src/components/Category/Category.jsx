import React from 'react';
import './Category.css'
const Category = ({category}) => {
    const { category_logo } = category;
    return (
        <div className='cat'>
            <img className='logo' src={category_logo} alt=""></img>
            <h3>{category.category_name}</h3>
            <p className='jobsAvailable'>{category.jobs_available}</p>
        </div>
    );
};

export default Category;