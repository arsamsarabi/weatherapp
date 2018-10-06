import { rgba } from 'polished';
import colors from './colors';

const theme = {
  primary: colors.blue,
  secondary: colors.pink,
  success: colors.green,
  warning: colors.amber,
  danger: colors.reg,
  white: colors.white,
  black: colors.black,
  grey: colors.grey,
  lightBlue: colors.lightBlue,
  boxShadow: {
    small: `0 0 15px 1px ${rgba(colors.black, 0.5)}`,
  },
  transition: {
    fast: '0.3s all ease-in-out 0.1s',
  },
  fontHeading: 'Montserrat, Roboto, Arial',
};

export { theme };
export default theme;
