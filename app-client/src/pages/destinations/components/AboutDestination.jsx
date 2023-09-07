import React from 'react';
import DemoImage from '../../../assets/images/obudu-banner.jpg';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AboutDestination() {
  //   const { destinationId } = useParams();

  const destinationName = 'Obudu Cattle Ranch';
  return (
    <section className='about-destination-section w-full lg:w-[70%] 2xl:w-[60%] lg:mx-auto px-3 sm:px-[20px]'>
      <h1 className='Uppercase poppins text-4xl font-bold mt-16 mb-10'>
        Obudu Cattle Ranch.
      </h1>{' '}
      <section className='destination-banner-wrapper w-full'>
        <img src={DemoImage} alt='destination-banner' className='w-full' />
      </section>
      <section className='about-destination-section py-6  mb-12 leading-[25px]'>
        Experience the lush green landscapes of Obudu Cattle Ranch, nestled in
        the serene mountains of Nigeria. Take a virtual journey through winding
        trails, explore the stunning waterfalls, and witness the unique blend of
        nature and luxury that defines this beautiful resort. <br /> <br /> Ex
        fugiat officia, ab maiores exercitationem, libero unde harum consequatur
        ea, cumque adipisci ipsam! Et minus eius deleniti maiores rem culpa
        eveniet, aperiam maxime quas aliquam, animi iure adipisci repellat
        corporis eum. Ut architecto earum beatae repudiandae ipsam quo minima
        quibusdam nulla aliquam quos. Eius cum optio excepturi dignissimos odit
        reiciendis voluptatibus assumenda magnam recusandae ut explicabo alias,
        harum libero minima minus labore dolorem nihil nostrum tempore,
        blanditiis dolores pariatur accusamus. Dolor illo fugit quas ab.
        Corrupti obcaecati nostrum accusantium fugiat nisi non sapiente tempore
        illo aliquam. Doloremque adipisci quos quibusdam iure iste. Ducimus,
        reiciendis? Molestias magni obcaecati hic laboriosam eum blanditiis,
        autem deleniti illum.
        <a
          className='mt-12'
          target='_blank'
          href='https://somanwokoye.github.io/vr/learn-aframe/'
        >
          <div className='text-center bg-blue-400 px-4 py-3 text-white mt-10 font-bold poppins w-full sm:w-[400px] mx-auto'>
            Explore {`${destinationName}`}
          </div>
        </a>
      </section>
    </section>
  );
}

export default AboutDestination;
