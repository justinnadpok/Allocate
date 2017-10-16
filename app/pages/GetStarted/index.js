// @flow

import React, { Component } from 'react';

import FormInput from 'components/FormInput';

import { Link, browserHistory } from 'react-router';
import Button from 'components/Button';
import SVGImage from 'components/SVGImage';

import Logo from 'images/sprite/form/form_logo.svg';

import NameIcon from 'images/sprite/form/user_name.svg';
import CompanyIcon from 'images/sprite/form/company_name.svg';
import EmailIcon from 'images/sprite/form/email.svg';
import PasswordIcon from 'images/sprite/form/password.svg';

import Close from 'images/sprite/form/close.png';

import './styles.scss';

type Props = {
  closeMenu: Function,
}

const GetStartedPage = ({ closeMenu }: Props) => ((
      <div className="getStartedPage">
        <div className="getStartedPage__header row align-middle">
          <div className="getStartedPage__logo medium-expand column">
            <Link to="/">
              <SVGImage src={Logo} width="185" height="40" className="hide-for-small-only"/>
              <SVGImage src={Logo} width="148" height="32" className="show-for-small-only"/>
            </Link>
          </div>
          <div className="getStartedPage__signin hide-for-small-only">
            Already have an account?&nbsp;
            <span>
              <Link className="getStartedPage__signLink">
                Sign In
              </Link>
            </span>
          </div>
          <div className="shrink column show-for-small-only">
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
        <div className="getStartedPage__title">
          No credit card required
        </div>
        <div className="getStartedPage__subTitle">
          No credit card required
        </div>
        <div className="getStartedPage__form row">
          <div className="getStartedPage__field column small-12">
            <FormInput
              icon={NameIcon}
              placeholder="Full name"
            />
          </div>
          <div className="getStartedPage__field column small-12">
            <FormInput
              icon={CompanyIcon}
              placeholder="Company name"
            />
          </div>
          <div className="getStartedPage__field column small-12">
            <FormInput
              icon={EmailIcon}
              placeholder="Email address"
            />
          </div>
          <div className="getStartedPage__field column small-12">
            <FormInput
              icon={PasswordIcon}
              placeholder="Password"
            />
          </div>
          <div className="getStartedPage__field column small-12">
            <FormInput
              icon={PasswordIcon}
              placeholder="Reenter password"
            />
          </div>
          <div className="getStartedPage__submit column small-12 text-center">
            <Button
              className="getStartedPage__button secondary shadow t-capitalize"
              element={Link}
              to="/"
            >
              Let's Do this!
            </Button>
          </div>
        </div>
        <div className="getStartedPage__terms">
          You agree to the Allocate&nbsp;
          <span><Link className="getStartedPage__termLink">Terms and Conditions</Link></span>
          <br/>and&nbsp;
          <span><Link className="getStartedPage__termLink">Privacy policy</Link></span>.
        </div>
      </div>
    ));

export default GetStartedPage;
