// @flow

import React, { Component } from 'react';
import cx from 'classnames';

import Input from 'components/Input';
import Icon from 'components/Icon';

import './styles.scss';

type Props = {
  onChange?: Function,
  onSubmit?: Function,
  defaultValue?: string,
  icon?: any,
  className?: string,
  placeholder?: string,
}

class FormInput extends Component {

  static defaultProps = {
    placeholder: 'Search',
  }
  componentWillReceiveProps(newProps: Props) {
    if (newProps.defaultValue !== this.props.defaultValue) {
      this.input.value = newProps.defaultValue;
    }
  }

  input: Object
  props: Props
  render() {
    const { onSubmit, className, icon, ...otherProps } = this.props;
    const mergedClassName = cx('formInput', className);
    return (
      <div className={mergedClassName}>
        {icon == null && <Input
          className="formInput__simpleInput"
          instance={(input) => {
            this.input = input;
          }}
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (onSubmit) onSubmit(this.input.value);
            }
          }}
          {...otherProps}
        />}
        {icon && <div className="formInput__container">
          <Input
          className="formInput__input"
          instance={(input) => {
            this.input = input;
          }}
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (onSubmit) onSubmit(this.input.value);
            }
          }}
          {...otherProps}
          />
          <div className="formInput__iconField">
            <Icon
              className="formInput__icon"
              glyph={icon}
              size={28}
            />
          </div>
          </div>}
      </div>
    );
  }
}

export default FormInput;
