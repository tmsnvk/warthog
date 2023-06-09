import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryDark: string;
      primaryMedium: string;
      primaryMediumLowTransparency: string;
      primaryLight: string;
      secondary: string;
      tertiary: string;
      error: string;
    },
    colorBackground: {
      primary: string;
      secondary: string;
      tertiary: string;
    },
    fontFamily: {
      main: string;
    },
    fontSize: {
      default: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    },
    mediaQuery: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    }
  }
}
