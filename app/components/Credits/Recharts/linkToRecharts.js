import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import styles from '../styles';

const LinkToRecharts = ({ classes }) => (
  <div className={classes.visitLinkContainer}>
    <Typography paragraph>
      Find more examples at{' '}
      <a href="http://recharts.org" target="_blank" className={classes.link}>
        Recharts
      </a>
    </Typography>
  </div>
);

LinkToRecharts.propTypes = {
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
)(LinkToRecharts);
