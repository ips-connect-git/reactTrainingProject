import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const themeAurelia = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#39527b',
    },
    action: {
      active: '#70798d',
    },
    text: {
      primary: '#70798d',
      secondary: '#788195b3',
      divider: '#21252d80',
    },
  },
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontSize: 14,
    },
  },
  custom: {
    link: {
      color: '#e10050',
    },
    appBar: {
      backgroundColor: '#fff',
    },
    drawerPaper: {
      backgroundColor: '#2d3446',
    },
    drawerHeader: {
      backgroundColor: '#272b35',
      color: '#fff',
    },
    drawerMenuList: {
      backgroundColor: '#272b35',
    },
    selectedItem: {
      backgroundColor: 'transparent',
    },
    selectedItemText: {
      color: '#48b0f7',
    },
    text: '#757575',
    title: {
      color: '#d6d7e1',
    },
  },
});

export default themeAurelia;
