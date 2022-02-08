import React from 'react';
import { css, cx } from '@emotion/css'
import InnerContainer from '../InnerContainer';
import {
  copyright,
  TabBackground,
} from './style'


const color = 'white'

const Tabcomponent = () => {

  return (
    <>
      <div
        className={TabBackground}
      >
        <InnerContainer />

      </div>
      <span className={copyright}>© Copyright 2022 CatJam. All rights reserved.</span>
    </>

  )
}

export default Tabcomponent;
