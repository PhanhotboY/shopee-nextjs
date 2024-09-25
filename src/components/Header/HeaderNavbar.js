import React from 'react';
import style from './HeaderNavbar.module.scss';
import HeaderConnect from './Section/HeaderConnect';
import HeaderSupport from './Section/HeaderSupport';

const HeaderNavbar = ({ style: customStyle }) => {
  return (
    <div className={`${style.navbar} grid`} style={customStyle || {}}>
      <HeaderConnect />
      <HeaderSupport />
    </div>
  );
};

export default HeaderNavbar;
