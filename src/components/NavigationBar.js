import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className='bg-white dark:bg-gray-900'>
      {/* web div */}
      <div className='container mx-auto px-6'>
        <div className='max-w-[800] flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <a
              className='block text-teal-300 dark:text-teal-300 text-xl font-medium'
              href='/'
            >
              FakeStore
            </a>
          </div>

          <div className='hidden md:block'>
            <nav aria-labelledby='header-navigation'>
              <h2 className='sr-only' id='header-navigation'>
                Header navigation
              </h2>

              <ul className='flex items-center text-sm gap-6'>
                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='/about'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='/'
                  >
                    Products
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='/blog'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 sm:flex'>
              {user ? (
                <div className='flex'>
                  <Link to={`profile/${user._id}`}>
                    <svg
                      className='mt-0.5 w-6 h-6 text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </Link>
                  <p className='text-white px-1'>|</p>
                  <svg
                    className='mt-0.5 w-6 h-6 text-red-500 hover:cursor-pointer'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    onClick={handleLogout}
                  >
                    <path
                      fill-rule='evenodd'
                      d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </div>
              ) : (
                <a
                  className='px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow dark:hover:bg-teal-500'
                  href='/login'
                >
                  Login
                </a>
              )}
            </div>

            <div className='block md:hidden'>
              <button
                className='p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile div */}
      <motion.div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden z-40 absolute bg-white w-full rounded-sm shadow-lg`}
        initial='exit'
        animate={isOpen ? 'enter' : 'exit'}
        variants={subMenuAnimate}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            className='text-slate-900 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            href='/about'
          >
            About
          </a>

          <a
            className='text-slate-900 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            href='/'
          >
            Products
          </a>

          <a
            className='text-slate-900 hover:bg-teal-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            href='/blog'
          >
            Blog
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default NavigationBar;
