import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';

import layoutStyles from 'containers/Layout/styles';
import styles from './styles';

const InfoBox = ({
  classes,
  backgroundColor,
  icon,
  iconColor,
  title,
  value,
}) => (
  <Paper square style={{ backgroundColor }} className={classes.container}>
    <span style={{ backgroundColor }} className={classes.iconSpan}>
      <Icon
        style={{ color: iconColor, fill: iconColor }}
        className={classes.icon}
      >
        {icon}
      </Icon>
    </span>

    <div className={classes.content}>
      <span className={classes.number}>{value}</span>
      <span className={classes.text}>{title}</span>
    </div>
  </Paper>
);

InfoBox.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(InfoBox);
