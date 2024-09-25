'use client';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import style from './CountDown.module.scss';
import countDownHandler from './lib/countDownHandler';

export default function CountDown() {
  function componentDidMount() {
    countDownHandler(
      style.counter_hour,
      style.counter_minute,
      style.counter_second,
      this.props.duration
    );
  }

  return (
    <div className={style.wrapper}>
      <Counter timeUnit='hour' counter10={5} counter1={9} />
      <Counter timeUnit='minute' counter10={5} counter1={9} />
      <Counter timeUnit='second' counter10={5} counter1={9} />
    </div>
  );
}

const Counter = ({ timeUnit, counter10, counter1 }) => {
  return (
    <div className={style['counter_' + timeUnit]}>
      <div className={`${style.counter_slide} ${style.counter_10}`}>
        <CountList length={counter10} />
      </div>
      <div className={`${style.counter_slide} ${style.counter_1}`}>
        <CountList length={counter1} />
      </div>
    </div>
  );
};

const CountList = ({ length }) => {
  const countList = [<div key={-1}>0</div>];

  for (let i = length; i >= 0; i--) countList.push(<div key={i}>{i}</div>);

  return countList;
};
