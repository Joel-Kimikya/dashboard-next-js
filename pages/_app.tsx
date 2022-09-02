import React from 'react';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/content/Dashboard';
import Marge from './marge';
/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = () => {
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar />
      <Marge />
      <Dashboard />
    </div>
  );
};

export default App;
