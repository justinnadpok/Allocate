// @flow

import React, { Component } from 'react';

import SVGImage from 'components/SVGImage';

import LStepImg1 from 'images/sprite/management/L_step_1.svg';
import LStepImg2 from 'images/sprite/management/L_step_2.svg';
import LStepImg3 from 'images/sprite/management/L_step_3.svg';
import SStepImg1 from 'images/sprite/management/S_step_1.svg';
import SStepImg2 from 'images/sprite/management/S_step_2.svg';
import SStepImg3 from 'images/sprite/management/S_step_3.svg';


import Step3BG from 'images/sprite/management/step3.svg';

import './styles.scss';

class ManagementContent extends Component {
  render() {
    return(
      <div className="managementContent">
        <div className="managementContent__feature row">
          <div className="column large-6">
            <div className="managementContent__container">
              <div className="managementContent__featureTitle">
                Stay on top of your projects
              </div>
              <div className="managementContent__image column medium-12 show-for-medium-only">
                <SVGImage src={LStepImg1} />
              </div>
              <div className="managementContent__image column small-12 show-for-small-only">
                <SVGImage src={SStepImg1} />
              </div>
              <div className="managementContent__featureContent">
                Allocate makes accurate and timely time entry nearly effortless. Now, use that rich data to understand the health of projects at your company. You’ll be able to get a pulse on project progress, understand team contribution on an hourly and dollar basis, review time entries, easily make projections, and a lot more - all in real time with Allocate.
              </div>
            </div>
          </div>
          <div className="managementContent__image column large-6 show-for-large">
            <SVGImage src={LStepImg1} />
          </div>
        </div>
        <div className="managementContent__feature row">
          <div className="managementContent__image column large-6 show-for-large">
            <SVGImage src={LStepImg2} />
          </div>
          <div className="column large-6">
            <div className="managementContent__container">
              <div className="managementContent__featureTitle">
                Don’t dig for insights, let us find them for you
              </div>
              <div className="managementContent__image column medium-12 show-for-medium-only">
                <SVGImage src={LStepImg2} />
              </div>
              <div className="managementContent__image column small-12 show-for-small-only">
                <SVGImage src={SStepImg2} />
              </div>
              <div className="managementContent__featureContent">
                A lot of valuable information is hidden in time entry data, but insights from that may be hard to come by. That’s why we created Actionable Items - insights we’ve uncovered for you that are brought to your attention, so that you can act when the time is right, not when it’s too late.
              </div>
            </div>
          </div>
        </div>
        <div className="managementContent__feature row">
          <div className="column large-6">
            <div className="managementContent__container">
              <div className="managementContent__featureTitle">
                With better data, forecast more effectively / See around corners
              </div>
              <div className="managementContent__image column medium-12 show-for-medium-only">
                <SVGImage src={LStepImg3} />
              </div>
              <div className="managementContent__image column small-12 show-for-small-only">
                <SVGImage src={SStepImg3} />
              </div>
              <div className="managementContent__featureContent">
                With truly accurate and timely timesheet data, you’ll be able to forecast like a pro. Use this rich data to deliver future projects on budget, keep your team happy, and see around corners.
              </div>
            </div>
          </div>
          <div className="managementContent__image column large-6 show-for-large">
            <SVGImage src={LStepImg3} />
          </div>
        </div>
      </div>
    );
  }
}

export default ManagementContent;
