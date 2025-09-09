import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import axios from 'axios';

const Blog = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/2';

  const [clamp, setClamp] = useState(false);
  const [post, setPost] = useState([]);

  const fetchPost = () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(url);
        setPost(response.data);
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className='container mx-auto px-4 sm:px-56 py-24 min-h-[35rem]'>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <p
          className={`${
            clamp ? '' : 'line-clamp-3'
          } text-justify text-xl leading-8`}
        >
          {post.body || <Skeleton count={3} />}
        </p>
      </SkeletonTheme>
      <button
        className='bg-emerald-700 text-white mt-2 rounded-md py-1 px-2 w-32'
        onClick={() => setClamp(!clamp)}
      >
        {`${clamp ? 'See Less' : 'Read More'}`}
      </button>
    </div>
  );
};

export default Blog;
