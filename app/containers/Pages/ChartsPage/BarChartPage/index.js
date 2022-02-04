import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BrushBarChart from 'components/Pages/Charts/BrushBarChart';
import LinkToRecharts from 'components/Credits/Recharts/linkToRecharts';
import LineBarAreaComposedChart from 'components/Pages/Charts/LineBarAreaComposedChart';
import PageBase from 'components/PageBase';
import PositiveAndNegativeBarChart from 'components/Pages/Charts/PositiveAndNegativeBarChart';
import StackedBySignBarChart from 'components/Pages/Charts/StackedBySignBarChart';

import styles from '../styles';

class BarChartPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="BarChart Page"
        navigation="Application / Charts / BarChart Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <LineBarAreaComposedChart title="Simple" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <PositiveAndNegativeBarChart title="Positive and Negative" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <BrushBarChart title="Brush" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <StackedBySignBarChart title="Stacked by Sign" />
            </Paper>
          </Grid>
        </Grid>
        <LinkToRecharts link="http://recharts.org" />
      </PageBase>
    );
  }
}

BarChartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(BarChartPage);
