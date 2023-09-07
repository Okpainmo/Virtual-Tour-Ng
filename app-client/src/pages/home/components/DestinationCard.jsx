import React from 'react';
import DemoImage from '../../../assets/images/destination.jpg';
import { Link } from 'react-router-dom';

function DestinationCard() {
  const destinationId = 'obudu-cattle-ranch';

  return (
    <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
      <section className='destination-banner-wrapper w-full'>
        <img
          src={DemoImage}
          alt='destination-banner'
          className='w-full h-[250px]'
        />
      </section>
      <section className='card-body pt-6 pb-10'>
        <h3 className='poppins text-lg font-semibold mb-3'>
          Obudu Cattle Ranch
        </h3>
        <div className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor
          dolorem aperiam ipsum vel, facilis quasi. Nobis quidem perspiciatis
          architecto delectus commodi repudiandae suscipit rem. Cum facilis amet
          aliquid ut dolorem.
        </div>
        <Link to={`/destinations/${destinationId}`}>
          <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
            Read More
          </button>
        </Link>
      </section>
    </div>
  );
}

export default DestinationCard;
