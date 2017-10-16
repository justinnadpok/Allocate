// @flow

import React, { Component } from 'react';

import OverviewSubject from 'components/OverviewSubject';
import OverviewFeature from 'components/OverviewFeature';
import GetStarted from 'components/GetStarted';

class OverviewPage extends Component {
  render() {
    return(
      <div>
        <OverviewSubject />
        <OverviewFeature />
        <GetStarted />
      </div>
    );
  }
}

export default OverviewPage;
