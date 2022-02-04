import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import styles from '../styles';

const LinkToReactDraftWysiwig = ({ classes }) => (
  <div className={classes.visitLinkContainer}>
    <Typography paragraph>
      Find more examples at{' '}
      <a
        href="https://jpuri.github.io/react-draft-wysiwyg/#/"
        target="_blank"
        className={classes.link}
      >
        React Draft Wysiwig
      </a>
    </Typography>
  </div>
);

LinkToReactDraftWysiwig.propTypes = {
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
)(LinkToReactDraftWysiwig);
