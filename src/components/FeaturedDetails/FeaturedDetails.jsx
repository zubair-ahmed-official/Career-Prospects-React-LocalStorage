import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './FeaturedDeatails.css'
import '../Applied/Applied.css'
import Data from '../../../public/featuredjobs.json';
import { addToDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FeaturedDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    const data = Data.find(d => JSON.stringify(d.id) === id);
    if (data) {
      setData(data);
    }
  }, [id]);

  const [carts, setCart] = useState([]);

  const notify = () => toast("You have already applied for this job!");

  const btnCart = (product) => {

    let newCart = [];
    const exists = carts.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...carts, product]
    }
    else {
      notify();
      exists.quantity = exists.quantity + 1;
      const remaining = carts.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  }

  return (
    <div>
      <div className='Background'>
        <img className='VectorImg' src="https://live.staticflickr.com/65535/52810613113_3f7efb7e08_o.png" alt=''></img>

        <img className='Vector1Img' src="https://live.staticflickr.com/65535/52810358789_a006951236_o.png" alt=''></img>

        <h2 style={{ textAlign: 'center' }}>Job Details</h2></div>

      <div className='FeaturedDeatails'>
        <div className='descriptions'>
          <p><span style={{ color: 'black' }}><b>Jobs Description:</b></span> {data.job_description}</p>
          <p><span style={{ color: 'black' }}><b>Jobs Responsibility:</b></span>  {data.job_responsibility}</p>
          <p><span style={{ color: 'black' }}><b>Educational Requirements:</b></span>  {data.educational_requirements}</p>
          <p><span style={{ color: 'black' }}><b>Experience:</b></span>  {data.experiences}</p>
        </div>
        <div>
          <div className='jobsDetails'>
            <h3>Job Details </h3>
            <hr></hr>
            <p><FontAwesomeIcon className='fontColor' icon={faDollarSign} /> &nbsp;<b>Salary: </b>{data.salary}</p>
            <p><FontAwesomeIcon className='fontColor' icon={faCalendarDays} /> <b>Job Title: </b>{data.job_title}</p>

            <h3>Contact Information</h3>
            <hr></hr>
            <p><FontAwesomeIcon className='fontColor' icon={faPhone} /> <b>Phone: </b>{data.phone}</p>
            <p><FontAwesomeIcon className='fontColor' icon={faEnvelope} /> <b>Email: </b>{data.email}</p>
            <p><FontAwesomeIcon className='fontColor' icon={faLocationDot} /> &nbsp;<b>Address: </b>{data.location}</p>
          </div>
          <button className='btn-applyNow' onClick={() => btnCart(data)}>Apply Now</button><ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetails;