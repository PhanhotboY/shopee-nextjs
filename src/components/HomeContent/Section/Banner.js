import React from 'react';

import style from './Banner.module.scss';

export default function Banner({ linkList, image }) {
  return (
    <div
      className={`content_wrapper ${style.banner}`}
      style={{
        background: `url('https://cf.shopee.vn/file/${image}') center/cover`,
      }}
    >
      <LinkList linkList={linkList} />
    </div>
  );
}

const LinkList = ({ linkList }) => {
  return linkList.map((link, index) => <LinkBanner key={index} link={link} />);
};

const LinkBanner = ({ link }) => {
  return <a href={link}></a>;
};
