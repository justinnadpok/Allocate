// @flow

import React from 'react';
import { generate } from 'shortid';
import { Link } from 'react-router';
import Button from 'components/Button';

import Close from './close.png';

import './styles.scss';

const menus = [
  {
    title: 'Product',
    link: '/overview',
  },
  {
    title: 'Pricing',
    link: '/pricing',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Login',
    link: '/',
  },
];

type Props = {
  closeMenu: Function,
}
const OverlayMenu = ({ closeMenu }: Props) => ((
  <div className="overlayMenu">
    <div className="row">
      <div className="medium-expand column">
        &nbsp;
      </div>
      <div className="shrink column">
        <Link
          onClick={() => closeMenu()}
        >
          <img
            src={Close}
            alt="Close"
          />
        </Link>
      </div>
    </div>
    <div className="overlayMenu__container">
      {
        menus.map((menu) => (<div
          className="row column text-center mb-mn"
          key={generate()}
        >
          <Link
            className="overlayMenu__item"
            onClick={() => closeMenu()}
            to={menu.link}
          >
            {menu.title}
          </Link>
        </div>))
      }
    </div>
    <div className="overlayMenu__requestContainer">
      <Button className="overlayMenu__button secondary shadow t-capitalize" element={Link} to="/getstarted" onClick={() => closeMenu()}>
          Get Started!
      </Button>
      <p className="overlayMenu__or row">or</p>
      <Link className="overlayMenu__request" to="/requestdemo" onClick={() => closeMenu()}>Request a demo</Link>
    </div>
  </div>
));

export default OverlayMenu;
