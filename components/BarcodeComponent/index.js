import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { outerDiv } from './style'
import SocialMediaBar from '../SocialMediaBar'


const BarcodeComponent = ({ qr_url, gif = '' }) => {
  // const src = 'https://static.beaconstac.com/assets/img/qrcg-api-bnw-1.png'

  return (
    <div className={outerDiv}>
      <SocialMediaBar />
      {qr_url && (
        <div>
          <Image
            alt="barcode"
            loader={() => qr_url}
            src={qr_url}
            unoptimized
            width={300}
            height={300}
          />
        </div>
      )}

      <div className={outerDiv}>
        {gif && (
          <Image alt="barcode" tab="giftab" loader={() => gif} unoptimized src={gif} width={300} height={300} />
        )}
      </div>
    </div>
  )
}

export default BarcodeComponent
