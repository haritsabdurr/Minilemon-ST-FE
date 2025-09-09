import { useState } from 'react';
import { baseUrl } from '../utils/Url';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/users/login`, {
        username,
        password,
      });
      localStorage.setItem('user', JSON.stringify(res.data.data));
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      console.log(err);
      alert('data tidak sesuai!');
    }
  };

  return (
    <div className='container mx-auto p-6'>
      <div className='w-64 mx-auto my-24'>
        <h1 className='text-2xl text-center font-bold'>Hi, Welcome Back!</h1>
        <form className='mt-6' onSubmit={handleLogin}>
          <label htmlFor='Username'>
            <span className='text-sm font-medium text-gray-700'>
              {' '}
              Username{' '}
            </span>

            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
            />
          </label>

          <label htmlFor='Password'>
            <span className='text-sm font-medium text-gray-700'>
              {' '}
              Password{' '}
            </span>

            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
            />
          </label>

          <button
            type='submit'
            className='block mx-auto mt-4 px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow dark:hover:bg-teal-500'
          >
            Login
          </button>

          <p className='text-center mt-3'>
            Dont Have an Account?{' '}
            <span
              className='font-semibold underline hover:cursor-pointer'
              onClick={() => navigate('/register')}
            >
              Register
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
