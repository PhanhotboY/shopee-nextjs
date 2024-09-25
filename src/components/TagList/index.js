'use client';
import React, { useEffect, useState } from 'react';

import ProductTag from '@components/HomeContent/Section/ProductTag';

export default function TagList({ items: itms, col, children }) {
  const [items, setItems] = useState(itms || []);

  useEffect(() => {
    setItems(itms || []);
  }, [itms]);

  /**Props
   * col: [1-12] (default: 12)
   * items: array object
   * chilren: component format tag
   */
  return (
    <div className={`col-span-${col || 12}`}>
      <ul className={`row grid grid-cols-6`}>
        {items.map((item, index) =>
          React.cloneElement(children || <ProductTag />, {
            key: index,
            data: item,
          })
        )}
      </ul>
    </div>
  );
}
