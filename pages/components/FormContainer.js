import React from 'react';
import { css, cx } from '@emotion/css';
import style from '@emotion/styled'


function FormContainer() {
  return (
          <div className={css`
          display:flex;
          justify-content:space-between;`}>
  <div className={css`
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
  `}>
      <span className={css`
              color: #333;
              font-weight: 700;
              font-size: 16px;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
      `}>First Name</span>
      <input type='text' placeholder='Enter First Name' 
      className={css`
      width: 100%;
      height: 35px;
      padding: 6px 12px;
      font-size: 15px;
      line-height: 1.4;
      outline:none;
      color: #555;
      display: block;
      margin-bottom: 30px;
      margin-top: 5px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      font-family: 'Poppins', sans-serif;
      `}/>
      <span className={css`
              color: #333;
              font-weight: 700;
              font-size: 16px;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
      `}>Last Name</span>
      <input type='text' placeholder='Enter Last Name' 
      className={css`
      width: 100%;
      height: 35px;
      padding: 6px 12px;
      font-size: 15px;
      line-height: 1.4;
      outline:none;
      color: #555;
      display: block;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 30px;
      margin-top: 5px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      font-family: 'Poppins', sans-serif;
      `}/>
       <span className={css`
              color: #333;
              font-weight: 700;
              font-size: 16px;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
      `}>Phone Number</span>
      <input type='text' placeholder='+1 6469680378' 
      className={css`
      width: 100%;
      height: 35px;
      padding: 6px 12px;
      font-size: 15px;
      line-height: 1.4;
      outline:none;
      color: #555;
      display: block;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 30px;
      margin-top: 5px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      font-family: 'Poppins', sans-serif;
      `}/>
      <span className={css`
              color: #333;
              font-weight: 700;
              font-size: 16px;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
      `}>Email</span>
      <input type='text' placeholder='name@website.com' 
      className={css`
      width: 100%;
      height: 35px;
      padding: 6px 12px;
      font-size: 15px;
      line-height: 1.4;
      outline:none;
      color: #555;
      display: block;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 30px;
      margin-top: 5px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      font-family: 'Poppins', sans-serif;
      `}/>
      <span className={css`
          display: flex;
          flex-direction: column;
      `}>
      <span className={css`
              color: #333;
              font-weight: 700;
              font-size: 16px;
              text-transform: uppercase;
              font-family: 'Poppins', sans-serif;
      `}>Logo</span>
      <span>
      <span id="filename">Upload Logo</span>
     <label className="filenameLabel" htmlFor="file-upload">Browse<input type="file" id="file-upload"></input></label>  
      </span>
    
      </span>
      
  </div>
  </div>
  );
}

export default FormContainer;
