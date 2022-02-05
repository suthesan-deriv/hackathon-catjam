import React from 'react';
import { css, cx } from '@emotion/css';
import * as Tabs from '@radix-ui/react-tabs';
import TabsDemo from './RadixTabs';

const Header = () => {
  return (
    <div>
      <header className={css`
        position:absolute;
        top:-40px;
        left:20px;
        right:20px;
        display:flex;
        justify-content:space-between;
        box-shadow: 0 15px 15px rgb(0,0,0 / 5%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.25);
        border-top: 1px solid rgba(255,255,255,0.5);
        border-left: 1px solid rgba(255,255,255,0.5);
        border-radius: 25px;
      `}>
        <a className={css`
        color:#812435;
        font-weight:700;
        text-decoration:none;
        font-size:2em;
        text-transform: uppercase;
        padding:0.3em;
        font-family: 'Poppins', sans-serif;
        `}>QR CODE GENERATOR</a>
        <ul className={css`
        display:flex;
        list-style:none;
        padding:0.3em;
        `}>
        </ul>
        
      </header>
         </div>
  )
}

export default Header;
