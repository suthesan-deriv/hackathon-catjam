import React from 'react';
import { css, cx } from '@emotion/css';
import Header from '../Header';
import FormContainer from '../FormContainer';
import {
  InnerContainerBanner
} from './style'


const InnerContainer = () => {
  return (
    <div
      className={InnerContainerBanner}
    >
      <Header />
      <FormContainer />
    </div>
  )
}

export default InnerContainer;
