import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';

const Home = () => {
  const [product, setProduct] = useState([]);

  const url = 'https://fakestoreapi.com/products';

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const filterResult = (item) => {
    const result = product.filter((curDate) => {
      return curDate.category === item;
    });
    setProduct(result);
  };

  const fetchProducts = () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(url);
        setProduct(response.data);
        console.log(response.data);
        setIsLoading(true);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <Breadcrumbs list={product} />
        {/* <CategoryFilter /> */}
        <div className='flex items-stretch bg-white border rounded-md w-[310px] sm:w-48'>
          <p className='px-3 py-2 text-xs text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md'>
            Filter by Category
          </p>

          <div className='relative'>
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center h-full ml-3 px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50'
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
            >
              <div className='p-2'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                  onClick={() => filterResult(product)}
                >
                  All Products
                </a>

                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                  onClick={() => filterResult(`men's clothing`)}
                >
                  Men's Clothing
                </a>

                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                  onClick={() => filterResult(`jewelery`)}
                >
                  Jewelery
                </a>

                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                  onClick={() => filterResult(`electronics`)}
                >
                  Electronics
                </a>

                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                  onClick={() => filterResult(`women's clothing`)}
                >
                  Women's Clothing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-4 gap-6 py-6'>
        {product
          // .filter((prod) => prod.category === 'electronics')
          .map((newProd) => (
            <ProductCard content={newProd} />
          ))}
      </div>
      {!isLoading && (
        <div role='status' className='flex justify-center items-center py-52'>
          <svg
            aria-hidden='true'
            className='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-teal-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Home;
