import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import PageBase from 'components/PageBase';

import styles from './styles';

class PickersPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="Pickers Page"
        navigation="Application / UI Elements / Pickers Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={4}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Date pickers
            </Typography>
            <Paper square className={classes.paper}>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Time pickers
            </Typography>
            <Paper square className={classes.paper}>
              <form className={classes.container} noValidate>
                <TextField
                  id="time"
                  label="Alarm clock"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Date & Time pickers
            </Typography>
            <Paper square className={classes.paper}>
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/pickers/" />
      </PageBase>
    );
  }
}

PickersPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(PickersPage);
