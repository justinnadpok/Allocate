// @flow

import React, { Component } from 'react';

import './styles.scss';

class FormTextArea extends Component {
  render() {
    return (
      <div className="formTextArea">
        <textarea className="formTextArea__field" placeholder="Your message">
        </textarea>
      </div>
    );
  }
}

export default FormTextArea;
