// css and theming.
import { DefaultTheme } from 'styled-components';

const seaShell = '#F0F0F0';
const flatBlue = '#277DA1';
const charcoal = '#32373B';
const gainsBoro = '#DCDCDC';
const mediumGray = '#7F7F7F';
const lightSeaGreen = '#43AA8B';
const mango = '#F9C74F';
const peachPuff = '#F5DFBB';
const coralRed = '#F94144';

const theme: DefaultTheme = {
  color: {
    primaryDark: charcoal,
    primaryLight: mediumGray,
    secondary: flatBlue,
    tertiary: lightSeaGreen,
    error: coralRed,
  },
  colorBackground: {
    primary: seaShell,
    secondary: mango,
    tertiary: gainsBoro,
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
  },
  fontSize: {
    default: '1rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '2rem',
    xLarge: '2.6rem',
    xxLarge: '3rem',
  },
  mediaQuery: {
    small: '480px',
    medium: '768px',
    large: '992px',
    xLarge: '1200px',
  },
};

export default theme;
