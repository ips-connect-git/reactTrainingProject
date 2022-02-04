import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';

import {
  makeSelectMenu,
  makeSelectOpenViews,
  makeSelectSelectedMenuItem,
  makeSelectLocation,
  makeSelectShowOpenView,
} from 'containers/App/selectors';
import {
  openView,
  openDynamicView,
  selectMenuItem,
} from 'containers/App/actions';
import {
  findMenuItem,
  getSelectedMenuItem,
  getDynamicItem,
} from 'utils/menuHelper';
import LeftSideDrawer from 'components/Layout/LeftSideBar/LeftSideDrawer';
import LeftSideBarMenuList from 'components/Layout/LeftSideBar/LeftSideBarMenuList';
import LeftSideBarSubMenuItem from 'components/Layout/LeftSideBar/LeftSideBarSubMenuItem';
import LeftSideBarMenuItem from 'components/Layout/LeftSideBar/LeftSideBarMenuItem';
import layoutStyles from '../styles';

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawerOnHover: false,
      collapseOpenViews: true,
      collapseMenu: true,
      openSubMenu: {},
    };

    this.isClosingOpenView = false;
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.location !== prevProps.location) {
      return {
        location: nextProps.location,
      };
    }
    return null;
  }

  componentDidMount() {
    this.openSubMenuOrDynamicView();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.openSubMenuOrDynamicView();
    }
  }

  openSubMenuOrDynamicView = () => {
    const { selectedParentMenuItem } = getSelectedMenuItem();
    if (selectedParentMenuItem) {
      this.handleOpenSubMenuClick(selectedParentMenuItem.id, true);
    } else {
      this.handleOpenDynamicView(this.props);
    }
    this.isClosingOpenView = false;
  };

  handleOpenViewTitleClick = () => {
    const { collapseOpenViews } = this.state;
    this.setState({ collapseOpenViews: !collapseOpenViews });
  };

  handleOpenSubMenuClick = (id, forceValue) => {
    const { openSubMenu } = this.state;
    if (openSubMenu[id] === undefined) {
      openSubMenu[id] = false;
    }
    Object.keys(openSubMenu).forEach(key => {
      if (id !== key) {
        openSubMenu[key] = false;
      }
    });

    openSubMenu[id] = forceValue || !openSubMenu[id];
    this.setState({ openSubMenu });
  };

  handleMenuTitleClick = () => {
    const { collapseMenu } = this.state;
    this.setState({ collapseMenu: !collapseMenu });
  };

  handleMenuNavigation = (item, icon) => {
    if (item.isExternalUrl) {
      const win = window.open(item.url);
      win.focus();
      return;
    }
    if (this.isClosingOpenView) {
      return;
    }
    let menuItem = item;
    if (item.isDynamic) {
      const firstChild = item.children[0];
      menuItem = firstChild;
    }
    const { menu, openViews } = this.props;
    const itemExists = openViews.find(
      openedView => openedView.id === menuItem.id,
    );
    if (!itemExists) {
      this.props.dispatch(openView(menuItem, icon, openViews)); // Add new openView item
    } else {
      let result = findMenuItem(menu, 'id', menuItem.id);
      const { foundMenuItem } = result;

      result = findMenuItem(openViews, 'id', menuItem.id);
      const foundOpenViewItem = result.foundMenuItem;

      if (foundMenuItem) {
        // Select menu item
        this.props.dispatch(
          selectMenuItem(foundMenuItem, foundOpenViewItem, openViews),
        );
      }
    }
  };

  openDrawer = () => {
    const { type } = this.props;
    this.setState({ openDrawerOnHover: type === 'permanent' });
  };

  closeDrawer = () => {
    this.setState({ openDrawerOnHover: false });
  };

  handleCloseView = menuItem => {
    this.isClosingOpenView = true;
    this.props.handleCloseView(menuItem);
  };

  handleOpenDynamicView = props => {
    const { menu, openViews, location } = props;
    const menuItemExists = findMenuItem(menu, 'url', location.pathname);

    // Does the pathname have 2 parts? /path/:id
    const pathnameArr = location.pathname.split('/');
    if (pathnameArr.length === 3 && !menuItemExists.foundMenuItem) {
      // is Dynamic route
      const id = pathnameArr[2];
      const { foundMenuItem } = findMenuItem(
        menu,
        'url',
        `/${pathnameArr[1]}/:id`,
      );

      if (foundMenuItem) {
        const dynamicItem = getDynamicItem(id, foundMenuItem);
        const parentItem = menu.find(
          menuItem => menuItem.id === foundMenuItem.parent.parentId,
        );
        this.props.dispatch(
          openDynamicView(dynamicItem, parentItem, openViews),
        );
      }
    }
  };

  renderCloseMenuItemIcon = menuItem => {
    const { classes } = this.props;

    return (
      <i
        role="button"
        tabIndex={menuItem.index}
        onClick={() => this.handleCloseView(menuItem)}
        onKeyPress={() => {}}
        className={classNames(
          'material-icons',
          'left-sidebar-close',
          classes.menuItemCloseIcon,
        )}
        style={menuItem.index === 0 ? { display: 'none' } : null}
      >
        cancel
      </i>
    );
  };

  renderOpenViews = () => {
    const { openDrawerOnHover } = this.state;
    const { drawerIsOpen, openViews, selectedMenuItem } = this.props;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      open &&
      openViews.map(item => (
        <LeftSideBarMenuItem
          key={`id-${item.id}`}
          item={item}
          handleOnClick={this.handleMenuNavigation}
          selectedMenuItem={selectedMenuItem}
          sidebarIsOpen={open}
          icon={item.icon}
        >
          {this.renderCloseMenuItemIcon(item)}
        </LeftSideBarMenuItem>
      ))
    );
  };

  renderSubMenuItem = item => {
    const { openDrawerOnHover, openSubMenu } = this.state;
    const { drawerIsOpen } = this.props;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      <LeftSideBarSubMenuItem
        handleOnClick={this.handleOpenSubMenuClick}
        item={item}
        openSubMenu={openSubMenu}
        sidebarIsOpen={open}
      />
    );
  };

  renderMenuItem = (item, nestedClass) => {
    const { openDrawerOnHover } = this.state;
    const { drawerIsOpen, selectedMenuItem } = this.props;
    const open = drawerIsOpen || openDrawerOnHover;
    let selectedMenuItemParentId;
    if (selectedMenuItem.parent) {
      const { parentId } = selectedMenuItem.parent;
      selectedMenuItemParentId = parentId;
    }

    return (
      <LeftSideBarMenuItem
        nestedClass={nestedClass}
        icon={item.icon}
        item={item}
        selectedMenuItem={selectedMenuItem}
        selectedMenuItemParentId={selectedMenuItemParentId}
        sidebarIsOpen={open}
      />
    );
  };

  renderCollapseSubMenu = item => {
    const { openDrawerOnHover, openSubMenu } = this.state;
    const { classes, drawerIsOpen } = this.props;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      <Collapse in={openSubMenu[item.id]} unmountOnExit>
        {open &&
          item.children.map(subItem => (
            <button
              type="button"
              key={`id-${subItem.id}`}
              className={classes.link}
              onClick={() => this.handleMenuNavigation(subItem, item.icon)}
            >
              {this.renderMenuItem(subItem, classes.nested, item.icon)}
            </button>
          ))}
      </Collapse>
    );
  };

  renderMenuItems = () => {
    const { classes, menu } = this.props;

    return (
      menu &&
      menu.map((item, index) =>
        !item.children || item.isDynamic ? (
          <div
            key={`id-${item.id}`}
            className={classes.link}
            onClick={() => this.handleMenuNavigation(item, item.icon)}
            onKeyPress={() => {}}
            role="button"
            tabIndex={index}
          >
            {this.renderMenuItem(item, null, item.icon)}
          </div>
        ) : (
          <div key={`id-${item.id}`}>
            {this.renderSubMenuItem(item)}
            {this.renderCollapseSubMenu(item)}
          </div>
        ),
      )
    );
  };

  renderOpenViewsList = () => {
    const { openDrawerOnHover } = this.state;
    const { classes, drawerIsOpen } = this.props;
    const { collapseOpenViews } = this.state;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      <div className="open-views-list">
        {open ? (
          <LeftSideBarMenuList
            handleOnClick={this.handleOpenViewTitleClick}
            isCollapsed={collapseOpenViews}
            menuListClass={classes.openViews}
            sidebarIsOpen={open}
            subHeaderClass={classes.subHeader}
            title="OPEN VIEWS"
          >
            {this.renderOpenViews()}
          </LeftSideBarMenuList>
        ) : null}
      </div>
    );
  };

  renderMenuList = () => {
    const { openDrawerOnHover } = this.state;
    const { classes, drawerIsOpen } = this.props;
    const { collapseMenu } = this.state;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      <div className="menu-list">
        <LeftSideBarMenuList
          handleOnClick={this.handleMenuTitleClick}
          isCollapsed={collapseMenu}
          menuListClass={classes.root}
          sidebarIsOpen={open}
          subHeaderClass={classes.subHeader}
          title="MENU"
        >
          {this.renderMenuItems()}
        </LeftSideBarMenuList>
      </div>
    );
  };

  renderDrawerMenuItems = () => {
    const { showOpenViews } = this.props;

    return (
      <div>
        {showOpenViews && this.renderOpenViewsList()}
        {this.renderMenuList()}
      </div>
    );
  };

  renderSideBar = () => {
    const { openDrawerOnHover } = this.state;
    const { classes, theme, drawerIsOpen, type } = this.props;
    const open = drawerIsOpen || openDrawerOnHover;

    return (
      <Drawer
        id={`sidebar-menu${type === 'temporary' ? '-mobile' : ''}`}
        variant={type}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={open}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onMouseEnter={type === 'permanent' ? this.openDrawer : null}
        onMouseLeave={type === 'permanent' ? this.closeDrawer : null}
        onClose={this.props.handleDrawerToggle}
      >
        <LeftSideDrawer {...this.props}>
          {this.renderDrawerMenuItems()}
        </LeftSideDrawer>
      </Drawer>
    );
  };

  render() {
    return this.renderSideBar();
  }
}

LeftSideBar.propTypes = {
  drawerIsOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  closeView: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleCloseView: PropTypes.func.isRequired,
  location: PropTypes.any.isRequired,
  menu: PropTypes.array.isRequired,
  openViews: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
  showOpenViews: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
  openViews: makeSelectOpenViews(),
  selectedMenuItem: makeSelectSelectedMenuItem(),
  location: makeSelectLocation(),
  showOpenViews: makeSelectShowOpenView(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withStyles(theme => layoutStyles(theme), {
    withTheme: true,
  })(LeftSideBar),
);
