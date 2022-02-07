import { css, cx } from '@emotion/css';
import { css as ReactCss } from '@emotion/react';

export const headerPosition = css`
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
`

export const headerLogoCss = css`
         color:#812435;
        font-weight:700;
        text-decoration:none;
        font-size:2em;
        text-transform: uppercase;
        padding:0.3em;
        font-family: 'Poppins', sans-serif;
`

export const headerFlex = css`
         display:flex;
        list-style:none;
        padding:0.3em;
`