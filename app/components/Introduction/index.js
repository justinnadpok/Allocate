// @flow

import React, { Component } from 'react';
import cx from 'classnames';

import SVGImage from 'components/SVGImage';

import { Link } from 'react-router';
import Button from 'components/Button';

import './styles.scss';

type Props = {
  title?: string,
}

class Introduction extends Component {
  props: Props
  render() {
    const { title } = this.props;
    return (
      <div className="introduction">
        <div
          className="introduction__title text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="introduction__buttonContainer row column text-center hide-for-small-only">
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

        <div className="introduction__buttonContainer text-center show-for-small-only">
          <Button
            className="getstarted__button secondary shadow t-capitalize"
            element={Link}
            to="/how-it-works"
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

export default Introduction;
