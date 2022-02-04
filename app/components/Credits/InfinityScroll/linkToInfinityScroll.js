import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import styles from '../styles';

const LinkToInfinityScroll = ({ link, classes }) => (
  <div className={classes.visitLinkContainer}>
    <Typography paragraph>
      Find more about infinity scroll at{' '}
      <a href={link} target="_blank" className={classes.link}>
        React Inifity Scroll
      </a>
    </Typography>
  </div>
);

LinkToInfinityScroll.propTypes = {
  link: PropTypes.string.isRequired,
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
)(LinkToInfinityScroll);
