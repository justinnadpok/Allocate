// @flow

import React, { Component } from 'react';

import { Link } from 'react-router';
import Button from 'components/Button';

import GetStarted from 'components/GetStarted';

import './styles.scss';

class PricingStarted extends Component {
  render() {
    return(
      <div className="pricingStarted">
        <div className="row column text-center hide-for-small-only">
          <Button
            className="getstarted__button secondary shadow t-capitalize"
            element={Link}
            to="/getstarted"
          >
            Get Started!
          </Button>
          <span className="getstarted__or ml-md">or</span>
          <Link
            className="getstarted__request ml-md"
            to="/requestdemo"
          >Request a demo</Link>
        </div>
        <div className="pricingStarted__contact text-center hide-for-small-only">
          Your 21-day trial starts on the Enterprise plan. Switch to any plan later. <br />
          Questions?
          <span>
            <Link
              className="pricingStarted__link getstarted__request"
              to="/contact"
            > Contact Us!</Link>
          </span>
        </div>

        <div className="show-for-small-only">
          <GetStarted />
        </div>
      </div>
    );
  }
}

export default PricingStarted;
