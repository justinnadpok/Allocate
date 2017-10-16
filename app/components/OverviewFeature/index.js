// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

import SVGImage from 'components/SVGImage';

import LStep1Img from 'images/sprite/overview/Lstep_1.svg';
import LStep2Img from 'images/sprite/overview/Lstep_2.svg';
import sStep1Img from 'images/sprite/overview/Sstep_1.svg';
import sStep2Img from 'images/sprite/overview/Sstep_2.svg';

import arrow from 'images/sprite/arrow.png';

import './styles.scss';

class OverviewFeature extends Component {
  render() {
    return(
      <div className="overviewFeature">
        <div className="overviewFeature__feature1 row">
          <div className="column large-6 small-12">
            <div className="overviewFeature__container1">
              <div className="overviewFeature__title">
                Intelligent Timekeeping
              </div>
              <div className="overviewFeature__image column medium-12 show-for-medium-only">
                <SVGImage src={LStep1Img} />
              </div>
              <div className="overviewFeature__image column small-12 show-for-small-only">
                <SVGImage src={sStep1Img} />
              </div>
              <div className="overviewFeature__content">
                Say goodbye to time entry tools of the past. With Allocate, simply connect your email, calendar, and computer data, and let us do the rest. Our machine learning algorithms help you log your time easily and accurately, so you can get back to the work you love.
              </div>
              <div className="overviewFeature__link">
                <Link className="overviewFeature__stepLink" to="/timekeeping">
                  <img className="overviewFeature__stepLink--arrow" src={arrow} />
                  Learn more about Intelligent time keeping
                </Link>
              </div>
            </div>
          </div>
          <div className="overviewFeature__image column large-6 show-for-large">
            <SVGImage src={LStep1Img} />
          </div>
        </div>


        <div className="overviewFeature__feature2 row">
          <div className="overviewFeature__image column large-6 show-for-large">
            <SVGImage src={LStep2Img} />
          </div>
          <div className="column large-6 small-12">
            <div className="overviewFeature__container2">
              <div className="overviewFeature__title show-for-large">
                Project Management &amp; Analytics
              </div>
              <div className="overviewFeature__title hide-for-large">
                Project Management &amp;<br />
                Analytics
              </div>
              <div className="overviewFeature__image column medium-12 show-for-medium-only">
                <SVGImage src={LStep2Img} />
              </div>
              <div className="overviewFeature__image column small-12 show-for-small-only">
                <SVGImage src={sStep2Img} />
              </div>
              <div className="overviewFeature__content">
                Timesheet data provides invaluable insights into the health of your organization. With Allocate, use this data to run the best organization you can. View project health, understand team member utilization, track important metrics, generate invoices, and more. Further, with actionable items, be alerted in real-time of “hotspots” that need to be addressed when the time is right.
              </div>
              <div className="overviewFeature__link">
                <Link className="overviewFeature__stepLink" to="/project">
                  <img className="overviewFeature__stepLink--arrow" src={arrow} />
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

export default OverviewFeature;
