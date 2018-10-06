import moment from 'moment-timezone';
import sun from './sun.png';
import moon from './moon.png';
import cloud from './cloud.png';
import rain from './rain.png';
import snow from './snow.png';
import sunrise from './sunrise.png';
import sunset from './sunset.png';
import thunder from './thunder.png';
import wind from './wind.png';

const getIconForReport = (report, now) => {
  let condition;
  if (report.clouds.all >= 50) {
    condition = 'cloudy';
  }
  
  // switch (condition) {
    
  // }
};

export {
  getIconForReport,
};
