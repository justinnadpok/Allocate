// @flow

import React, { Component } from 'react';

import { generate } from 'shortid';

import './styles.scss';

const features: Array<Object> = [
  {
    title: 'Project and Team Analytics',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Actionable Items',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Better Forecasting',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Timesheet approvals',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Custom Reporting & Invoicing',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
  {
    title: 'Works with the tools you already use',
    content: 'The Death Star plans are not in the main computer. Where are those transmissions you intercepted?',
  },
];

class ManagementFeature extends Component {
  render() {
    return(
      <div className="managementFeature row">
        <div className="row">
          <div className="managementFeature__title small-12 column text-center">
            Everything you need to run<br/>the best business you can.
          </div>
          {features.map((feature) => (
            <div
              className="managementFeature__card small-12 medium-4 column text-center"
              key={generate()}
            >
              <div className="managementFeature__cardTitle">{feature.title}</div>
              <div className="managementFeature__cardContent">{feature.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ManagementFeature;
