import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './HeaderTitle.module.scss';

export default function HeaderTitle(props) {
  const { children, image, title, border, color, call, propStyles } = props;

  return (
    <div
      className={`${style.header}`}
      style={{
        color,
        border,
        ...propStyles,
      }}
    >
      <div className={style.title}>
        {image && (
          <div
            className={style.logo}
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        )}

        {title && <span>{title}</span>}

        {children}
      </div>

      {React.isValidElement(call) ? call : call && <SeeMore color={color} />}
    </div>
  );
}

const SeeMore = ({ color }) => {
  return (
    <a className={style.seemore} href='#' style={{ color }}>
      <span>
        <FormattedMessage id='body.seeall' />
      </span>
      <svg enableBackground='new 0 0 11 11' viewBox='0 0 11 11' x='0' y='0'>
        <path d='m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z'></path>
      </svg>
    </a>
  );
};
