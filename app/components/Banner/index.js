// @flow

import React from 'react';
import { Link } from 'react-router';

import Button from 'components/Button';

import SVGImage from 'components/SVGImage';

import BannerImage from 'images/sprite/landing/banner.svg';

import './styles.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner row">
        <div className="banner__content small-12 large-6 column align-self-middle show-for-large">
          <p className="banner__title">Inteligent Time Keeping<br />and Project Analytics</p>
          <p className="banner__subTitle">Allocate is the easiest way to track time, view project health, and act on insights to drive a more efficient, profitable organization</p>
          <div className="row">
            <div className="shrink column">
              <Button
                className="banner__button secondary shadow t-capitalize"
                element={Link}
                to="/getstarted"
              >
                Get Started!
              </Button>
            </div>
            <p className="banner__or shrink column">or</p>
            <div className="banner__requestContainer column">
              <Link className="banner__request"
                to="/requestdemo"
              >Request a demo</Link>
            </div>
          </div>
        </div>
        <div className="banner__content small-12 large-6 column align-self-middle show-for-large">
          <SVGImage src={BannerImage} />
        </div>
        <div className="banner__content small-12 large-6 column show-for-medium-only">
          <p className="banner__title">Inteligent Time Keeping<br />and Project Analytics</p>
          <p className="banner__subTitle">Allocate is the easiest way to track time, view project health, and act on insights to drive a more efficient, profitable organization</p>
          <div className="banner__buttonContainer">
            <Button className="banner__button secondary shadow t-capitalize" element={Link} to="/getstarted">
                Get Started!
            </Button>
            <p className="banner__or row">or</p>
            <Link className="banner__request" to="/requestdemo">Request a demo</Link>
          </div>
        </div>
        <div className="banner__content small-12 large-6 column align-self-middle show-for-medium-only text-center">
          <SVGImage src={BannerImage}  height="650" />
        </div>
        <div className="banner__content small-12 large-6 column show-for-small-only">
          <p className="banner__title">Inteligent Time Keeping<br />&amp;<br />Project Analytics</p>
          <p className="banner__subTitle">Allocate is the easiest way to track time, view project health, and act on insights to drive a more efficient, profitable organization</p>
          <div className="banner__buttonContainer">
            <Button className="banner__button secondary shadow t-capitalize" element={Link} to="/getstarted">
                Get Started!
            </Button>
            <p className="banner__or row">or</p>
            <Link className="banner__request" to="/requestdemo">Request a demo</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
