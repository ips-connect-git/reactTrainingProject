const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    overflow: 'hidden',
    width: '100%',
  },
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
});

export default styles;
