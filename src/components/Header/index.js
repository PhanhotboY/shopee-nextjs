import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import HeaderNavbar from './HeaderNavbar';
import HeaderSearch from './HeaderSearch';
import HeaderSign from './HeaderSign';
import HeaderSystem from './HeaderSystem';
import HeaderCart from './HeaderCart';
import './index.scss';

const Header = () => {
  const pathname = usePathname();

  const [isInSignPage, setIsInSignPage] = useState(
    pathname === '/signup' || pathname === '/login'
  );
  const [isInSystemPage, setIsInSystemPage] = useState(
    Boolean(pathname.match(/\/system.*/g))
  );
  const [isInCartPage, setIsInCartPage] = useState(
    Boolean(pathname.match(/\/cart.*/g))
  );

  useEffect(() => {
    const targetNode = document.querySelector('.content-container');
    const config = { childList: true, subtree: true };

    const callback = () => {
      setIsInSignPage(pathname === '/signup' || pathname === '/login');
      setIsInSystemPage(Boolean(pathname.match(/\/system.*/g)));
      setIsInCartPage(Boolean(pathname.match(/\/cart.*/g)));
    };

    const observer = new MutationObserver(callback);
    if (targetNode) {
      observer.observe(targetNode, config);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs only once (componentDidMount behavior)

  return (
    <header>
      {!isInSignPage && !isInSystemPage && !isInCartPage && (
        <>
          <HeaderNavbar />
          <HeaderSearch />
        </>
      )}

      {isInSignPage && <HeaderSign />}

      {isInSystemPage && <HeaderSystem />}

      {isInCartPage && <HeaderCart />}
    </header>
  );
};

export default Header;
