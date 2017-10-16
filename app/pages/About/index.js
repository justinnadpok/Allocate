// @flow

import React, { Component } from 'react';

import AboutRoot from 'components/AboutRoot';
import AboutTeam from 'components/AboutTeam';
import AboutContact from 'components/AboutContact';
import AboutInvestor from 'components/AboutInvestor';
import GetStarted from 'components/GetStarted';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <AboutRoot />
        <AboutTeam />
        <AboutContact />
        <AboutInvestor />
        <GetStarted />
      </div>
    );
  }
}

export default AboutPage;
