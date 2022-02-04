const styles = theme => ({
  gotoPostsLink: {
    margin: '10px 0',
    textAlign: 'right',
  },
  bodyPadding: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 5,
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  image: {
    width: '100%',
  },
});

export default styles;
