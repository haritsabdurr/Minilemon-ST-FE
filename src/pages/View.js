import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs';

const View = () => {
  const url = 'https://fakestoreapi.com/products';
  // const url = 'https://api.escuelajs.co/api/v1/products';

  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty >= 2) {
      setQty(qty - 1);
    } else {
      setQty(qty - 0);
    }
  };

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchProductbyId = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(`${url}/${id}`);
        setProduct(response.data);
        console.log(response.data);
        setIsLoading(true);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductbyId();
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <Breadcrumbs list={product} />
      {!isLoading ? (
        <div
          role='status'
          className='flex justify-center items-center min-h-[65vh]'
        >
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
      ) : (
        <section>
          <div className='relative py-8 mx-auto max-w-screen-xl'>
            <div className='items-start grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center px-10 w-[600px] h-[350px] sm:h-[450px] border border-1 rounded-lg'>
                  <img
                    alt={product?.title}
                    className='object-contain max-w-[240px] max-h-[320px]'
                    src={product?.image}
                  />
                </div>
              </div>

              <div className='sticky top-0'>
                <div className='block'>
                  <div className='max-w-[45ch]'>
                    <h1 className='text-2xl font-bold'>{product?.title}</h1>

                    <div className='flex items-center mt-1 -ml-0.5'>
                      <svg
                        className='w-4 h-4 text-yellow-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                      <p className='ml-1 text-sm'>
                        {product.rating?.rate}{' '}
                        <span className='text-gray-500'>
                          ({product.rating?.count} Reviews)
                        </span>{' '}
                      </p>
                    </div>
                  </div>

                  <p className='text-xl font-semibold mt-4 md:mt-2'>
                    ${product?.price}
                  </p>
                </div>

                <div className='pb-6 prose max-w-none mt-4'>
                  <p className='text-justify'>{product?.description}</p>
                </div>

                <form className='mt-8'>
                  <div className='flex justify-center md:justify-start mt-8'>
                    <div
                      className='w-6 px-1 py-3 text-center text-xs font-black border border-1 rounded cursor-pointer mr-1'
                      onClick={decrementQty}
                    >
                      -
                    </div>
                    <div>
                      <label htmlFor='quantity' className='sr-only'>
                        Qty
                      </label>

                      <input
                        type='text'
                        id='quantity'
                        min='1'
                        value={qty}
                        className='w-12 py-3 text-xs text-center border-gray-200 round'
                      />
                    </div>

                    <div
                      className='w-6 px-1 py-3 text-center text-xs font-black border border-1 rounded cursor-pointer ml-1'
                      onClick={incrementQty}
                    >
                      +
                    </div>

                    <a
                      type='submit'
                      href={`${url}/category/jewelery`}
                      className='block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500'
                    >
                      Add to Cart
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default View;
