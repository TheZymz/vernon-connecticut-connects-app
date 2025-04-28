
import React from 'react';
import SchoolsList from '../components/Schools/SchoolsList';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const SchoolsPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Vernon Schools</h1>
        <SchoolsList />
      </main>
      <BottomNav />
    </>
  );
};

export default SchoolsPage;
