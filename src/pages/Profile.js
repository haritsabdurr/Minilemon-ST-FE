import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Url';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleDeleteAcc = async () => {
    try {
      await axios.delete(`${baseUrl}/users/${user._id}`).then(() => {
        setTimeout(() => {
          localStorage.removeItem('user');
          navigate('/');
          window.location.reload();
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    console.log(user);
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <div className='w-64 mx-auto my-24'>
        <h1 className='text-2xl text-center font-bold mb-3'>Account Center</h1>
        <label htmlFor='Username'>
          <span className='text-sm font-medium text-gray-700'> Username </span>

          <input
            type='text'
            id='username'
            value={user.username}
            disabled
            className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
          />
        </label>

        <label htmlFor='Email'>
          <span className='text-sm font-medium text-gray-700'> Username </span>

          <input
            type='text'
            id='username'
            value={user.email}
            disabled
            className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
          />
        </label>

        <label htmlFor='Password'>
          <span className='text-sm font-medium text-gray-700'> Username </span>

          <input
            type='text'
            id='username'
            value={user.password}
            disabled
            className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
          />
        </label>

        <button
          className='block mx-auto mt-6 px-5 py-2.5 text-sm font-medium text-white rounded-md shadow dark:bg-red-500'
          onClick={handleDeleteAcc}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
