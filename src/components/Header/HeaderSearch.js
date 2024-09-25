import React, { useState, useEffect } from 'react';
import HeaderLogo from './Section/HeaderLogo';
import SearchBox from './Section/SearchBox';
import HeaderCart from './Section/HeaderCart';
import style from './HeaderSearch.module.scss';

const HeaderSearch = () => {
  const [isInHomePage, setIsInHomePage] = useState(true); // Default to true

  // Check if we're not on signup or login page
  useEffect(() => {
    const isHomePage =
      window.location.pathname !== '/signup' &&
      window.location.pathname !== '/login';
    setIsInHomePage(isHomePage);
  }, []); // Empty array to run only once on component mount

  return (
    <div className={`${style['header_search']} grid`}>
      <HeaderLogo />
      <SearchBox />
      <HeaderCart />
    </div>
  );
};

export default HeaderSearch;
