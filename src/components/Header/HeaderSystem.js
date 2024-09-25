import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { LANGUAGES } from '@/constants';
import Navigator from '@components/Navigator';
import * as menus from '@components/Menu';
import style from './HeaderSystem.module.scss';
import { changeLanguage as changeLanguageAction } from '@reducers/app'; // Assuming action import

const HeaderSystem = () => {
  const language = useSelector((state) => state.app.language);
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
    dispatch(changeLanguageAction(language));
  };

  return (
    <div className={style.system_header}>
      <Navigator menus={menus.adminMenu} />

      <div className={style.actions}>
        <div className={style.change_language}>
          <span
            style={{
              ...(language === LANGUAGES.VI
                ? { color: '#f00', fontWeight: 600 }
                : {}),
            }}
            onClick={() => changeLanguage(LANGUAGES.VI)}
          >
            {LANGUAGES.VI}
          </span>
          <span
            style={{
              ...(language === LANGUAGES.EN
                ? { color: '#B937FF', fontWeight: 600 }
                : {}),
            }}
            onClick={() => changeLanguage(LANGUAGES.EN)}
          >
            {LANGUAGES.EN}
          </span>
        </div>

        <Link className={style.home} href='/'>
          <i className='fa-solid fa-house'></i>
        </Link>
      </div>
    </div>
  );
};

export default HeaderSystem;
