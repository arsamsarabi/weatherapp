import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import Wrapper from './Wrapper';

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { report } = this.props;
    const now = moment().tz('Europe/London').format('hh:mm dddd do MMM');
    console.log(report);

    return (
      <Wrapper>
        <header>
          <div className="column-1">
            <h1>{report.name}</h1>
            <h2>{now}</h2>
          </div>
          <div className="column-2">
            img
          </div>
        </header>
        <div className="weatherReport">
          {`Temperature: ${report.main.temp}`}
        </div>
        <footer>
          {/* {`Data fetched at ${moment.unix(report.dt).format('hh:mm:ss a DD/MM/YY')}`} */}
        </footer>
      </Wrapper>
    );
  }
}

CurrentWeather.propTypes = {
  report: PropTypes.shape({}).isRequired,
};

CurrentWeather.defaultProps = {};

export default CurrentWeather;
