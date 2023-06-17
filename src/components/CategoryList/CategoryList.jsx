import React from 'react';
import './CategoryList.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const CategoryList = () => {
    const categories = useLoaderData();
    return (
        <div className='categoryList'>
            <h1 className='jobs'>Job Category List</h1>
            <p className='joblistExplore'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='categories'>
            {
                categories.map(category =>
                    
                        <Category key={category.id}
                        category={category}></Category>
                    )
            }
            </div>
        </div>
    );
};

export default CategoryList;