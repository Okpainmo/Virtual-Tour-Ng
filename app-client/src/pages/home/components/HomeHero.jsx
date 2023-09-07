import HeroImage from '../../../assets/images/hero-banner_main.jpg';
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <section
      className='hero-section h-[900px] lg:h-[900px] w-full bg-cover px-3 sm:px-20'
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='hero-text text-slate-800 text-5xl lg:text-[50px] leading-[70px] md:leading-[100px] poppins font-bold px-[20px] pt-[70px] lg:pt-[200px] text-center'>
        Experience Nigeria's finest locations <br /> From Anywhere you are.
      </div>
      <div className='hero-buttons-wrapper flex flex-col md:flex-row gap-8 mx-auto md:w-[60%] mt-16 justify-center'>
        <Link to='/subscription'>
          <button className='uppercase w-full md:w-[400px] text-[14px] font-bold poppins py-4 bg-blue-400 text-white'>
            Subscribe
          </button>
        </Link>
        <a href='#destinations-section'>
          <button className='uppercase w-full md:w-[400px] text-[14px] font-bold poppins py-4 bg-white text-blue-400'>
            Explore locations
          </button>
        </a>
      </div>
    </section>
  );
}

export default HomeHero;
