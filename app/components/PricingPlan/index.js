// @flow

import React, { Component } from 'react';
import cx from 'classnames';

import './styles.scss';

class PricingPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: 'monthly',
    };
  }
  render() {
    const { plan } = this.state;
    return (
      <div className="pricingPlan">
        <div
          className={cx('pricingPlan__item', { 'pricingPlan__item--active': plan === 'monthly' })}
          onClick={() => this.setState({ plan: 'monthly' })}
        >
          Billed monthly
        </div>
        <div
          className={cx('pricingPlan__item', { 'pricingPlan__item--active': plan === 'annually' })}
          onClick={() => this.setState({ plan: 'annually' })}
        >
          Billed annually
        </div>
      </div>
    );
  }
}

export default PricingPlan;
