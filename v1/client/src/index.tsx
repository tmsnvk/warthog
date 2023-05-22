// react and eco.
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// external packages.
import { ThemeProvider } from 'styled-components';
// css and theming.
import GlobalStyle from '@theme/GlobalStyle';
import theme from '@theme/theme';
// application component.
import Application from 'components/Application';

const container = document.getElementById('root');
const root = createRoot(container!);

const ReactApplication = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application />
    </ThemeProvider>
  </BrowserRouter>
);

root.render(ReactApplication);
