// @flow

import React, { Component } from 'react';

import FormInput from 'components/FormInput';
import GetStarted from 'components/GetStarted';

import { Link } from 'react-router';
import Button from 'components/Button';

import NameIcon from 'images/sprite/form/user_name.svg';
import EmailIcon from 'images/sprite/form/email.svg';
import PhoneIcon from 'images/sprite/form/phone.svg';
import EmployeeIcon from 'images/sprite/form/company_name.svg';

import './styles.scss';

class RequestDemoPage extends Component {
  render() {
    return (
      <div className="requestDemo">
        <div className="requestDemo__title column large-12 medium-12 text-center">
          Find out what Allocate can do for you
        </div>
        <div className="requestDemo__subTitle column large-12 medium-12 text-center">
          Use the form below to get in touch with Allocate and schedule a demo.
        </div>
        <div className="requestDemo__form row">
          <div className="requestDemo__field column medium-6 small-12">
            <FormInput
              icon={NameIcon}
              placeholder="Full name"
            />
          </div>
          <div className="requestDemo__field column medium-6 small-12">
            <FormInput
              icon={EmailIcon}
              placeholder="Email"
            />
          </div>
          <div className="requestDemo__field column medium-6 small-12">
            <FormInput
              icon={PhoneIcon}
              placeholder="Phone Number"
            />
          </div>
          <div className="requestDemo__field column medium-6 small-12">
            <FormInput
              icon={EmployeeIcon}
              placeholder="Number of Employees"
            />
          </div>
          <div className="requestDemo__schedule column small-12 text-center">
            <Button
              className="getstarted__button secondary shadow t-capitalize"
              element={Link}
              to="/how-it-works"
            >
              Schedule a demo!
            </Button>
          </div>
        </div>
        <div className="requestDemo__seperator" />
        <GetStarted />
      </div>
    );
  }
}

export default RequestDemoPage;
