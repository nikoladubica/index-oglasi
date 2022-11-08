import React from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Search from './components/Search';
import Listing from './components/Listing/Listing';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div>
        <Header />
        <Breadcrumb />
        <Search />
        <Listing />
        <Footer />
    </div>
  );
}

export default App;
