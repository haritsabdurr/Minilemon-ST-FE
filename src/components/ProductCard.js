import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ content }) => {
  return (
    <div
      className='w-90 border border-1 p-4 rounded-lg shadow-md hover:border-gray-400'
      key={content.id}
    >
      <Link to={`/view/${content.id}`}>
        <a className='block' href='/product/limited-edition-sports-trainer'>
          <div className='flex justify-center'>
            <strong className='relative h-6 px-4 text-xs text-white uppercase bg-black leading-6'>
              New
            </strong>
          </div>

          <img
            alt='Trainer Product'
            src={content.image}
            className='object-contain w-full -mt-3 h-[350px] sm:h-[250px]'
          />

          <h5 className='mt-4 text-md text-gray-700 line-clamp-2'>
            {content.title}
          </h5>

          <div className='flex items-center justify-between mt-4 font-medium'>
            <p>${content.price}</p>

            <div className='flex items-center justify-between'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4  text-orange-300'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>

              <p className='text-xs tracking-wide uppercase ml-1'>
                {content.rating.rate}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
