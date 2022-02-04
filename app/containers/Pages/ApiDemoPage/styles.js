const styles = theme => ({
  actions: {
    display: 'flex',
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: '20px',
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 1,
  },
  item: {
    paddingTop: 30,
  },
  media: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 345,
      minWidth: 345,
      minHeight: 200,
    },
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  paperPadding: {
    paddingTop: theme.spacing(1) * 5,
    paddingBottom: theme.spacing(1) * 2,
  },
});

export default styles;
