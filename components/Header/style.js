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
        @media (max-width: 991px) {
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
      }
`
export const headerDashboardButtonCss = css`
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
          @media (max-width: 991px) {
            font-size:0.6em
          }
          
          
`


export const headerLogoCss = css`
         color:#812435;
        font-weight:700;
        text-decoration:none;
        font-size:2em;
        text-transform: uppercase;
        padding:0.3em;
        font-family: 'Poppins', sans-serif;
        @media (max-width: 991px) {
        font-size: 1.5em;
        }
         @media (max-width: 768px) {
        font-size: 0.9em;
            padding: 1.1em;
        }
           
     @media (max-width: 500px) {
         font-size: 0.9em;
          padding: 0.3em;
          text-align: center;
        }
`

export const headerFlex = css`
         display:flex;
        list-style:none;
        padding:0.3em;
        @media (max-width: 991px) {
            margin-top:0;
            
          }
`

export const deleteButtonCotainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
    cursor:pointer;
`