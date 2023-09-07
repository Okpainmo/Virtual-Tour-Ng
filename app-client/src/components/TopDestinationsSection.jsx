import React from 'react';
import { Link } from 'react-router-dom';
import DemoImage1 from '../assets/images/obudu-banner.jpg';
import DemoImage2 from '../assets/images/uli-waterfalls-banner.jpg';
import DemoImage3 from '../assets/images/world-ifa-festival-banner.jpg';

// import TopDestinationCard from './TopDestinationCard';

function TopDestinationsSection() {
  const destinationId = 'obudu-cattle-ranch';

  return (
    <section className='destinations mt-[100px] px-3 sm:px-[40px] lg:px-0 lg:w-[95%] 2xl:w-[80%] lg:mx-auto'>
      <h1 className='text-center poppins text-4xl font-bold'>
        Recommended Top Destinations.
      </h1>
      <section className='destination-cards-wrapper mt-[70px] flex flex-col gap-y-[40px] md:justify-between md:gap-y-[70px] md:flex-row flex-wrap'>
        <Link
          to={`/destinations/${destinationId}`}
          className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'
        >
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage1}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-4 pb-6'>
            <h3 className='poppins text-lg font-semibold'>
              Obudu Cattle Ranch
            </h3>
          </section>
        </Link>
        <Link
          to={`/destinations/${destinationId}`}
          className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'
        >
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage2}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-4 pb-6'>
            <h3 className='poppins text-lg font-semibold'>Uli Waterfalls</h3>
          </section>
        </Link>
        <Link
          to={`/destinations/${destinationId}`}
          className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'
        >
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage3}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-4 pb-6'>
            <h3 className='poppins text-lg font-semibold'>
              World Ifa Festival
            </h3>
          </section>
        </Link>
      </section>
    </section>
  );
}

export default TopDestinationsSection;
