// import DestinationCard from './DestinationCard';
import DemoImage1 from '../../../assets/images/obudu-banner.jpg';
import DemoImage2 from '../../../assets/images/oshogbo-festival-banner.jpg';
import DemoImage3 from '../../../assets/images/world-ifa-festival-banner.jpg';
import DemoImage4 from '../../../assets/images/uli-waterfalls-banner.jpg';
import DemoImage5 from '../../../assets/images/agbokim-waterfalls-banner.jpg';
import DemoImage6 from '../../../assets/images/abuja-national-mosque-banner.jpg';
import { Link } from 'react-router-dom';

function Destinations() {
  const destinationId = 'obudu-cattle-ranch';

  return (
    <section
      id='destinations-section'
      className='destinations pt-[100px] px-3 sm:px-[40px] lg:px-0 lg:w-[95%] 2xl:w-[80%] lg:mx-auto'
    >
      <h1 className='text-center poppins text-4xl font-bold'>
        Destinations we provide.
      </h1>
      <section className='destination-cards-wrapper mt-[70px] flex flex-col gap-y-[40px] md:justify-between md:gap-y-[70px] md:flex-row flex-wrap'>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage1}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              Obudu Cattle Ranch
            </h3>
            <div className='card-text'>
              Experience the lush green landscapes of Obudu Cattle Ranch,
              nestled in the serene mountains of Nigeria. Take a virtual journey
              through winding trails, explore the stunning waterfalls, and
              witness the unique blend of nature and luxury that defines this
              beautiful resort.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage2}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              Osun Oshogbo Festival
            </h3>
            <div className='card-text'>
              Immerse yourself in the vibrant and cultural extravaganza of the
              Osun Osogbo Festival. Join the procession, witness traditional
              performances, and discover the deep-rooted spiritual significance
              of this annual event that celebrates the Yoruba goddess of
              fertility, Osun.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage3}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              World Ifa Festival
            </h3>
            <div className='card-text'>
              Step into the mystical world of Ifa at the World Ifa Festival.
              Explore the rituals, ceremonies, and spiritual practices of the
              Yoruba people as they pay homage to their deity, Ifa. Gain
              insights into a profound aspect of Yoruba culture.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage4}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              Uli Waterfalls
            </h3>
            <div className='card-text'>
              Embark on a virtual adventure to the breathtaking Uli Waterfall in
              Nigeria. Journey through the lush rainforest, listen to the
              soothing sounds of cascading water, and witness the natural beauty
              that surrounds this hidden gem.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage5}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              Agbokim Waterfalls
            </h3>
            <div className='card-text'>
              Explore the captivating Agbokim Waterfalls, a true wonder of
              nature. Traverse the scenic trails leading to a series of
              cascading falls, each more mesmerizing than the last. Let the
              sights and sounds of this natural spectacle transport you.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
        <div className='destination-card w-full md:w-[45%] lg:w-[30%] shadow-lg px-4 rounded'>
          <section className='destination-banner-wrapper w-full'>
            <img
              src={DemoImage6}
              alt='destination-banner'
              className='w-full h-[250px]'
            />
          </section>
          <section className='card-body pt-6 pb-10'>
            <h3 className='poppins text-lg font-semibold mb-3'>
              Abuja National Mosque
            </h3>
            <div className='card-text'>
              Visit the majestic Abuja Central Mosque through the power of VR.
              Admire the stunning architecture, intricate designs, and the sense
              of serenity that envelops this significant religious landmark in
              Nigeria's capital.
            </div>
            <Link to={`/destinations/${destinationId}`}>
              <button className='bg-blue-400 px-4 py-2 text-white mt-10 font-bold poppins'>
                Read More
              </button>
            </Link>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Destinations;
