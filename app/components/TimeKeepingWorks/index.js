// @flow

import React, { Component } from 'react';
import SVGImage from 'components/SVGImage';

import LBackground from 'images/sprite/timekeeping/l_works_bg.svg';
import sBackground1 from 'images/sprite/timekeeping/s_works_bg1.svg';
import sBackground2 from 'images/sprite/timekeeping/s_works_bg2.svg';
import sBackground3 from 'images/sprite/timekeeping/s_works_bg3.svg';

import './styles.scss';

class TimeKeepingWorks extends Component {
  render() {
    return(
      <div className="timeKeepingWorks row">
        <div className="timeKeepingWorks__title column small-12">
          How It Works
        </div>
        <div className="timeKeepingWorks__illustrator column small-12 hide-for-small-only">
          <SVGImage src={LBackground}>
          </SVGImage>
        </div>
        <div className="timeKeepingWorks__illustrator show-for-small-only column small-12">
          <div>
            <div className="timeKeepingWorks__subTitle text-center">
              Sync your data sources
            </div>
            <SVGImage src={sBackground1} className="timeKeepingWorks__background--1">
            </SVGImage>
          </div>
          <div>
            <div className="timeKeepingWorks__subTitle text-center">
              Allocate’s AI processes your data,<br /> so you don’t have to
            </div>
            <SVGImage src={sBackground2} className="timeKeepingWorks__background--2">
            </SVGImage>
          </div>
          <div>
            <div className="timeKeepingWorks__subTitle text-center">
              Review &amp; Submit
            </div>
            <SVGImage src={sBackground3} className="timeKeepingWorks__background--3">
            </SVGImage>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeKeepingWorks;
