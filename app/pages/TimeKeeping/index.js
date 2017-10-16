// @flow

import React, { Component } from 'react';

import TimeKeepingIntroduction from 'components/TimeKeepingIntroduction';
import TimeKeepingWorks from 'components/TimeKeepingWorks';
import TimeKeepingSteps from 'components/TimeKeepingSteps';
import TimeKeepingFeatures from 'components/TimeKeepingFeatures';
import GetStarted from 'components/GetStarted';

class TimeKeepingPage extends Component {
  render() {
    return (
      <div>
        <TimeKeepingIntroduction title="Allocate makes time entry a joy!" />
        <TimeKeepingWorks />
        <TimeKeepingSteps />
        <TimeKeepingFeatures />
        <GetStarted />
      </div>
    );
  }
}

export default TimeKeepingPage;
