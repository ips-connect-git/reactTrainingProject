import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import layoutStyles from 'containers/Layout/styles';

const LeftSideBarMenuItem = ({
  classes,
  children,
  handleOnClick,
  icon,
  item,
  nestedClass,
  sidebarIsOpen,
  selectedMenuItem,
  selectedMenuItemParentId,
}) => (
  <MenuItem
    button
    className={classNames(
      nestedClass,
      item.id === selectedMenuItem.id || item.id === selectedMenuItemParentId
        ? classes.selectedMenuItem
        : null,
      !icon && classes.emptyIcon,
      classes.rippleColor,
    )}
    selected={
      item.id === selectedMenuItem.id || item.id === selectedMenuItemParentId
    }
    onClick={() => handleOnClick && handleOnClick(item)}
  >
    {icon ? (
      <ListItemIcon
        className={classNames(
          item.id === selectedMenuItem.id ||
            item.id === selectedMenuItemParentId
            ? classes.selectedItemText
            : classes.itemIcon,
        )}
      >
        {icon}
      </ListItemIcon>
    ) : null}
    <ListItemText
      inset
      disableTypography
      className={classNames(
        sidebarIsOpen ? classes.noPadding : null,
        item.id === selectedMenuItem.id || item.id === selectedMenuItemParentId
          ? classes.selectedItemText
          : null,
        classes.listItemText,
        'truncate-list-item-text',
      )}
      primary={item.text}
      secondaryTypographyProps={{ color: 'textSecondary' }}
    />
    {children}
  </MenuItem>
);

LeftSideBarMenuItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func,
  icon: PropTypes.object,
  item: PropTypes.object.isRequired,
  nestedClass: PropTypes.string,
  selectedMenuItem: PropTypes.object.isRequired,
  selectedMenuItemParentId: PropTypes.string,
  sidebarIsOpen: PropTypes.bool.isRequired,
};

LeftSideBarMenuItem.defaultProps = {
  children: null,
  handleOnClick: null,
  nestedClass: '',
  icon: null,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(LeftSideBarMenuItem);
