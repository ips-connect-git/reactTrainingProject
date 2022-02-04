import { createMuiTheme } from '@material-ui/core/styles';

const themeDefault = createMuiTheme({
  palette: {
    primary: {
      500: '#716aca',
    },
    action: {
      active: '#525672',
    },
    text: {
      primary: '#868aa8',
      secondary: '#868aa8',
      divider: '#292b3a',
    },
  },
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontSize: 14,
    },
  },
  listItemText: {
    color: 'green',
  },
  custom: {
    link: {
      color: '#e10050',
    },
    appBar: {
      backgroundColor: '#fff',
    },
    drawerPaper: {
      backgroundColor: '#2c2e3e',
    },
    drawerHeader: {
      backgroundColor: '#282a3c',
      color: '#fff',
    },
    drawerMenuList: {
      backgroundColor: '#282a3c',
    },
    selectedItem: {
      backgroundColor: 'transparent',
    },
    selectedItemText: {
      color: '#716aca',
    },
    text: '#757575',
    title: {
      color: '#d6d7e1',
    },
  },
});

export default themeDefault;
