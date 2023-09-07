import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import SignUpPage from './pages/sign-up/index.jsx';
import LogInPage from './pages/log-in/index.jsx';
import DestinationsPageWrapper from './pages/destinations/index.jsx';
import AboutDestination from './pages/destinations/components/AboutDestination.jsx';
import SubscriptionPage from './pages/subscription/index.jsx';
import ScrollToTop from './ScrollReset.jsx';

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
