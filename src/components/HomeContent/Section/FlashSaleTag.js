import { FormattedMessage } from 'react-intl';
import React from 'react';

import { toCurrencyString } from '@/utils';
import style from './FlashSaleTag.module.scss';
import DiscountFlag from './DiscountFlag';

export default function Banner({ data }) {
  return (
    <a href='#'>
      <DiscountFlag discount={data.discount} />

      <FlashSaleImage images={data.images} overlay={data.overlay} />

      <ProductDetail originPrice={data.originPrice} discount={data.discount}>
        <SoldProcess sold={data.sold} maxQuantity={data.maxQuantity} />
      </ProductDetail>
    </a>
  );
}

const FlashSaleImage = ({ images, overlay }) => {
  return (
    <div
      className={style.product_image}
      style={{
        backgroundImage: `url('https://cf.shopee.vn/file/${images[0]}')`,
      }}
    >
      <div
        className={style.product_overlay}
        style={{
          backgroundImage: `url('https://cf.shopee.vn/file/${overlay}')`,
        }}
      ></div>
    </div>
  );
};

const ProductDetail = ({ originPrice, discount, children }) => {
  return (
    <div className={style.product_detail}>
      <div className={style.product_price}>
        <span>{toCurrencyString(originPrice * (Number(discount) || 1))}</span>
      </div>

      {children}
    </div>
  );
};

const SoldProcess = ({ maxQuantity, sold }) => {
  return (
    <div
      className={style.product_sold}
      style={{
        backgroundImage:
          "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/ac7f81d9ee062223753413ec98497a86.png')",
      }}
    >
      <div
        className={style.product_sold_process}
        style={{ left: `${(sold / maxQuantity) * 100}%` }}
      ></div>
      <span>
        <FormattedMessage id='body.sold' values={{ sold }} />
      </span>
    </div>
  );
};
