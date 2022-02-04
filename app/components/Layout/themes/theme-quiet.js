import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const themeAurelia = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#705697',
    },
    action: {
      active: '#777c9d',
    },
    text: {
      primary: '#777c9d',
      secondary: '#a292bc',
      divider: '#ede8ef',
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
      backgroundColor: '#fff',
    },
    drawerHeader: {
      backgroundColor: '#ebebeb',
      color: '#705697',
    },
    drawerMenuList: {
      backgroundColor: '#ebebeb',
    },
    selectedItem: {
      backgroundColor: '#705697',
    },
    selectedItemText: {
      color: '#fff',
    },
    text: '#757575',
    title: {
      color: '#705697',
    },
  },
});

export default themeAurelia;
