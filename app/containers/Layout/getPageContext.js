/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import getCurrentTheme from '../../components/Layout/themes';

function createPageContext(currentTheme) {
  const theme = getCurrentTheme(currentTheme);
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    // // sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext(currentTheme, forceChangeTheme) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext(currentTheme);
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__ || forceChangeTheme) {
    global.__INIT_MATERIAL_UI__ = createPageContext(currentTheme);
  }

  return global.__INIT_MATERIAL_UI__;
}
