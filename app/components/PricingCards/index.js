// @flow

import React, { Component } from 'react';
import { generate } from 'shortid';

import './styles.scss';

const plans: Array<Object> = [
  {
    title: 'BASIC',
    price: '10',
    users: '1',
    projects: '1',
    integrations: '1',
  },
  {
    title: 'PREMIUM',
    price: '15',
    users: '1',
    projects: '1',
    integrations: '1',
  },
  {
    title: 'BASIC',
    price: '25',
    users: '1',
    projects: '1',
    integrations: '1',
  },
];

class PricingCards extends Component {
  render() {
    return(
      <div className="pricingCards">
          {plans.map((plan, index) => (
            <div
              className="pricingCards__card text-center"
              key={generate()}
            >
              <div className="pricingCards__cardContent">
                <div className="pricingCards__cardTitle">
                  {plan.title}
                </div>
                <div className="pricingCards__cardPrice">
                  $<span className="pricingCards__cardPriceValue">{plan.price}</span>
                </div>
                <div className="pricingCards__cardMonthlyFeature">per user/month</div>
                <div className="pricingCards__cardFeature">
                  {plan.users} user <br/>
                  {plan.projects} project <br/>
                  {plan.integrations} integration
                </div>
              </div>
              {
                index === 1 && <div className="pricingCards__popular">
                  <div className="pricingCards__popularLabel">
                    MOST POPULAR
                  </div>
                </div>
              }
            </div>
          ))}
      </div>
    );
  }
}

export default PricingCards;
