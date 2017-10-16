// @flow

import React, { Component } from 'react';
import { generate } from 'shortid';

import SVGImage from 'components/SVGImage';

import icon1 from 'images/sprite/landing/icon1.svg';
import icon2 from 'images/sprite/landing/icon2.svg';
import icon3 from 'images/sprite/landing/icon3.svg';
import icon4 from 'images/sprite/landing/icon4.svg';
import icon5 from 'images/sprite/landing/icon5.svg';
import icon6 from 'images/sprite/landing/icon6.svg';
import micon1 from 'images/sprite/landing/micon1.svg';
import micon2 from 'images/sprite/landing/micon2.svg';
import micon3 from 'images/sprite/landing/micon3.svg';
import micon4 from 'images/sprite/landing/micon4.svg';
import micon5 from 'images/sprite/landing/micon5.svg';
import micon6 from 'images/sprite/landing/micon6.svg';

import './styles.scss';

const features: Array<Object> = [
  {
    icon: icon1,
    micon: micon1,
    title: 'Accurate timesheets. On Time.',
  },
  {
    icon: icon2,
    micon: micon2,
    title: 'Make better decisions.',
  },
  {
    icon: icon3,
    micon: micon3,
    title: 'Log Time. From Anywhere.',
  },
  {
    icon: icon4,
    micon: micon4,
    title: 'Act when the time is right.',
  },
  {
    icon: icon5,
    micon: micon5,
    title: 'Constantly improving.',
  },
  {
    icon: icon6,
    micon: micon6,
    title: 'Works with the tools you use.',
  },
];

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <div className="row">
          <div className="small-12 column text-center">
            <p className="feature__title">The Intelligent Time<br /><span className="feature__titleSymbol">&amp;</span><br />Project Management Platform</p>
          </div>
          {features.map((feature) => (
            <div
              className="feature__card small-6 medium-4 column text-center"
              key={generate()}
            >
              <SVGImage src={feature.icon} height="128" className="feature__icon hide-for-small-only" />
              <SVGImage src={feature.micon} height="96" className="feature__icon show-for-small-only" />
              <p className="feature__cardTitle">{feature.title}</p>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default Feature;
