import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import LabelAndValue from 'components/labelAndValue';
import { getIconForReport } from 'images/icons';
import Wrapper from './wrapper';

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { report } = this.props;
    const now = moment().tz('Europe/London').format('hh:mm a dddd do MMM');

    return (
      <Wrapper>
        <header>
          <div className="column-1">
            <h1>{report.name}</h1>
            <h2>{now}</h2>
          </div>
          <div className="column-2">
            <img src={getIconForReport(report, now)} alt={report.weather[0].description}/>
          </div>
        </header>
        <main>
          <LabelAndValue label="Condition" value={report.weather[0].description} />
          <LabelAndValue label="Temperature" value={report.main.temp} />
          <LabelAndValue label="Max Temp" value={report.main.temp_max} />
          <LabelAndValue label="Min Temp" value={report.main.temp_min} />
          <LabelAndValue label="Humidity" value={report.main.humidity} />
          <LabelAndValue label="Clouds" value={`%${report.clouds.all}`} />
          <LabelAndValue label="Wind speed" value={report.wind.speed} />
        </main>
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
