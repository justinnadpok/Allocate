// @flow

import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import FormInput from 'components/FormInput';
import FormTextArea from 'components/FormTextArea';

import Button from 'components/Button';
import SVGImage from 'components/SVGImage';

import Logo from 'images/sprite/form/form_logo.svg';
import Close from 'images/sprite/form/close.png';

import './styles.scss';

type Props = {
  closeMenu: Function,
}

const ContactPage = ({ closeMenu }: Props) => ((
      <div className="contactPage">
        <div className="contactPage__header row align-middle">
          <div className="contactPage__logo medium-expand column">
            <Link to="/">
              <SVGImage src={Logo} width="185" height="40" className="hide-for-small-only"/>
              <SVGImage src={Logo} width="148" height="32" className="show-for-small-only"/>
            </Link>
          </div>
          <div className="shrink column">
            <Link
              onClick={() => browserHistory.goBack()}
            >
              <img
                src={Close}
                alt="Close"
              />
            </Link>
          </div>
        </div>
        <div className="contactPage__title">
          Get In Touch
        </div>
        <div className="contactPage__subTitle">
          If you’re already a Allocte user, please&nbsp;
          <span>
            <Link className="contactPage__signLink">
              Sign In
            </Link>
          </span>
          &nbsp;before contacting us.
        </div>
        <div className="contactPage__form row">
          <div className="contactPage__field column medium-6 small-12 large-6">
            <FormInput
              className="contactPage__name"
              placeholder="Your name"
            />
          </div>
          <div className="contactPage__field column medium-6 small-12 large-6">
            <FormInput
              className="contactPage__email"
              placeholder="Email Address"
            />
          </div>
          <div className="contactPage__field column small-12">
            <FormTextArea
              className="contactPage__message"
              placeholder="Your message"
            />
          </div>
          <div className="contactPage__submit column small-12">
            <Button
              className="contactPage__button secondary shadow t-capitalize"
              element={Link}
              to="/"
            >
              Send it!
            </Button>
          </div>
        </div>
      </div>
    ));

export default ContactPage;
