import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import PageBase from 'components/PageBase';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';

import styles from './styles';

class GridSystemPage extends React.Component {
  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return (
      <PageBase
        title="Grid System"
        navigation="Application / Grid System"
        wrapContent
        minHeight={180}
      >
        <Grid container>
          <Typography variant="h3" className={classes.title} gutterBottom>
            Interactive
          </Typography>
        </Grid>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              className={classes.demo}
              alignItems={alignItems}
              direction={direction}
              justify={justify}
            >
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper
                    className={classes.paper}
                    style={{
                      paddingTop: (value + 1) * 10,
                      paddingBottom: (value + 1) * 10,
                    }}
                  >
                    {`Cell ${value + 1}`}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel>direction</FormLabel>
                    <RadioGroup
                      row
                      name="direction"
                      aria-label="Direction"
                      value={direction}
                      onChange={this.handleChange('direction')}
                    >
                      <FormControlLabel
                        value="row"
                        control={<Radio />}
                        label="row"
                      />
                      <FormControlLabel
                        value="row-reverse"
                        control={<Radio />}
                        label="row-reverse"
                      />
                      <FormControlLabel
                        value="column"
                        control={<Radio />}
                        label="column"
                      />
                      <FormControlLabel
                        value="column-reverse"
                        control={<Radio />}
                        label="column-reverse"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel>justify</FormLabel>
                    <RadioGroup
                      row
                      name="justify"
                      aria-label="Justify"
                      value={justify}
                      onChange={this.handleChange('justify')}
                    >
                      <FormControlLabel
                        value="flex-start"
                        control={<Radio />}
                        label="flex-start"
                      />
                      <FormControlLabel
                        value="center"
                        control={<Radio />}
                        label="center"
                      />
                      <FormControlLabel
                        value="flex-end"
                        control={<Radio />}
                        label="flex-end"
                      />
                      <FormControlLabel
                        value="space-between"
                        control={<Radio />}
                        label="space-between"
                      />
                      <FormControlLabel
                        value="space-around"
                        control={<Radio />}
                        label="space-around"
                      />
                      <FormControlLabel
                        value="space-evenly"
                        control={<Radio />}
                        label="space-evenly"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel>alignItems</FormLabel>
                    <RadioGroup
                      row
                      name="alignItems"
                      aria-label="Align items"
                      value={alignItems}
                      onChange={this.handleChange('alignItems')}
                    >
                      <FormControlLabel
                        value="flex-start"
                        control={<Radio />}
                        label="flex-start"
                      />
                      <FormControlLabel
                        value="center"
                        control={<Radio />}
                        label="center"
                      />
                      <FormControlLabel
                        value="flex-end"
                        control={<Radio />}
                        label="flex-end"
                      />
                      <FormControlLabel
                        value="stretch"
                        control={<Radio />}
                        label="stretch"
                      />
                      <FormControlLabel
                        value="baseline"
                        control={<Radio />}
                        label="baseline"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Typography variant="h3" className={classes.title} gutterBottom>
            Basic Grid
          </Typography>
        </Grid>
        <Grid container className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/layout/grid/" />
      </PageBase>
    );
  }
}

GridSystemPage.propTypes = {
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
)(GridSystemPage);
