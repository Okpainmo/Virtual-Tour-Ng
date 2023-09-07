import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TopDestinationsSection from '../../components/TopDestinationsSection';
// import AboutDestination from '.components/AboutDestination';
import { Outlet } from 'react-router-dom';

function DestinationPageWrapper() {
  useEffect(() => {
    document.title = 'Destinations | Virtual Tours NG';
  }, []);

  return (
    <main className='destination-page'>
      <Navbar />
      <Outlet />
      <TopDestinationsSection />
      <Footer />
    </main>
  );
}

export default DestinationPageWrapper;
