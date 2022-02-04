import green from '@material-ui/core/colors/green';

const styles = theme => ({
  checked: {},
  formControl: {
    margin: theme.spacing(1) * 3,
  },
  group: {
    margin: `${theme.spacing(1)}px 0`,
  },
  paper: {
    textAlign: 'center',
    padding: 20,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  title: {
    fontSize: 14,
  },
});

export default styles;
