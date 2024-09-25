'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import carouselButtonsHandler from './lib/CarouselButtonsHandler';
import style from './Carousel.module.scss';

export default function Carousel({
  children,
  catList,
  length,
  col,
  horizontalDisplay,
  verticalDisplay,
  height,
  wrapper: wrapperClass,
}) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector(
      `.${wrapperClass} .${style.wrapper} ul`
    );
    const nextBtn = document.querySelector(
      `.${wrapperClass}  .${style.button_next}`
    );
    const backBtn = document.querySelector(
      `.${wrapperClass}  .${style.button_back}`
    );

    carouselButtonsHandler(
      wrapper,
      nextBtn,
      backBtn,
      Math.ceil((length || catList.length) / verticalDisplay),
      horizontalDisplay
    );
  }, []);

  return (
    <div
      className={`${style.wrapper} col-span-${col}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ height }}
    >
      <div className={style.carousel}>
        <CarouselContainer
          catList={catList}
          length={length}
          horizontalDisplay={horizontalDisplay}
          verticalDisplay={verticalDisplay}
          children={children}
        />
      </div>

      <CarouselButton direction='back' isHover={isHover} />
      <CarouselButton direction='next' isHover={isHover} />
    </div>
  );
}

const CarouselContainer = ({
  catList,
  length,
  horizontalDisplay,
  verticalDisplay,
  children,
}) => {
  const child = Array.isArray(children) ? children[0] : children;

  return (
    <ul
      style={{
        width: `${
          Math.ceil((length || catList.length) / verticalDisplay) *
          (100 / horizontalDisplay)
        }%`,
      }}
    >
      {catList.map((cat, index) => (
        <li
          key={index}
          style={{
            width: `${
              100 / Math.ceil((length || catList.length) / verticalDisplay)
            }%`,
            height: `${100 / verticalDisplay}%`,
          }}
        >
          {React.cloneElement(child, {
            data: cat,
          })}
        </li>
      ))}

      {Array.isArray(children) && [...children].splice(1)}
    </ul>
  );
};

const CarouselButton = ({ direction, isHover }) => {
  return (
    <button
      className={`${style['button_' + direction]} ${style.carousel_buttons} ${
        style[`buttons--${isHover ? 'active' : 'hint'}`]
      }`}
      type='button'
    >
      <FontAwesomeIcon
        icon={direction === 'next' ? faChevronRight : faChevronLeft}
      ></FontAwesomeIcon>
    </button>
  );
};
