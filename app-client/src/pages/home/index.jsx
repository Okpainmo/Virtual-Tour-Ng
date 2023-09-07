import { useEffect } from 'react';
import HomeHero from './components/HomeHero';
import Navbar from '../../components/Navbar';
import DestinationsSection from './components/DestinationsSection';
import Footer from '../../components/Footer';
import TopDestinationsSection from '../../components/TopDestinationsSection';

function Home() {
  useEffect(() => {
    document.title = 'Home | Virtual Tours NG';
  }, []);

  return (
    <main className='home'>
      <Navbar />
      <HomeHero />
      <DestinationsSection />
      <TopDestinationsSection />
      <Footer />
    </main>
  );
}

export default Home;
