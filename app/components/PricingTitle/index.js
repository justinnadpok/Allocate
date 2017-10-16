// @flow

import React, { Component } from 'react';

import './styles.scss';

class PricingTitle extends Component {
  render() {
    return(
      <div className="pricingTitle">
        <div className="pricingTitle__main text-center">
          Simple pricing for your team
        </div>
        <div className="pricingTitle__free text-center">
          Start your 21 day free trial. No credit card required.
        </div>
      </div>
    );
  }
}

export default PricingTitle;
