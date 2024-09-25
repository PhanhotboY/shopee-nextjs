import React from 'react';
import { FormattedMessage } from 'react-intl';
import style from './HeaderCart.module.scss';
import HeaderNavbar from './HeaderNavbar';
import HeaderLogo from './Section/HeaderLogo';
import Link from 'next/link'; // Updated import for Next.js
import SearchBox from './Section/SearchBox';

const HeaderCart = () => {
  return (
    <>
      <HeaderNavbar />

      <div className={`${style.wrapper}`}>
        <div className='grid'>
          <div className={style.logo}>
            <HeaderLogo />

            <Link href='/'>
              <span>
                <FormattedMessage id='cart.header' />
              </span>
            </Link>
          </div>

          <div className={style.search_box}>
            <SearchBox hiddenSubInfo={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCart;
