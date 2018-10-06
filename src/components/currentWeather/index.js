import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { lighten } from 'polished';
import { withStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import LabelAndValue from 'components/labelAndValue';
import { getIconForReport } from 'images/icons';
import theme from 'styles/theme';
import Wrapper from './wrapper';

const palette = {
  primary: theme.primary,
  white: theme.white,
}

const styles = theme => ({
  switchBase: {
    height: '30px',
    color: `${palette.primary} !important`,
    '&$colorChecked': {
      color: palette.primary,
      '& + $colorBar': {
        color: lighten(0.5, palette.primary),
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  switchBar: {
    borderColor: theme.palette.grey[400],
    backgroundColor: `${lighten(0.5, palette.primary)} !important`,
  }
});

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCentigrade: true,
    };
  }

  handleTempUnitChange = (event, value) => this.setState({ isCentigrade: value });

  getTemperatureForUnit = temperature => {
    const { isCentigrade } = this.state;
    if (isCentigrade) {
      return (temperature - 273.15).toFixed(0)
    } else {
      return ((temperature - 273.15) * 9/5 + 32).toFixed(0)
    }
  }

  render() {
    const {
      report,
      classes,
      refetchData,
    } = this.props;
    const { isCentigrade } = this.state;
    console.log(report)
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
          <LabelAndValue label="Temperature" value={this.getTemperatureForUnit(report.main.temp)} />
          <LabelAndValue label="Max Temp" value={this.getTemperatureForUnit(report.main.temp_max)} />
          <LabelAndValue label="Min Temp" value={this.getTemperatureForUnit(report.main.temp_min)} />
          <LabelAndValue label="Humidity" value={`${report.main.humidity}%`} />
          <LabelAndValue label="Clouds" value={`${report.clouds.all}%`} />
          <LabelAndValue label="Wind speed" value={report.wind.speed} />
        </main>
        <footer>
          <div className="unitControl">
            <p>F</p>
            <Switch
              classes={{
                switchBase: classes.switchBase,
                bar: classes.switchBar,
              }}
              disableRipple
              checked={isCentigrade}
              onChange={this.handleTempUnitChange}
              value="isCentigrade"
            />
            <p>C</p>
          </div>
          <IconButton
            aria-label="Refresh"
            onClick={() => refetchData()}
          >
            <RefreshIcon />
          </IconButton>
        </footer>
      </Wrapper>
    );
  }
}

CurrentWeather.propTypes = {
  report: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  refetchData: PropTypes.func.isRequired,
};

CurrentWeather.defaultProps = {};

export default withStyles(styles)(CurrentWeather);
