const styles = theme => ({
  container: {
    marginBottom: 8,
  },
  navigationContainer: {
    borderLeft: '1px solid #e2e5ec',
  },
  navigationText: {
    fontSize: 14,
    fontWeight: 100,
    color: theme.palette.text.secondary,
    display: 'block',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  loadingIndicator: {
    height: 2,
  },
  paper: {
    padding: 30,
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
});

export default styles;
