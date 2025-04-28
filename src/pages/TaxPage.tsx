
import React from 'react';
import TaxInfo from '../components/Tax/TaxInfo';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const TaxPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Tax Information</h1>
        <TaxInfo />
      </main>
      <BottomNav />
    </>
  );
};

export default TaxPage;
