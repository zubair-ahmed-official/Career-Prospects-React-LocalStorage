import React from 'react';
import './ReviewApplied.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const ReviewApplied = ({p}) => {
    const {id, job_title, company_name, remote_or_onsite, fulltime_parttime, company_logo, salary,location}= p;
    return (
        <div className='ReviewApplied'>
            <img src={company_logo} alt=''></img>
            <div>
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <span className='border2'>{remote_or_onsite}</span> &nbsp;
            <span className='border2'>{fulltime_parttime}</span>
            <p><FontAwesomeIcon icon={faLocationDot} /> {location} &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faDollarSign} />Salary: {salary}</p>
            </div>
            <div>
                <button className='btn-viewdetails'>View Details</button>
            </div>
        </div>
    );
};

export default ReviewApplied;