import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewApplied from '../ReviewApplied/ReviewApplied';
import './Applied.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Applied = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)


    // const [filter, setFilter] = useState(false);

    const [all, setAll] = useState(true);
    const [remote, setRemote] = useState(false);
    const [onsite, setOnsite] = useState(false);

    const showAll = () => {
        setRemote(false);
        setOnsite(false);
        setAll(true);
        console.log("remote")
    };

    const showRemote = () => {
        setRemote(false);
        setOnsite(true);
        setAll(false);
        console.log("remote")
    };

    const showOnsite = () => {
        setOnsite(false);
        setRemote(true);
        setAll(false);
        console.log("onsite")
    };
    const remoteJobs = cart.filter(r => r.remote_or_onsite === 'Remote');
    const onsiteJobs = cart.filter(o => o.remote_or_onsite === 'Onsite');
    
    return (
        <div >
           
           <div className='BackgroundApplied'> 
           <img className='VectorImg' src="https://live.staticflickr.com/65535/52810613113_3f7efb7e08_o.png" alt=''></img>
           
           <img className='Vector1Img' src="https://live.staticflickr.com/65535/52810358789_a006951236_o.png" alt=''></img>


           <h2 style={{ textAlign: "center" }}> Applied Jobs </h2></div>

            <div className='Applied'>
                <div className='filterBy'>
                <button className='selectRemote' onClick={() => showRemote(cart)}>Remote</button>
                <button className='selectOnsite' onClick={() => showOnsite(cart)}>Onsite</button><button className='selectfilterBy' onClick={() => showAll(cart)}>Filter By (All) <FontAwesomeIcon icon={faChevronDown} /></button></div>
                
                {all &&
                    cart.map(p =>
                        <ReviewApplied
                            key={p.id}
                            p={p}>
                        </ReviewApplied>
                    ) || !remote &&
                    remoteJobs.map(p =>
                        <ReviewApplied
                            key={p.id}
                            p={p}>
                        </ReviewApplied>
                    ) || !onsite &&
                    onsiteJobs.map(p =>
                        <ReviewApplied
                            key={p.id}
                            p={p}>
                        </ReviewApplied>
                    )

                }
            </div>
        </div>
    );
};

export default Applied;