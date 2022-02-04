import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Header from 'containers/Layout/Header';

import Auth from 'containers/Auth';
import { findMenuItem, isMobile, updateMenuDimensions } from 'utils/menuHelper';
import { openView, closeView, selectMenuItem } from 'containers/App/actions';
import layoutStyles from 'containers/Layout/styles';
import LeftSideBar from 'containers/Layout/LeftSideBar';
import MainContent from 'components/Layout/MainContent';
import Settings from 'containers/Layout/Settings';
import withMaterialUI from 'containers/Layout';
import {
  makeSelectLocation,
  makeSelectMenu,
  makeSelectOpenViews,
  makeSelectSelectedMenuItem,
  makeSelectUserIsAuthenticated,
  makeSelectCurrentTheme,
  makeSelectShowHeaderTabs,
} from './selectors';
import { Routes } from './menu';
import GlobalStyle from '../../global-styles';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
      location: props.location,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', updateMenuDimensions);
    updateMenuDimensions();
    this.setInicialSelectedMenuItem();
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.location.pathname !== prevProps.location.pathname) {
      const url = nextProps.location.pathname;
      const { menu, openViews, dispatch } = nextProps;

      let result = findMenuItem(menu, 'url', url);
      const { foundMenuItem, foundParentMenuItem } = result;

      result = findMenuItem(openViews, 'url', url);
      const foundOpenViewItem = result.foundMenuItem;

      if (foundMenuItem) {
        if (!foundOpenViewItem) {
          const icon = foundParentMenuItem
            ? foundParentMenuItem.icon
            : foundMenuItem.icon;
          dispatch(openView(foundMenuItem, icon, openViews)); // Add new openView item
        } else {
          // Select menu item
          dispatch(selectMenuItem(foundMenuItem, foundOpenViewItem, openViews));
        }
      }
      if (isMobile()) {
        return { open: false, location: nextProps.location };
      }
      return { location: nextProps.location };
    }
    return null;
  }

  componentDidUpdate() {
    setTimeout(() => {
      updateMenuDimensions();
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateMenuDimensions);
  }

  setInicialSelectedMenuItem = () => {
    const {
      dispatch,
      location,
      menu,
      openViews,
      selectedMenuItem,
    } = this.props;
    const { pathname } = location;

    if (selectedMenuItem && selectedMenuItem.url !== pathname) {
      const { foundMenuItem, foundParentMenuItem } = findMenuItem(
        menu,
        'url',
        pathname,
      );
      if (foundMenuItem) {
        const icon = foundParentMenuItem
          ? foundParentMenuItem.icon
          : foundMenuItem.icon;

        dispatch(openView(foundMenuItem, icon, openViews)); // Add new openView item
      }
    }
  };

  handleDrawerToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleCloseView = menuItem => {
    this.isClosingOpenView = true;
    const { dispatch, menu, openViews } = this.props;
    const openedView = openViews.find(item => item.id === menuItem.id);
    let indexToBeRemoved = openViews.indexOf(openedView);

    if (indexToBeRemoved > 0) {
      const isParentMenuItem = menuItem.children;
      if (isParentMenuItem) {
        const parentMenuFirtChild = openViews.find(
          item => item.id === menuItem.children[0].id,
        );
        indexToBeRemoved = openViews.indexOf(parentMenuFirtChild);
      }
      // find previous menu item
      const previousItem = openViews[indexToBeRemoved - 1];
      let result = findMenuItem(menu, 'id', previousItem.id);
      const { foundMenuItem } = result;

      // find previous open view
      result = findMenuItem(openViews, 'id', previousItem.id);
      const foundOpenViewItem = result.foundMenuItem;

      if (foundMenuItem) {
        // create array of ids to be removed
        let idsToBeRemoved = [menuItem.id];
        if (isParentMenuItem) {
          idsToBeRemoved = menuItem.children.map(child => child.id);
        }

        dispatch(closeView(foundMenuItem, foundOpenViewItem, idsToBeRemoved));
      }
    }
  };

  renderHeader = () => {
    const { open } = this.state;

    return (
      <Header
        drawerIsOpen={open}
        handleDrawerToggle={this.handleDrawerToggle}
        handleCloseView={this.handleCloseView}
      />
    );
  };

  renderLeftSideBar = type => {
    const { open } = this.state;

    return (
      <LeftSideBar
        type={type}
        drawerIsOpen={open}
        closeView={() => {}}
        handleDrawerToggle={this.handleDrawerToggle}
        handleCloseView={this.handleCloseView}
      />
    );
  };

  renderMainContent = () => {
    const { selectedMenuItem, menu, showHeaderTabs, location } = this.props;
    const sidebarIsOpen = this.state.open;

    return (
      <MainContent
        sidebarIsOpen={sidebarIsOpen}
        selectedMenuItem={selectedMenuItem}
        showHeaderTabs={showHeaderTabs}
      >
        {Routes(location, menu)}
      </MainContent>
    );
  };

  render() {
    const { userIsAuthenticated, location } = this.props;

    return (
      <div id="app-wrapper">
        {!userIsAuthenticated ? (
          <Auth />
        ) : (
          <div className="app-frame">
            {this.renderHeader()}
            <Hidden mdUp>{this.renderLeftSideBar('temporary')}</Hidden>
            <Hidden smDown implementation="css">
              {this.renderLeftSideBar('permanent')}
            </Hidden>
            {this.renderMainContent()}
            <Settings location={location} />
          </div>
        )}
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
  openViews: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
  userIsAuthenticated: PropTypes.bool.isRequired,
  showHeaderTabs: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentTheme: makeSelectCurrentTheme(),
  location: makeSelectLocation(),
  menu: makeSelectMenu(),
  openViews: makeSelectOpenViews(),
  selectedMenuItem: makeSelectSelectedMenuItem(),
  showHeaderTabs: makeSelectShowHeaderTabs(),
  userIsAuthenticated: makeSelectUserIsAuthenticated(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withMaterialUI(
    withStyles(theme => layoutStyles(theme), {
      withTheme: true,
    })(App),
  ),
);
