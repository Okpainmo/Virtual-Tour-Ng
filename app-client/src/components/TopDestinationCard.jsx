import React from 'react';
import DemoImage from '../assets/images/destination.jpg';
import { Link } from 'react-router-dom';

function TopDestinationCard() {
  const destinationId = 'obudu-cattle-ranch';

  return (
    <Link
      to={`/destinations/${destinationId}`}
      className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'
    >
      <section className='destination-banner-wrapper w-full'>
        <img
          src={DemoImage}
          alt='destination-banner'
          className='w-full h-[250px]'
        />
      </section>
      <section className='card-body pt-4 pb-6'>
        <h3 className='poppins text-lg font-semibold'>Obudu Cattle Ranch</h3>
      </section>
    </Link>
  );
}

export default TopDestinationCard;
