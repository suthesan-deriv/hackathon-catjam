import React from 'react';
import { css, cx } from '@emotion/css';
import {
  headerPosition,
  headerLogoCss,
  headerFlex,
  headerDashboardButtonCss
} from './style'

const Header = () => {
  return (
    <div>
      <header className={headerPosition}>
        <a className={headerLogoCss}>QR CODE GENERATOR</a>
       

      </header>
    </div>
  )
}

export default Header;

/* <li className={css`
          font-size: 18px;
          font-weight: 700;
          color: #812435;
          padding:0.5em;
          text-transform: uppercase;
          box-shadow: 0px 0px 0px #fff;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.25);
          border-top: 1px solid rgba(255,255,255,0.5);
          border-left: 1px solid rgba(255,255,255,0.5);
          border-radius: 25px;
          margin-right:20px;  
          background-image: linear-gradient(to right,pink, lightblue);
          &:hover {
            background-image: linear-gradient(to right,lightblue, pink);
            box-shadow: 0px 0px 3px #fff;
          }
          cursor:pointer; 
          `}>
            DashBoard
        </li> */