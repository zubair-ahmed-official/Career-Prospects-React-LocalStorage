import React, { useEffect, useState } from 'react';
import '../CategoryList/CategoryList.css'
import { useLoaderData, useNavigation } from 'react-router-dom';
import Featured from '../Featured/Featured';
import '../Featured/Featured.css'
import './FeaturedJobs.css'
import NotFound from '../NotFound/NotFound';
const FeaturedJobs = () => {
    const [jobs, setState] = useState([]);
    useEffect(() => {
        fetch('featuredjobs.json')
            .then(resp => resp.json())
            .then(data => setState(data))
    }, [])
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleShowLess = () => {
        setShowMore(false);
    };
    const navigateLoading = useNavigation();
    return (
        <div>
            <h1 className='jobs'>Featured Jobs</h1>
            <p className='joblistExplore'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className='featured'>
            {navigateLoading.state === 'loading' && <NotFound></NotFound>}
                {
                    !showMore && jobs.slice(0, 4).map(featuredjob =>
                        <Featured key={featuredjob.id}
                            featuredjob={featuredjob} />

                    ) || showMore && jobs.map(featuredjob =>
                        <Featured key={featuredjob.id}
                            featuredjob={featuredjob} />
                    )
                }

            </div>
            {
                !showMore && <button className='btn-handleShowMore' onClick={handleShowMore}>See All Jobs</button> ||

                showMore && <button className='btn-handleShowMore' onClick={handleShowLess}>See Less</button>
            }

        </div>
    );
};

export default FeaturedJobs;