// @flow

import React, { Component } from 'react';

import SVGImage from 'components/SVGImage';

import FeatureImg from 'images/sprite/overview/feature.svg';

import './styles.scss';

class OverviewSubject extends Component {
  render() {
    return(
      <div className="overviewSubject text-center">
        <div className="overviewSubject__title">
          Intelligent Timesheets.<br />
          Accurate Data. Sound Insights.
        </div>
        <div className="overviewSubject__content">
          We get it. Time keeping is hard. Further, bad timesheet data provides you with poor insight into the health of your projects and organization at large.<br />
          Allocate changes this.<br />
          With AI driving time entry &amp; analytics, you can be confident that what you’re logging is accurate, and that your insights are sound.
        </div>
        <div className="hide-for-small-only">
          <SVGImage className="overviewSubject__image" src={FeatureImg} width="578" height="511" />
        </div>
      </div>
    );
  }
}

export default OverviewSubject;
