'use client';
import React from 'react';

import './index.scss';
import BannerImages from './Section/BannerImages';
import BannerCategory from './Section/BannerCategory';

export default function HomeBanner() {
  return (
    <div className='banner_wrapper row'>
      <BannerImages />
      <BannerCategory />
    </div>
  );
}
