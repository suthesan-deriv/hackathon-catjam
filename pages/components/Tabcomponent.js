import React from 'react';
import { css, cx } from '@emotion/css'
import InnerContainer from './InnerContainer';


const color = 'white'

const Tabcomponent = () => {

  return ( <>
    <div
       className={css`
         position:relative;
         padding: 100px;
         background-image: linear-gradient(pink, lightblue);
         font-size: 24px;
         border-radius: 4px;
         min-height: 100vh;
         &:hover {
           color: ${color};
         }
       `}
     >
       <InnerContainer />
     </div>
   
     </>

  )
}

export default Tabcomponent;
