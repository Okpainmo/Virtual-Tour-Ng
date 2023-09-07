import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_main.jpg';
import Socials from './Socials';
import NewsletterSection from './NewsletterSection';

function Footer() {
  return (
    <footer className='border-t pt-16 pb-24 sm:py-16 px-3 sm:px-6 xl:px-16 mt-[150px] bg-slate-900 text-white'>
      <section className='flex flex-col lg:flex-row lg:flex-wrap justify-between'>
        <section className='mb-10 md:mb-20 w-[85%] lg:w-[20%] xl:w-[25%]'>
          <Link href='/'>
            <img className='w-[100px]' src={Logo} alt='brand-logo' />
          </Link>
          <div className='brand-brief text-[12px] mt-3 sm:mt-4 leading-[25px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            quas laborum pariatur distinctio, amet illo repellat dolor porro
            dolorem natus in quasi delectus tempore itaque asperiores rem
            facilis ratione ipsum.
          </div>
          <div className='mt-3 md:mt-6'>
            <Socials />
          </div>
        </section>
        <section className='menu-items flex justify-between gap-x-4 md:w-1/2 lg:w-1/3'>
          <section className='flex flex-col gap-6'>
            <div className='min-h-[180px]'>
              <h4 className='text--dark font-semibold poppins text-base'>
                Services
              </h4>
              <ul className='flex flex-col gap-y-3 pt-4 text-[12px]'>
                <li>Crypto</li>
                <li>Forex</li>
                <li>Stocks</li>
                <li>Exchange</li>
              </ul>
            </div>
            <div className='min-h-[180px]'>
              <h4 className='text--dark font-semibold poppins text-base'>
                Services
              </h4>
              <ul className='flex flex-col gap-y-3 pt-4 text-[12px]'>
                <li>Crypto</li>
                <li>Forex</li>
                <li>Stocks</li>
                <li>Exchange</li>
              </ul>
            </div>
          </section>
          <section className='flex flex-col gap-6'>
            <div className='min-h-[180px]'>
              <h4 className='text--dark font-semibold poppins text-base'>
                Help
              </h4>
              <ul className='flex flex-col gap-y-3 pt-4 text-[12px]'>
                <li>FAQs</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className='min-h-[180px]'>
              <h4 className='text--dark font-semibold poppins text-base'>
                Help
              </h4>
              <ul className='flex flex-col gap-y-3 pt-4 text-[12px]'>
                <li>FAQs</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
          </section>
          <section className='flex flex-col gap-6'>
            <div className='min-h-[180px]'>
              <h4 className='text--dark font-semibold poppins text-base'>
                Transparency
              </h4>
              <ul className='flex flex-col gap-y-3 pt-4 text-[12px]'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </section>
        </section>
        <NewsletterSection />
      </section>
    </footer>
  );
}

export default Footer;
