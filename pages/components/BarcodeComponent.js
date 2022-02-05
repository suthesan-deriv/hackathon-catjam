import React from 'react';
import Image from 'next/image';
import { css, cx } from '@emotion/css';
const src = `${'https://static.beaconstac.com/assets/img/qrcg_sample1.jpg'}`;

    

function BarcodeComponent() {
  return (
    <div>
        <div className={css`
          margin-top:40px;
          padding-right: 150px;
          padding-top: 60px;`}>
        <Image 
           alt="barcode" loader={() => src} src={src} width={300} height={300}/>
        </div>
        
    </div>
  )
}

export default BarcodeComponent;
