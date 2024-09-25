'use client';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  getDiscountedPrice,
  toCurrencyString,
  toThousandUnitString,
} from '@/utils';
import DiscountFlag from './DiscountFlag';
import style from './ProductTag.module.scss';
import Link from 'next/link';

export default function ProductTag({ data: product, col, isHoverHighLight }) {
  const [isHover, setIsHover] = useState(false);

  /**Props:
   * data: obj
   * col: number
   * isHoverHighLight: boolean
   */

  return (
    <li className={`${style.wrapper} col-span-${col || 2}`}>
      <div
        className={style.container}
        style={{
          borderColor: isHoverHighLight && isHover && '#ee4d2d',
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link className={style.main} href={`/products/${product.id}`}>
          <>
            <ProductImage
              images={product.images}
              overlay={product.overlay}
              flag={product.flag}
            />

            {product.discount ? (
              <DiscountFlag discount={product.discount} />
            ) : (
              ''
            )}

            <ProductDetail
              title={product.title}
              promotion={product.promotion}
              price={getDiscountedPrice(product.originPrice, product.discount)}
              sold={product.sold}
              address={product.address}
            />
          </>
        </Link>

        {isHoverHighLight && isHover && <SimilarBtn />}
      </div>
    </li>
  );
}

const ProductImage = ({ images, overlay, flag }) => {
  return (
    <div
      className={style.product_image}
      style={{
        backgroundImage: `url('https://cf.shopee.vn/file/${
          images && images[0]
        }')`,
      }}
    >
      {overlay ? (
        <div
          className={style.overlay}
          style={{
            backgroundImage: `url('https://cf.shopee.vn/file/${overlay}')`,
          }}
        ></div>
      ) : (
        ''
      )}

      {flag ? (
        <img className={style.flag} src={`https://cf.shopee.vn/file/${flag}`} />
      ) : (
        ''
      )}
    </div>
  );
};

const ProductDetail = ({ title, promotion, price, sold, address }) => {
  return (
    <div className={style.product_detail}>
      <div className={style.product_title}>{title}</div>

      <div
        className={style.product_promotion}
        style={{
          backgroundImage: `url('https://cf.shopee.vn/file/${promotion}')`,
        }}
      ></div>

      <div className={style.product_info}>
        <div className={style.product_price}>{toCurrencyString(price)}</div>

        <div className={style.sold}>
          <FormattedMessage
            id='body.sold'
            values={{ sold: toThousandUnitString(sold, 1) }}
          />
        </div>
      </div>

      <span className={style.address}>{address || ''}</span>
    </div>
  );
};

const SimilarBtn = () => {
  return (
    <div className={style.similar}>
      <a href='#'>
        <FormattedMessage id='body.find-similar' />
      </a>
    </div>
  );
};
