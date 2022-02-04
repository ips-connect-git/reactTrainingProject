import { createMuiTheme } from '@material-ui/core/styles';

const themeAtom = createMuiTheme({
  palette: {
    primary: {
      500: '#1797be',
    },
    action: {
      active: '#869fb1',
    },
    text: {
      primary: '#869fb1',
      secondary: '#5c798f',
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
      backgroundColor: '#1c2b36',
    },
    drawerHeader: {
      backgroundColor: '#131e26',
      color: '#c4d0d9',
    },
    drawerMenuList: {
      backgroundColor: '#131e26',
    },
    selectedItem: {
      backgroundColor: '#1797be',
    },
    selectedItemText: {
      color: '#fff',
    },
    text: '#757575',
    title: {
      color: '#d6d7e1',
    },
  },
});

export default themeAtom;
