import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import layoutStyles from 'containers/Layout/styles';
import SubTabs from './SubTabs';

const HeaderSubTabs = ({
  classes,
  drawerIsOpen,
  handleCloseView,
  handleTabChange,
  openViews,
  selectedMenuItem,
}) => (
  <AppBar
    elevation={2}
    position="fixed"
    color="default"
    className={classNames(
      'secondary-appbar',
      drawerIsOpen && classes.appBarShift,
    )}
  >
    <Toolbar disableGutters={!drawerIsOpen}>
      <div className="empty-icon" />
      <SubTabs
        openViews={openViews}
        selectedMenuItem={selectedMenuItem}
        handleCloseView={handleCloseView}
        handleTabChange={handleTabChange}
      />
    </Toolbar>
  </AppBar>
);

HeaderSubTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  handleCloseView: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  openViews: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(HeaderSubTabs);
