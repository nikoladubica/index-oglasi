import React from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Search from './components/Search';
import './App.scss';

function App() {
  return (
    <div>
        <Header />
        <Breadcrumb />
        <Search />
    </div>
  );
}

export default App;
