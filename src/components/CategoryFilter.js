import { useState } from 'react';

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='flex items-stretch bg-white border rounded-md mt-6'>
      <a
        href='/edit'
        className='px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md'
      >
        Filter by Category
      </a>

      <div className='relative'>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-100 shadow-lg origin-top-right rounded-md`}
          role='menu'
          onChange={handleCategory}
        >
          <div className='p-2'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              All Products
            </a>

            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              Men's Clothing
            </a>

            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              Jewelery
            </a>

            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              Electronics
            </a>

            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              Women's Clothing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
