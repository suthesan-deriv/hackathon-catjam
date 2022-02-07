import React from 'react';

const Loader = () => {
  return (
   <>
      <div id="wrapper">
        <div id="cat-mask">
          <div id="cat">
            <div className="body-up"></div>
            <div className="body-down"></div>
            <div className="body-inside"></div>
            <div className="body-mask"></div>
            <div className="body-inside-wrapper">
              <div className="body-inside-fix"></div>
            </div>
            <div className="body-inside-wrapper-end">
              <div className="body-inside-fix end"></div>
            </div>
            <div className="inner-mask"></div>

            <div className="shape-mask"></div>
            <div className="shape-mask second"></div>
            <div className="cat-ass-wrapper">
              <div className="cat-tail"></div>
              <div className="cat-ass"></div>
              <div className="cat-leg"></div>
              <div className="cat-leg right"></div>
            </div>
            <div className="cat-head-wrapper">
              <div className="cat-head">
                <div className="cat-eye"></div>
                <div className="cat-eye right"></div>
                <div className="cat-mouth-wrapper">
                  <div className="cat-mouth"></div>
                  <div className="cat-mouth-up"></div>
                  <div className="cat-mouth-up right"></div>
                  <div className="cat-beard up"></div>
                  <div className="cat-beard"></div>
                  <div className="cat-beard down"></div>
                  <div className="cat-beard right up"></div>
                  <div className="cat-beard right"></div>
                  <div className="cat-beard right down"></div>
                </div>
              </div>
              <div className="cat-ear"></div>
              <div className="cat-ear right"></div>
              <div className="cat-hand"></div>
              <div className="cat-hand right"></div>
            </div>
          </div>
        </div>
      </div>
   </>
  )

}

export default Loader;
