// @flow

import React, { Component } from 'react';

import { generate } from 'shortid';
import { Link } from 'react-router';

import Carousel from 'components/Carousel';
import Button from 'components/Button';
import TestimonialCard from './Card';

import avatar from './avatar.png';
import left from './left.png';
import right from './right.png';

import './styles.scss';

const testimonials = [
  {
    content: `Lorem ipsum dolor sit amet, mea an
    illum omnes, cum illum disputationi id.
    No eam aeque doming semper. Mei
    mandamus moderatius reformidans et,
    cu cum illum integre nostrum.`,
    username: 'Erik Zahnlecker',
    company: 'Allocate',
    avatar,
  },
  {
    content: `Lorem ipsum dolor sit amet, mea an
    illum omnes, cum illum disputationi id.
    No eam aeque doming semper. Mei
    mandamus moderatius reformidans et,
    cu cum illum integre nostrum.`,
    username: 'Erik Zahnlecker',
    company: 'Allocate',
    avatar,
  },
  {
    content: `Lorem ipsum dolor sit amet, mea an
    illum omnes, cum illum disputationi id.
    No eam aeque doming semper. Mei
    mandamus moderatius reformidans et,
    cu cum illum integre nostrum.`,
    username: 'Erik Zahnlecker',
    company: 'Allocate',
    avatar,
  },
];

const NextArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <img
      className="slick-next-button"
      onClick={onClick}
      src={right}
    />
  );
}

const PrevArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <img
      className="slick-prev-button"
      onClick={onClick}
      src={left}
    />
  );
}

const carouselSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      },
    },
  ],
};

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="row column text-center">
          <p className="testimonials__title hide-for-small-only">Join the innovators using Allocate</p>
          <p className="testimonials__title show-for-small-only">Join the innovators<br />using Allocate</p>
        </div>
        <div className="testimonials__slider">
          <Carousel
            {...carouselSettings}
          >
            {
              testimonials.map((testimonial) => (<TestimonialCard
                key={generate()}
                data={testimonial}
              />))
            }
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
