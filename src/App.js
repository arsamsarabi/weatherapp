import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import WeatherReport from 'pages/weatherReport';
import './resources/styles/reset.css';
import './resources/styles/styles.css';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.lightBlue};
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

const App = () => (
  <HashRouter>
    <Wrapper>
      <Route exact path="/" render={() => <Redirect to="/weather" />} />
      <Route exact path="/weather" component={WeatherReport} />
    </Wrapper>
  </HashRouter>
);

export default App;
