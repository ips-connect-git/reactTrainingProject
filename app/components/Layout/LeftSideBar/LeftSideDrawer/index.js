import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import layoutStyles from 'containers/Layout/styles';

const LeftSideDrawer = ({ classes, children }) => (
  <div className={classes.drawerInner}>
    <div className={classes.drawerHeader}>
      <div className={classes.sidebarTitle}>
        <span className={classes.sidebarTitleBold}>FORTRESS </span>
        ADMIN
      </div>
    </div>
    {children}
  </div>
);

LeftSideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(LeftSideDrawer);
