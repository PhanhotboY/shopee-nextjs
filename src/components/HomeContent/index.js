import React from 'react';

import './index.scss';
import Banner from './Section/Banner';
import Category from './Category';
import FlashSale from './FlashSale';
import ShopMall from './ShopMall';
import TopSearch from './TopSearch';
import ProductList from './ProductList';

export default function HomeContent() {
  const linkList = ['#', '/', '#'];
  const topBannerImg = '3bd07c36ac8112697c5c0a44c620a838';
  const subBannerImg = 'b7d2862cf4498bfe9bea57af959983fe';

  return (
    <>
      <Banner linkList={linkList} image={topBannerImg} />

      <Category />

      <FlashSale />

      <Banner linkList={linkList} image={subBannerImg} />

      <ShopMall />

      <TopSearch />

      <ProductList />
    </>
  );
}
