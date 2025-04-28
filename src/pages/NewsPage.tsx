
import React from 'react';
import NewsList from '../components/News/NewsList';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const NewsPage = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">News & Events</h1>
        <NewsList />
      </main>
      <BottomNav />
    </>
  );
};

export default NewsPage;
