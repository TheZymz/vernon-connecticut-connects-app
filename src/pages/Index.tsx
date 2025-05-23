
import React from 'react';
import Dashboard from '../components/Home/Dashboard';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Dashboard />
      </main>
      <BottomNav />
    </>
  );
};

export default Index;
