import Logo from '../assets/images/logo_main.jpg';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Navbar() {
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  // const navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <nav className='bg-black px-3 sm:px-[20px] lg:px-[100px] py-3 text-white flex justify-between items-center'>
      <section className='nav-left flex'>
        <Link to='/'>
          <img className='w-[100px]' src={Logo} alt='logo' />
        </Link>
        <ul className='hidden text-[12px] md:flex nav-links gap-12 ml-20 items-center'>
          <Link to='/'>
            <li className='poppins uppercase'>Home</li>
          </Link>
          <Link to='/'>
            <li className='poppins uppercase'>Locations</li>
          </Link>
          <Link to='/'>
            <li className='poppins uppercase'>FAQ</li>
          </Link>
          <Link to='/'>
            <li className='poppins uppercase'>Contact</li>
          </Link>
        </ul>
      </section>
      <section className='nav-right flex items-center'>
        <HiBars3BottomRight className='w-[30px] h-[30px] hidden' />
        <div
          className={`${
            userName ? 'hidden' : 'flex'
          } nav-buttons-wrapper gap-6`}
        >
          <Link
            to='/sign-up'
            className='flex items-center capitalize poppins px-6 py-1 bg-blue-400 text-white'
          >
            Sign up
          </Link>
          <Link
            to='/log-in'
            className='flex items-center capitalize poppins px-6 py-1 border-2 text-white'
          >
            Log in
          </Link>
        </div>
        <div
          className={`${
            userName ? 'flex' : 'hidden'
          } flex-col text-[12px] text-right`}
        >
          <span className='font-bold poppins'>Hello {userName}</span>
          <span>{userEmail}</span>
          <span onClick={handleLogOut} className='underline cursor-pointer'>
            Log out
          </span>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
