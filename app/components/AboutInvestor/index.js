// @flow

import React, { Component } from 'react';
import { generate } from 'shortid';

import Avatar from './avatar.png';
import InvestorMark from './investorMark.png';

import './styles.scss';

const investors: Array<Object> = [
  {
    name: 'Steve Blank',
    role: 'Godfather of the Lean Startup.',
    avatar: Avatar,
  },
  {
    name: 'Jeff Epstein',
    role: 'Operating Partner, Bessemer Ventures. Former CFO, Oracle.',
    avatar: Avatar,
  },
  {
    name: 'Tom Bedecarre',
    role: 'Co-Founder of AKQA & President of WPP Ventures',
    avatar: Avatar,
  },
];

class AboutInvestor extends Component {
  render() {
    return(
      <div className="aboutInvestor">
        <div className="aboutInvestor__subject">
          <div className="aboutInvestor__subjectTitle text-center">
            Our Investors
          </div>
          <div className="aboutInvestor__subjectContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus ornare suspendisse.
          </div>
          <div className="text-center">
            <img src={InvestorMark}/>
          </div>
        </div>
        <div className="aboutInvestor__seperator">
        </div>
        <div className="aboutInvestor__investors row">
          <div className="aboutInvestor__investorsTitle text-center column small-12">
            Angel investors
          </div>
          {
            investors.map((investor) => (
              <div
                className="aboutInvestor__card small-12 medium-4 text-center"
                key={generate()}
              >
                <div className="aboutInvestor__cardAvatar">
                  <img src={investor.avatar} className="aboutInvestor__cardImage" />
                </div>
                <div className="aboutInvestor__cardName">
                  {investor.name}
                </div>
                <div className="aboutInvestor__cardRole">
                  {investor.role}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default AboutInvestor;
