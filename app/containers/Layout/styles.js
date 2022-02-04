const drawerWidth = 240;

const getStyles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.custom.appBar.backgroundColor,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 48px)',
      marginTop: 48,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    backgroundColor: theme.custom.drawerHeader.backgroundColor,
    color: theme.custom.drawerHeader.color,
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerPaper: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    backgroundColor: theme.custom.drawerPaper.backgroundColor,
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  expandCollapseIcon: {
    width: 20,
    height: 20,
  },
  link: {
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    width: '100%',
    padding: 0,
    cursor: 'pointer',
    color: theme.custom.link.color,
    wordBreak: 'break-all',
  },
  listItemText: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  loadingText: {
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 0,
  },
  menuItemCloseIcon: {
    visibility: 'hidden',
    outlineColor: 'transparent',
    position: 'absolute',
    top: 12,
    right: 5,
    zIndex: 1,
  },
  menuTitle: {
    fontSize: 14,
  },
  menuTitleContainer: {
    position: 'sticky',
    zIndex: 1,
    top: 0,
    backgroundColor: theme.custom.drawerMenuList.backgroundColor,
    paddingRight: 16,
  },
  noPadding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  openViews: {
    maxHeight: 230,
  },
  root: {
    width: '100%',
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
  },
  settingsCloseButton: {
    position: 'absolute',
    top: 70,
    left: 0,
  },
  settingsContainer: {
    padding: '120px 20px 0px',
  },
  settingsDrawer: {
    backgroundColor: 'whitesmoke',
    width: 300,
    position: 'fixed',
  },
  itemIcon: {
    minWidth: 40,
  },
  emptyIcon: {
    paddingLeft: 56,
  },
  rippleColor: {
    color: theme.custom.selectedItemText.color,
  },
  selectedItemText: {
    color: theme.custom.selectedItemText.color,
    minWidth: 40,
  },
  selectedMenuItem: {
    backgroundColor: `${theme.custom.selectedItem.backgroundColor} !important`,
  },
  sidebarTitle: {
    color: theme.custom.title.color,
    fontWeight: 100,
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
  sidebarTitleBold: {
    fontWeight: 500,
    marginLeft: -5,
  },
  subHeader: {
    paddingLeft: 10,
  },
  tab: {
    height: 48,
    textAlign: 'center',
  },
  tabCloseIcon: {
    visibility: 'hidden',
    outlineColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 1,
    cursor: 'default',
    zIndex: 1,
  },
  tabs: {
    width: '100%',
  },
});

export default getStyles;
