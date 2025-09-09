import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Url';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/users`, {
        username,
        email,
        password,
      });
      console.log(res);
      console.log(res.data);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      setError(err.res.message);
    }
  };

  return (
    <div className='container mx-auto p-6'>
      <div className='w-64 mx-auto my-24'>
        <h1 className='text-2xl text-center font-bold'>Join With Us!</h1>
        <form className='mt-6' onSubmit={handleRegister}>
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

          <label htmlFor='Email'>
            <span className='text-sm font-medium text-gray-700'> Email </span>

            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Register
          </button>

          <p className='text-center mt-3'>
            Already Have an Account?{' '}
            <span
              className='font-semibold underline hover:cursor-pointer'
              onClick={() => navigate('/login')}
            >
              Login
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
