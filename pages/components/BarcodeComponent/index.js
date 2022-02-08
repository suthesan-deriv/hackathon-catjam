import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  outerDiv
} from './style'


const BarcodeComponent = ({ gif = '' }) => {
  const src = 'https://static.beaconstac.com/assets/img/qrcg-api-bnw-1.png';

  return (
    <div>
      <div className={outerDiv}>
        <Image
          alt="barcode"
          loader={() => src}
          src={src}
          unoptimized
          width={300}
          height={300}
        />

      </div>
      <div className={outerDiv}>
        {gif && <Image
          alt="barcode"
          loader={() => gif}
          unoptimized
          src={gif}
          width={300}
          height={300}
        />}

      </div>
    </div>
  )
}

export default BarcodeComponent;
