import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './HeaderSign.module.scss';
import HeaderLogo from './Section/HeaderLogo';

const HeaderSign = () => {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.slice(1)
  );

  useEffect(() => {
    const targetNode = document.querySelector('.content-container');
    const config = { childList: true, subtree: true };

    const callback = () => {
      setCurrentPage(window.location.pathname.slice(1));
    };

    const observer = new MutationObserver(callback);
    if (targetNode) observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${style.header}`}>
      <HeaderLogo />

      <div className={style.header_title}>
        <FormattedMessage id={`header.${currentPage}`} />
      </div>

      <a className={style.header_help} href='#'>
        <FormattedMessage id='header.need-help' />
      </a>
    </div>
  );
};

export default HeaderSign;
