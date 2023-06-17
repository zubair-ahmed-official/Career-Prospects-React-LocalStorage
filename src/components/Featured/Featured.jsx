import React from 'react';
import './Featured.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Featured = ({ featuredjob }) => {
    const { id, company_logo } = featuredjob;
    return (
        <div>
            <div className='individualFeatures'>
                <img  style={{width: '120px', height: '40px'}} src={company_logo} alt=''></img>
                <h3>{featuredjob.job_title}</h3>
                <p>{featuredjob.company_name}</p><br></br>
                <span className='border'> {featuredjob.remote_or_onsite}</span>
                <span className='border'> {featuredjob.fulltime_parttime}</span><br></br><br></br>
                <p><FontAwesomeIcon icon={faLocationDot} /> {featuredjob.location} 
                <br></br><br></br>
                <span> <FontAwesomeIcon icon={faDollarSign} /> Salary: {featuredjob.salary}</span></p>
                <Link to={`/job/${id}`}><button className='btn-getStarted'>View Details</button></Link>
            </div>
        </div>

    );
};

export default Featured;