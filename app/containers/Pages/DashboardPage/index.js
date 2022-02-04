import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import InfoBox from 'components/Pages/Dashboard/InfoBox';
import orange from '@material-ui/core/colors/orange';

import Stepper from 'components/Pages/Dashboard/Stepper';
import Gallery from 'components/Pages/Dashboard/Gallery';
import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';
import SimpleBarChart from 'components/Pages/Charts/SimpleBarChart';
import SimpleLineChart from 'components/Pages/Charts/SimpleLineChart';
import StackedAreaChart from 'components/Pages/Charts/StackedAreaChart';
import StackedBySignBarChart from 'components/Pages/Charts/StackedBySignBarChart';
import Tasks from 'components/Pages/Dashboard/Tasks';

import styles from './styles';

class DashboardPage extends React.PureComponent {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  render() {
    const { loading } = this.state;
    const { classes } = this.props;

    return (
      <PageBase title="Dashboard" minHeight={500} loading={loading}>
        {!loading && (
          <div>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} sm={12} md={6}>
                <SimpleBarChart title="Sales" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <StackedAreaChart title="Orders" />
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} sm={6} md={3}>
                <InfoBox
                  icon="thumb_up"
                  backgroundColor={blue[400]}
                  iconColor={blue[500]}
                  title="Likes"
                  value="7051"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoBox
                  icon="shopping_cart"
                  backgroundColor={green[400]}
                  iconColor={green[500]}
                  title="Total Profit"
                  value="4000K"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoBox
                  icon="face"
                  backgroundColor={orange[400]}
                  iconColor={orange[500]}
                  title="New Members"
                  value="175"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InfoBox
                  icon="assessment"
                  backgroundColor={deepPurple[400]}
                  iconColor={deepPurple[500]}
                  title="Sales"
                  value="852"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12} sm={12} md={4}>
                <Gallery title="Latest posts" />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <StackedBySignBarChart title="Visits" />
                <Stepper />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <SimpleLineChart title="Traffic" />
                <Tasks title="Folders" />
              </Grid>
            </Grid>
          </div>
        )}
      </PageBase>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  { withTheme: true },
)(DashboardPage);
