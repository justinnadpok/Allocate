// @flow

import React, { Component } from 'react';

import PricingTitle from 'components/PricingTitle';
import PricingStarted from 'components/PricingStarted';
import PricingPlan from 'components/PricingPlan';
import PricingCards from 'components/PricingCards';

class PricingPage extends Component {
  render() {
    return (
      <div>
        <PricingTitle />
        <div className="row align-center">
          <div className="column">
            <PricingPlan />
          </div>
        </div>
        <PricingCards />
        <PricingStarted />
      </div>
    );
  }
}

export default PricingPage;
