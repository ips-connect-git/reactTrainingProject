import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';

import styles from './styles';

class BadgesPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="Badges Page"
        navigation="Application / UI Elements / Badges Page"
        minHeight={500}
      >
        <Grid container justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Paper square className={classes.paper}>
              <div>
                <Badge
                  className={classes.margin}
                  badgeContent={4}
                  color="primary"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes.margin}
                  badgeContent={10}
                  color="secondary"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes.margin}
                >
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </div>
              <div className={classes.appbar}>
                <AppBar position="static">
                  <Tabs value={0}>
                    <Tab
                      label={
                        <Badge
                          className={classes.padding}
                          color="secondary"
                          badgeContent={4}
                        >
                          Item One
                        </Badge>
                      }
                    />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                </AppBar>
              </div>
              <Badge
                color="primary"
                badgeContent={4}
                className={classes.margin}
              >
                <Typography className={classes.padding}>Typography</Typography>
              </Badge>
              <Badge
                color="primary"
                badgeContent={4}
                className={classes.margin}
              >
                <Button variant="contained">Button</Button>
              </Badge>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/badges/" />
      </PageBase>
    );
  }
}

BadgesPage.propTypes = {
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
)(BadgesPage);
