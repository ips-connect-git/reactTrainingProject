import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FillByValueAreaChart from 'components/Pages/Charts/FillByValueAreaChart';
import LinkToRecharts from 'components/Credits/Recharts/linkToRecharts';
import SimpleAreaChart from 'components/Pages/Charts/SimpleAreaChart';
import StackedAreaChart from 'components/Pages/Charts/StackedAreaChart';
import PageBase from 'components/PageBase';
import PercentAreaChart from 'components/Pages/Charts/PercentAreaChart';

import styles from '../styles';

class AreaChartPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="AreaChart Page"
        navigation="Application / Charts / AreaChart Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <SimpleAreaChart title="Simple" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <StackedAreaChart title="Stacked" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <PercentAreaChart title="Percent" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <FillByValueAreaChart title="Fill by Value" />
            </Paper>
          </Grid>
        </Grid>
        <LinkToRecharts link="http://recharts.org" />
      </PageBase>
    );
  }
}

AreaChartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(AreaChartPage);
