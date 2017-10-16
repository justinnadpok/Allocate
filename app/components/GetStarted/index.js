// @flow

import React, { Component } from 'react';
import cx from 'classnames';

import { Link } from 'react-router';
import Button from 'components/Button';

import './styles.scss';

type Props = {
  background?: boolean,
}
class GetStarted extends Component {
  props: Props
  render() {
    const { background } = this.props;
    return (
      <div className={cx('getstarted text-center', { 'getstarted--background': background })}>
        <p className="getstarted__title">Get started with Allocate</p>
        <p className="getstarted__subTitle hide-for-large">Start your 21 day free trial.<br/> No credit card required</p>
        <p className="getstarted__subTitle show-for-large">Start your 21 day free trial. No credit card required</p>
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
        <div className="getstarted__buttons show-for-small-only">
          <Button
            className="getstarted__button secondary shadow t-capitalize"
            element={Link}
            to="/getstarted"
          >
            Get Started!
          </Button>
          <p className="getstarted__or">or</p>
          <Link
            className="getstarted__request"
            to="/requestdemo"
          >Request a demo</Link>
        </div>
      </div>
    );
  }
}

export default GetStarted;
