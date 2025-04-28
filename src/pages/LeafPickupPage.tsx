
import React from 'react';
import LeafPickupInfo from '../components/LeafPickup/LeafPickupInfo';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const LeafPickupPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Leaf Pickup Information</h1>
        <LeafPickupInfo />
      </main>
      <BottomNav />
    </>
  );
};

export default LeafPickupPage;
