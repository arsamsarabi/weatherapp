import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './wrapper';

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        Weather page
      </Wrapper>
    );
  }
}

export default WeatherPage;
