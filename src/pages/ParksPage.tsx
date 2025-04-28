
import React from 'react';
import ParksList from '../components/Parks/ParksList';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const ParksPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Parks & Recreation</h1>
        <ParksList />
      </main>
      <BottomNav />
    </>
  );
};

export default ParksPage;
