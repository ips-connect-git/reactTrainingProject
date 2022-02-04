import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';

import layoutStyles from 'containers/Layout/styles';
class LeftSideBarMenuList extends React.Component {
  renderExpandIcons(collapse) {
    const { classes } = this.props;

    const expandIcon = collapse ? (
      <ExpandLess
        color="action"
        className={classNames(classes.expandCollapseIcon)}
      />
    ) : (
      <ExpandMore
        color="action"
        className={classNames(classes.expandCollapseIcon)}
      />
    );

    return expandIcon;
  }

  render() {
    const {
      children,
      classes,
      isCollapsed,
      menuListClass,
      sidebarIsOpen,
      subHeaderClass,
      title,
    } = this.props;

    return (
      <MenuList
        className={classNames(
          menuListClass,
          sidebarIsOpen ? 'sidebar-opened' : 'sidebar-closed',
        )}
        subheader={
          <ListItem
            button
            onClick={this.props.handleOnClick}
            className={classNames(
              classes.menuTitleContainer,
              !sidebarIsOpen ? subHeaderClass : null,
            )}
          >
            <ListItemText
              secondary={title}
              className={classNames(classes.menuTitle)}
            />
            {this.renderExpandIcons(isCollapsed)}
          </ListItem>
        }
      >
        <Collapse unmountOnExit in={isCollapsed}>
          {children}
        </Collapse>
      </MenuList>
    );
  }
}

LeftSideBarMenuList.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  menuListClass: PropTypes.string.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  subHeaderClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(LeftSideBarMenuList);
