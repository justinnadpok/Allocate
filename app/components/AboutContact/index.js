// @flow

import React, { Component } from 'react';

import { Link } from 'react-router';
import Button from 'components/Button';

import FacebookIcon from './facebook.png';
import TwitterIcon from './twitter.png';
import GoogleIcon from './gplus.png';
import LinkedinIcon from './linkedin.png';

import './styles.scss';

class AboutContact extends Component {
  render() {
    return (
      <div className="aboutContact row">
        <div className="aboutContact__method column large-6 medium-12 small-12">
          <div className="aboutContact__content">
            <div className="aboutContact__title text-center">
              How to get in touch with us
            </div>
            <div className="aboutContact__office row">
              <div className="column aboutContact__field large-6 small-4">
                OFFICE
              </div>
              <div className="column aboutContact__value large-6 small-8">
                755 Ramona Street<br />
                Palo Alto, CA 94301<br />
                United States
              </div>
            </div>
            <div className="aboutContact__phoneNumber row">
              <div className="column aboutContact__field large-6 small-4">
                PHONE NUMBER
              </div>
              <div className="column aboutContact__value large-6 small-8">
                (111) 111-111
              </div>
            </div>
            <div className="aboutContact__support row">
              <div className="column aboutContact__field large-6 small-4">
                SUPPORT
              </div>
              <div className="column aboutContact__value large-6 small-8">
                support@allocate.ai
              </div>
            </div>
            <div className="aboutContact__follow row">
              <div className="column aboutContact__field large-6 small-4">
                FOLLOW US
              </div>
              <div className="column large-6 small-8">
                <a
                  href="/facebook"
                  target="_blank"
                  className="aboutContact__socialIcon"
                >
                  <img src={FacebookIcon} width="24" />
                </a>
                <a
                  href="/facebook"
                  target="_blank"
                  className="aboutContact__socialIcon"
                >
                  <img src={TwitterIcon} width="24" />
                </a>
                <a
                  href="/facebook"
                  target="_blank"
                  className="aboutContact__socialIcon"
                >
                  <img src={GoogleIcon} width="24" />
                </a>
                <a
                  href="/facebook"
                  target="_blank"
                  className="aboutContact__socialIcon"
                >
                  <img src={LinkedinIcon} width="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutContact__direct column large-6 medium-12 small-12 text-center">
          <div className="aboutContact__directContainer">
            <div className="aboutContact__directTitle">
              Let's talk about how Allocate can help you.
            </div>
            <Button
              className="aboutContact__button secondary shadow t-capitalize"
              element={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContact;
