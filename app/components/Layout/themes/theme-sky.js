import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const themeSky = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#39527b',
    },
    action: {
      active: '#7591bf',
    },
    text: {
      primary: '#97adcf',
      secondary: '#6383b7',
      divider: '#31466a80',
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
      backgroundColor: '#f8f9fa',
    },
    drawerPaper: {
      backgroundColor: '#39527b',
    },
    drawerHeader: {
      backgroundColor: '#31466a',
      color: '#fff',
    },
    drawerMenuList: {
      backgroundColor: '#31466a',
    },
    selectedItem: {
      backgroundColor: '#db1430',
    },
    selectedItemText: {
      color: '#deeeee',
    },
    text: '#757575',
    title: {
      color: '#d6d7e1',
    },
  },
});

export default themeSky;
