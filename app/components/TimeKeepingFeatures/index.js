// @flow

import React, { Component } from 'react';

import { generate } from 'shortid';

import './styles.scss';

const features: Array<Object> = [
  {
    title: 'Log time from anywhere',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Capture offline time',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Customized to you',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: '90 + % accurate',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Secure data',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Works with the tools you already use',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
];

class TimeKeepingFeatures extends Component {
  render() {
    return(
      <div className="timeKeepingFeatures">
        <div className="row">
          <div className="timeKeepingFeatures__title small-12 column text-center">
            Focus on the work you love,<br/>and let Allocate do the rest.
          </div>
          {features.map((feature) => (
            <div
              className="timeKeepingFeatures__card small-12 medium-4 column text-center"
              key={generate()}
            >
              <div className="timeKeepingFeatures__cardTitle">{feature.title}</div>
              <div className="timeKeepingFeatures__cardContent">{feature.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeKeepingFeatures;
