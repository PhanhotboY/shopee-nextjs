import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './DiscountFlag.module.scss';

export default function DiscountFlag({ discount }) {
  return (
    <div className={style.discount_flag}>
      {discount}%{' '}
      <span>
        <FormattedMessage id='body.discount' />
      </span>
    </div>
  );
}
