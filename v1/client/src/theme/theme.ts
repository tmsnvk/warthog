// css and theming.
import { DefaultTheme } from 'styled-components';

const lightGray = '#DDE6ED';
const mediumGray = '#7F7F7F';
const mediumGrayLowTransparency = '#7F7F7F59';
const charcoal = '#32373B';
const flatBlue = '#277DA1';
const navy = '#27374D';
const gainsBoro = '#DCDCDC';
const lightSeaGreen = '#43AA8B';
const seaShell = '#DFE1E5';
const peachPuff = '#F5DFBB';
const coralRed = '#F94144';

const theme: DefaultTheme = {
  color: {
    primaryDark: navy,
    primaryMedium: mediumGray,
    primaryMediumLowTransparency: mediumGrayLowTransparency,
    primaryLight: lightGray,
    secondary: flatBlue,
    tertiary: lightSeaGreen,
    error: coralRed,
  },
  colorBackground: {
    primary: lightGray,
    secondary: seaShell,
    tertiary: flatBlue,
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
