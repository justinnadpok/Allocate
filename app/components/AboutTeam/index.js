// @flow

import React, { Component } from 'react';
import { generate } from 'shortid';

import './styles.scss';

import Avatar from './avatar.png';
import lTeamMark from './lTeamMark.png';
import sTeamMark from './sTeamMark.png';

const members: Array<Object> = [
  {
    name: 'David Flatow',
    role: 'Co-Founder & CEO',
    avatar: Avatar,
  },
  {
    name: 'Brian Morton',
    role: 'Co-Founder & CTO',
    avatar: Avatar,
  },
  {
    name: 'Erik Zahnlecker',
    role: 'Co-Founder & COO',
    avatar: Avatar,
  },
  {
    name: 'Tyler Chase',
    role: 'Machine Learning Engineer',
    avatar: Avatar,
  },
  {
    name: 'Paweł Olek',
    role: 'Designer',
    avatar: Avatar,
  },
  {
    name: 'AI',
    role: 'Allocate.ai',
    avatar: Avatar,
  },
];

class AboutTeam extends Component {
  render() {
    return(
      <div className="aboutTeam">
        <img className="aboutTeam__teamMark hide-for-small-only" src={lTeamMark} />
        <img className="aboutTeam__teamMark show-for-small-only" src={sTeamMark} />
        <div className="aboutTeam__title text-center">
          Our Team
        </div>
        <div className="aboutTeam__content">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
          to corporate strategy foster collaborative thinking to further the overall value proposition. Organically
          grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        </div>
        <div className="aboutTeam__members row">
          {
            members.map((member) => (
              <div
                className="aboutTeam__memberCard shrink small-6 medium-4"
                key={generate()}
              >
                <div className="aboutTeam__memberAvatar">
                  <img src={member.avatar} />
                </div>
                <div className="aboutTeam__memberLabel">
                  <div className="aboutTeam__memberName">
                    {member.name}
                  </div>
                  <div className="aboutTeam__memberRole">
                    {member.role}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default AboutTeam;
