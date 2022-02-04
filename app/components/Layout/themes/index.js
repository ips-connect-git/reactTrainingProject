import ThemeDefault from './theme-default';
import ThemeAtom from './theme-atom';
import ThemeAurelia from './theme-aurelia';
import ThemeQuiet from './theme-quiet';
import ThemeSky from './theme-sky';

const getCurrentTheme = currentTheme => {
  let muiTheme;
  switch (currentTheme) {
    case 'atom':
      muiTheme = ThemeAtom;
      break;
    case 'aurelia':
      muiTheme = ThemeAurelia;
      break;
    case 'quiet':
      muiTheme = ThemeQuiet;
      break;
    case 'sky':
      muiTheme = ThemeSky;
      break;
    default:
      muiTheme = ThemeDefault;
      break;
  }

  return muiTheme;
};

export default getCurrentTheme;
