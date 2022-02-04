import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import layoutStyles from 'containers/Layout/styles';
import styles from 'containers/Pages/ApiDemoPage/styles';

const AddButton = ({ classes, onSelectPostToBeAdded }) => (
  <Fab
    color="secondary"
    aria-label="Add"
    className={classnames(classes.button, classes.floatingActionButton)}
    onClick={onSelectPostToBeAdded}
  >
    <AddIcon />
  </Fab>
);

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectPostToBeAdded: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(AddButton);
