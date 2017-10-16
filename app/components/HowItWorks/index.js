// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

import SVGImage from 'components/SVGImage';
import NumberedTitle from 'components/NumberedTitle';

import Lillustrator from 'images/sprite/howitworks/L_illustrator.svg';
import Millustrator from 'images/sprite/howitworks/M_illustrator.svg';
import Sillustrator from 'images/sprite/howitworks/S_illustrator.svg';

import arrow from './arrow.png';

import './styles.scss';

class HowItWorks extends Component {
  render() {
    return (
      <div className="howItWorks">
        <div className="row column text-center">
          <p className="howItWorks__title">How it works</p>
        </div>
        <div className="row column">
          <div className="howItWorks__step howItWorks__step--1">
            <NumberedTitle
              number={1}
            >
              <p className="howItWorks__subTitle hide-for-small-only">Intelligent time keeping</p>
            </NumberedTitle>
            <p className="howItWorks__subTitle show-for-small-only">Intelligent time keeping</p>
            <p className="howItWorks__stepDesc">
              Sync your data.<br />
              Review and adjust your timesheet.<br />
              Submit.
            </p>
            <div className="howItWorks__linkContainer">
              <Link className="howItWorks__stepLink" to="/timekeeping">
                <img className="howItWorks__stepLink--arrow hide-for-small-only" src={arrow} />
                Learn more about Intelligent time keeping
              </Link>
            </div>
          </div>
        </div>
        <div className="row column howItWorks__illustrator">
          <SVGImage src={Lillustrator} className="show-for-large" />
          <SVGImage src={Millustrator} className="show-for-medium-only" />
          <SVGImage src={Sillustrator} className="show-for-small-only" />
        </div>
        <div className="row column">
          <div className="howItWorks__step howItWorks__step--2">
            <div className="column large-6 large-offset-6">
              <NumberedTitle
                number={2}
              >
                <p className="howItWorks__subTitle hide-for-small-only">Project Management<br />&amp; Analytics</p>
              </NumberedTitle>
              <p className="howItWorks__subTitle show-for-small-only">Project Management<br />&amp; Analytics</p>
              <p className="howItWorks__stepDesc">
                Good data in. <br />
                Sounds insights out.
              </p>
              <div className="howItWorks__linkContainer">
                <Link className="howItWorks__stepLink" to="/project">
                  <img className="howItWorks__stepLink--arrow hide-for-small-only" src={arrow} />
                  Learn more about Project Management &amp; Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
