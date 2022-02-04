import { lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  actions: {
    color: theme.palette.text.secondary,
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  spacer: {
    flex: '1 1 100%',
  },
  title: {
    flex: '0 0 auto',
  },
  root: {
    paddingRight: theme.spacing(1),
  },
});

export default styles;
