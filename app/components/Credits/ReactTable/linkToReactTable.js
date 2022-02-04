import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ReactTableIcon from 'images/react-table.png';
import layoutStyles from 'containers/Layout/styles';
import styles from '../styles';

const LinkToReactTable = ({ link, classes }) => (
  <div className={classes.visitLinkContainer}>
    <Typography paragraph>
      Find more examples at{' '}
      <a href={link} target="_blank" className={classes.link}>
        <img alt="React Table" src={ReactTableIcon} style={{ maxWidth: 120 }} />
      </a>
    </Typography>
  </div>
);

LinkToReactTable.propTypes = {
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
)(LinkToReactTable);
