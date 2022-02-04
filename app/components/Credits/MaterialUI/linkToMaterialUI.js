import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MaterialIcon from 'images/material-ui-icon.png';
import layoutStyles from 'containers/Layout/styles';
import styles from '../styles';

const LinkToMaterialUI = ({ link, classes }) => (
  <div className={classes.visitLinkContainer}>
    <Typography paragraph>
      Find more examples at{' '}
      <a href={link} target="_blank" className={classes.link}>
        <img alt="Material-UI" src={MaterialIcon} /> Material-UI
      </a>
    </Typography>
  </div>
);

LinkToMaterialUI.propTypes = {
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
)(LinkToMaterialUI);
