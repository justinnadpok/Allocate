// @flow

import React, { Component } from 'react';
import SVGImage from 'components/SVGImage';

import LBackground1 from 'images/sprite/timekeeping/l_steps_bg1.svg';
import LBackground2 from 'images/sprite/timekeeping/l_steps_bg2.svg';
import MBackground1 from 'images/sprite/timekeeping/m_steps_bg1.svg';
import MBackground2 from 'images/sprite/timekeeping/m_steps_bg2.svg';
import SBackground1 from 'images/sprite/timekeeping/s_steps_bg1.svg';
import SBackground2 from 'images/sprite/timekeeping/s_steps_bg2.svg';

import './styles.scss';

class TimeKeepingSteps extends Component {
  render() {
    return(
      <div className="timeKeepingSteps">
        <div className="show-for-large">
          <div className="timeKeepingSteps row">
            <div className="timeKeepingSteps__illustrator column large-6">
              <SVGImage src={LBackground1} />
            </div>
            <div className="column large-6">
              <div className="timeKeepingSteps__content">
                <div className="timeKeepingSteps__title">
                  Allocate gets smarter<br/>every day
                </div>
                <div className="timeKeepingSteps__subTitle">
                  Everyday that you log your time with Allocate, our machine learning algorithms get smarter, so that your time entry becomes easier, and more accurate.
                </div>
              </div>
            </div>
          </div>
          <div className="timeKeepingSteps row">
            <div className="column large-6">
              <div className="timeKeepingSteps__content">
                <div className="timeKeepingSteps__title">
                  Your data belongs to you, and no one else <span className="timeKeepingSteps__sTitle">(not even your boss)</span>
                </div>
                <div className="timeKeepingSteps__subTitle">
                  The data that Allocate collects is only visible by each individual person, is only used to help people log their time. Time entries are only numbers of hours worked, and never include the data used to create them.
                </div>
              </div>
            </div>
            <div className="timeKeepingSteps__illustrator column large-6">
              <SVGImage src={LBackground2} />
            </div>
          </div>
        </div>
        <div className="hide-for-large">
          <div className="timeKeepingSteps__step">
            <div className="timeKeepingSteps__title">
              Allocate gets smarter<br/>every day
            </div>
            <div className="timeKeepingSteps__illustrator">
              <SVGImage src={MBackground1} className="show-for-medium-only" />
              <SVGImage src={SBackground1} className="show-for-small-only" />
            </div>
            <div className="timeKeepingSteps__subTitle">
              Everyday that you log your time with Allocate, our machine learning algorithms get smarter, so that your time entry becomes easier, and more accurate.
            </div>
          </div>
          <div className="timeKeepingSteps__step">
            <div className="timeKeepingSteps__title">
              Your data belongs to you, and no one <br/>
              else <span className="timeKeepingSteps__sTitle">(not even your boss)</span>
            </div>
            <div className="timeKeepingSteps__illustrator">
              <SVGImage src={MBackground2} className="show-for-medium-only" />
              <SVGImage src={SBackground2} className="show-for-small-only" />
            </div>
            <div className="timeKeepingSteps__subTitle">
              The data that Allocate collects is only visible by each individual person, is only used to help people log their time. Time entries are only numbers of hours worked, and never include the data used to create them.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeKeepingSteps;
