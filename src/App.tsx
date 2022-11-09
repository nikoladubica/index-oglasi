import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Search from './components/Search';
import Listing from './components/Listing/Listing';
import Footer from './components/Footer';
import './App.scss';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store';
import { RootState } from './store/reducers';

const App = () => {
  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch();
  const [ apiData, setApiData ] = useState({});

  const { fetchData } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    fetchData()
  }, [])

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
