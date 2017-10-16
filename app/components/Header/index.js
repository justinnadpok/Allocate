// @flow

import React from 'react';
import Link from 'components/Link';

import SVGImage from 'components/SVGImage';

import Button from 'components/Button';

import MainMenu from './MainMenu';
import Logo from 'images/sprite/logo.svg';
import MLogo from 'images/sprite/mLogo.svg';
import Hamburger from './hamburger.png';

import './styles.scss';

type Props = {
  openOverlayMenu: Function,
}
const Header = ({ openOverlayMenu }: Props) => ((
  <div className="header">
    <div className="header__inner row align-middle show-for-large">
      <div className="medium-expand column">
        <Link to="/">
          <SVGImage src={Logo} width="185" height="40" />
        </Link>
      </div>
      <div className="column">
        <MainMenu />
      </div>
      <Link className="header__login">
        Login
      </Link>
      <Link
        className="button header__getstarted"
        to="/getstarted"
      >Get Started!</Link>
    </div>
    <div className="header__inner row align-middle show-for-medium-only">
      <div className="header__logo medium-expand column">
        <Link to="/">
          <SVGImage src={Logo} width="185" height="40" />
        </Link>
      </div>
      <div className="header__overlayMenu shrink column">
        <Link
          onClick={() => openOverlayMenu()}
        >
          <img
            src={Hamburger}
            alt="hamburger"
          />
        </Link>
      </div>
    </div>
    <div className="header__inner row align-middle show-for-small-only">
      <div className="header__logo medium-expand column">
        <Link to="/">
          <SVGImage src={MLogo} width="111" height="24" />
        </Link>
      </div>
      <div className="header__overlayMenu shrink column">
        <Link
          onClick={() => openOverlayMenu()}
        >
          <img
            src={Hamburger}
            alt="hamburger"
          />
        </Link>
      </div>
    </div>
  </div>
));

export default Header;
