import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.tsx';
import SignUpPage from './pages/sign-up/index.tsx';
import LogInPage from './pages/log-in/index.tsx';
import DestinationsPageWrapper from './pages/destinations/index.tsx';
import AboutDestination from './pages/destinations/components/AboutDestination.tsx';
import SubscriptionPage from './pages/subscription/index.jsx';
import ScrollToTop from './ScrollReset.tsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/log-in' element={<LogInPage />} />
        <Route path='/subscription' element={<SubscriptionPage />} />
        <Route path='/destinations' element={<DestinationsPageWrapper />}>
          <Route path=':destinationId' element={<AboutDestination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
