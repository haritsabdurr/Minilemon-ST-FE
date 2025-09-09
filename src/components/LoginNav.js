const LoginNav = () => {
  return (
    <header className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <div className='max-w-[800] flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <a
              className='block text-teal-300 dark:text-teal-300 text-xl font-medium'
              href='/'
            >
              FakeStore
              <span className='text-gray-200 ml-2'>Login</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginNav;
