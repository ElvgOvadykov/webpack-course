import React from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import catJpeg from '@/assets/cat.jpeg';
import Calandar from '@/assets/calendar.svg';

/** Tree shaking
 * Эта функция не попадет в итоговый бандл.
 * webpack анализирует код и не достижимый код
 * не попадает в итоговую сборку.
 */
function TODO() {
  console.log('TODOFUNCTION');
}

export const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(value => value + 1);

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>IS_DESKTOP_PLATFORM</div>;
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>IS_MOBILE_PLATFORM</div>;
  // }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'start' }}>
      <Link to={'/about'}>about</Link>
      <Link to={'/shop'}>shop</Link>
      <span className={classes.value}>{count}</span>
      <button className={classes.button} onClick={increment}>
        +
      </button>
      <img src={avatarPng} alt="avatar" />
      <img src={catJpeg} alt="cat" width={100} height={100} />
      <Calandar color="green" style={{ color: 'green' }} width={100} height={100} />
      <h3>__PLATFORM__ = {__PLATFORM__}</h3>
      <Outlet />
    </div>
  );
};
