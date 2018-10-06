import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchWeatherReport } from 'store/actions/weather.actions';
import CurrentWeather from 'components/currentWeather';
import { theme } from 'styles/theme';
import Wrapper from './Wrapper';

class WeatherReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { fetchWeatherReport } = this.props;
    fetchWeatherReport();
  }

  render() {
    if (!this.props.report) {
      return <ReactLoading type="cylon" color={theme.primary} height={667} width={375} />;
    }
    const {
      report,
    } = this.props;

    return (
      <Wrapper>
        <CurrentWeather report={report} />
      </Wrapper>
    );
  }
}

WeatherReport.propTypes = {
  report: PropTypes.shape({}),
  fetchWeatherReport: PropTypes.func.isRequired,
};

WeatherReport.defaultProps = {
  report: undefined,
};

const mapStateToProps = state => ({
  report: state.weather.report,
});

export default connect(
  mapStateToProps,
  { fetchWeatherReport },
)(WeatherReport);
