import moment from 'moment-timezone';
import sun from './sun.png';
import moon from './moon.png';
import cloud from './cloud.png';
import rain from './rain.png';
import snow from './snow.png';
import thunder from './thunder.png';

const getIconForReport = (report, localtime) => {
  const format = 'hh:mm:ss';
  const isDayTime = moment(localtime, format).isBefore(moment.unix(report.sys.sunset, format));
  const current = report.weather[0].main;

  if (current && current === 'Rain') {
    return rain;
  }
  if (current && current === 'Snow') {
    return snow;
  }
  if (current && current === 'Clouds') {
    return cloud;
  }
  if (current && current === 'Thunderstorm') {
    return thunder;
  }
  return isDayTime ? sun : moon;
};

export {
  getIconForReport,
};
