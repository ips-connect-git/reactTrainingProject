import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import DashedLineChart from 'components/Pages/Charts/DashedLineChart';
import HasMultiSeriesLineChart from 'components/Pages/Charts/HasMultiSeriesLineChart';
import LinkToRecharts from 'components/Credits/Recharts/linkToRecharts';
import PageBase from 'components/PageBase';
import SimpleLineChart from 'components/Pages/Charts/SimpleLineChart';
import VerticalLineChart from 'components/Pages/Charts/VerticalLineChart';

import styles from '../styles';

class LineChartPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="LineChart Page"
        navigation="Application / Charts / LineChart Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <SimpleLineChart title="Simple" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <DashedLineChart title="Dashed" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <VerticalLineChart title="Vertical" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <HasMultiSeriesLineChart title="Has Multiple Series" />
            </Paper>
          </Grid>
        </Grid>
        <LinkToRecharts link="http://recharts.org" />
      </PageBase>
    );
  }
}

LineChartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(LineChartPage);
