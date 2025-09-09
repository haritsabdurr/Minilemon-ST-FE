import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
  const bcContent = {
    id: 1,
    title: 'About this website',
  };

  return (
    <div className='container mx-auto p-6'>
      <Breadcrumbs list={bcContent} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-24'>
        <div className='mt-6'>
          <h1 className='text-2xl font-semibold'>Skill Test : Store App</h1>
          <p className='mt-4 mb-8 text-justify'>
            The FakeStore App is a project developed as part of the Minilemon
            Frontend Developer online assessment. It is built using ReactJS for
            the frontend framework and styled with TailwindCSS for a modern,
            responsive interface design. The application integrates two APIs:
            one dedicated to handling user authentication (login) and another
            for retrieving and displaying the product list.
          </p>
        </div>
        <div className='mx-auto'>
          <img src='logo512.png' alt='logo' className='w-72' />
        </div>
      </div>
    </div>
  );
};

export default About;
