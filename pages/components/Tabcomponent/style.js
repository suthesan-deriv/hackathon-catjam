import { css, cx } from '@emotion/css';
import { css as ReactCss } from '@emotion/react';


const color = 'white'

export const TabBackground = css`
         position:relative;
         padding: 100px;
         background-image: linear-gradient(pink, lightblue);
         font-size: 24px;
         border-radius: 4px;
         min-height: 100vh;
         &:hover {
           color: ${color};
         }
`

export const copyright = css`
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: #333;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          font-family: 'Poppins', sans - serif;
          text-align: center; 
`

 