'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import startSlider from './library/setSlider';
import style from './Slider.module.scss';
import Link from 'next/link';

export default function Slider({ wrapper, images, height, col }) {
  const [isDisplayButton, setIsDisplayButton] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isDisabledButtons, setIsDisableButtons] = useState(false);
  const [slider, setSlider] = useState({});
  // // let slider = {};

  useEffect(() => {
    const carousel = document.querySelector(`.${wrapper} .${style.wrapper} ul`);
    console.log(wrapper, slider);

    const slide = startSlider(carousel, images.length + 2, currentSlide, 4000);
    setSlider(slide);
  }, []);

  const goBack = () => {
    setIsDisableButtons(true);
    slider.back();
  };

  const goAhead = () => {
    setIsDisableButtons(true);
    slider.next();
  };

  const goTo = (position) => {
    setIsDisableButtons(true);
    slider.moveto(position);

    setTimeout(() => {
      setIsDisableButtons(false);
    }, 500);
  };

  return (
    <div
      className={`${style.wrapper} col-span-${col}`}
      style={{ height }}
      onMouseOver={() => setIsDisplayButton(true)}
      onMouseLeave={() => setIsDisplayButton(false)}
      onTransitionEnd={() => {
        setCurrentSlide(slider.currentSlide);
        setIsDisableButtons(false);
      }}
    >
      <Carousel images={images} height={height} />
      {isDisplayButton && (
        <>
          <SliderButton
            direction='back'
            goBack={goBack}
            isDisabledButtons={isDisabledButtons}
          />
          <SliderButton
            direction='next'
            goAhead={goAhead}
            isDisabledButtons={isDisabledButtons}
          />
        </>
      )}
      <StardustsRow
        amount={images.length}
        currentSlide={currentSlide}
        goTo={goTo}
      />
    </div>
  );
}

const Carousel = ({ images, height }) => {
  return (
    <ul
      style={{
        width: `${(images.length + 2) * 100}%`,
        transform: `translateX(${100 / -(images.length + 2)}%) translateX(0px)`,
      }}
    >
      <SlideImage
        key={images.length}
        image={images.at(-1)}
        width={`${100 / (images.length + 2)}%`}
        height={height}
      />

      {images.map((image, index) => (
        <SlideImage
          key={index}
          image={image}
          width={`${100 / (images.length + 2)}%`}
          height={height}
        />
      ))}

      <SlideImage
        key={-1}
        image={images[0]}
        width={`${100 / (images.length + 2)}%`}
        height={height}
      />
    </ul>
  );
};

const SlideImage = ({ image, width, height }) => {
  return (
    <li style={{ width }}>
      <Link href='#'>
        <div
          className={style.content_image}
          style={{
            background: `url('https://cf.shopee.vn/file/${image}') center top / 100% no-repeat`,
            paddingTop: height,
          }}
        ></div>
      </Link>
    </li>
  );
};

const SliderButton = ({ direction, goBack, goAhead, isDisabledButtons }) => {
  return (
    <button
      className={`${style.slider_button} ${
        style[`slider_button_${direction}`]
      }`}
      disabled={isDisabledButtons}
      onClick={goBack || goAhead}
    >
      <FontAwesomeIcon
        icon={direction === 'next' ? faChevronRight : faChevronLeft}
      ></FontAwesomeIcon>
    </button>
  );
};

const StardustsRow = ({ amount, currentSlide, goTo }) => {
  const stardusts = [];
  for (let count = 0; count < amount; count++)
    stardusts.push(
      <Stardust
        key={count}
        isActive={currentSlide === count + 1}
        goTo={goTo}
        position={count + 1}
      />
    );

  return <div className={style.stardusts_container}>{stardusts}</div>;
};

const Stardust = ({ isActive, goTo, position }) => {
  return (
    <div
      className={`${style.stardust} ${isActive && style['stardust--active']}`}
      onClick={() => goTo(position)}
    ></div>
  );
};
