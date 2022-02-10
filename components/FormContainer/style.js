import { css, cx } from '@emotion/css';
import { css as ReactCss} from '@emotion/react';

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
   @media (max-width: 991px) {
      flex-direction: column;

   }
`

export const formContainer = css`
  transform:translateX(-100px);
  width:50%;
  padding:40px;
  padding-left:110px;
  box-shadow: 0 15px 15px rgb(0,0,0 / 10%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  margin-top:40px;
  border-radius:25px;
  @media (max-width: 991px) {
        width: auto;
        margin-top: auto;
        transform: translateX(0);
        padding: 0.3em;
            margin-top: 85px;
  }
  @media (max-width: 768px) {
        width: auto;
        margin-top: auto;
        transform: translateX(0);
        padding: 0.3em;
            margin-top: 55px;
  }
`

export const formLabel = css`
  color: #333;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
`

export const inputField = css`
  width: 100%;
  height: 35px;
  padding: 6px 12px;
  font-size: 15px;
  line-height: 1.4;
  outline:none;
  color: #555;
  display: block;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  font-family: 'Poppins', sans-serif;
  
`

export const textField = css`
  width: 100%;
  min-height: 35px;
  padding: 6px 12px;
  font-size: 15px;
  line-height: 1.4;
  outline:none;
  color: #555;
  display: block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  font-family: 'Poppins', sans-serif;
`

export const classError = css`
  color: red;
  font-size: 12px;
  font-style:italic;
`

export const InputGroup = ({ width = 100 }) => ReactCss`
  width: ${width}%;
  margin-bottom: 24px;
   @media (max-width: 991px) {
     width:100%;
   }
`

export const getQrButton = css`
  background-image: linear-gradient(to left, pink, lightblue);
  text-transform: uppercase;
  padding: 0.4em;
  outline:none;
  border:none;
  cursor:pointer;
  &:hover{
    background-image: linear-gradient(to right, pink, lightblue);
  }
`