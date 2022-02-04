import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import layoutStyles from 'containers/Layout/styles';

const LeftSideBarSubMenuItem = ({
  classes,
  handleOnClick,
  item,
  openSubMenu,
  sidebarIsOpen,
}) => (
  <MenuItem button onClick={() => handleOnClick(item.id)}>
    <ListItemIcon className={classNames(classes.itemIcon)}>
      {item.icon}
    </ListItemIcon>
    <ListItemText
      inset
      disableTypography
      primary={item.text}
      className={classNames(
        sidebarIsOpen ? classes.noPadding : null,
        classes.listItemText,
        'truncate-list-item-text',
      )}
    />
    {openSubMenu[item.id] ? (
      <ExpandLess
        color="action"
        className={classNames(classes.expandCollapseIcon)}
      />
    ) : (
      <ExpandMore
        color="action"
        className={classNames(classes.expandCollapseIcon)}
      />
    )}
  </MenuItem>
);

LeftSideBarSubMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  openSubMenu: PropTypes.object.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(LeftSideBarSubMenuItem);
