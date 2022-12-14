import Head from 'next/head';
import React from 'react';

import App from './_app';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home = () => {
  return (
    <div className='flex'>
      <Head>
        <title>Dashboard-Template</title>
        <meta name='description' content='Dashboard' />
      </Head>
      <App />
    </div>
  );
};

export default Home;
