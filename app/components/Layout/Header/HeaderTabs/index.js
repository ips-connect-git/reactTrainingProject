import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';

import layoutStyles from 'containers/Layout/styles';
import Profile from 'containers/Layout/Profile';
import Search from 'components/Layout/Header/Search';
import SettingsButton from 'containers/Layout/Settings/settingsButton';
import Tabs from './Tabs';

class HeaderTabs extends React.Component {
  handleOnClickAway = () => {
    const { showSearch, onShowSearch } = this.props;

    setTimeout(() => {
      if (showSearch) {
        onShowSearch(false);
      }
    }, 0);
  };

  handleHideSearch = value => {
    this.props.onShowSearch(value);
  };

  render() {
    const {
      classes,
      drawerIsOpen,
      selectedMenuItemHasChildren,
      openViews,
      selectedMenuItem,
      showSearch,
      handleDrawerToggle,
      handleCloseView,
      handleTabChange,
    } = this.props;

    return (
      <AppBar
        elevation={2}
        position="fixed"
        color="default"
        className={classNames(
          'primary-appbar',
          `${selectedMenuItemHasChildren && 'no-box-shadow'}`,
          classes.appBar,
          drawerIsOpen && classes.appBarShift,
        )}
      >
        <Toolbar disableGutters={!drawerIsOpen}>
          <IconButton aria-label="open drawer" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          {openViews && (
            <Tabs
              openViews={openViews}
              selectedMenuItem={selectedMenuItem}
              handleCloseView={handleCloseView}
              handleTabChange={handleTabChange}
            />
          )}
          {showSearch && (
            <ClickAwayListener onClickAway={this.handleOnClickAway}>
              <Search />
            </ClickAwayListener>
          )}
          <IconButton
            aria-label="search"
            onClick={() => this.handleHideSearch(!showSearch)}
          >
            <SearchIcon />
          </IconButton>
          <SettingsButton />
          <Profile drawerIsOpen={drawerIsOpen} />
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  showSearch: PropTypes.bool.isRequired,
  selectedMenuItemHasChildren: PropTypes.bool.isRequired,
  onShowSearch: PropTypes.func.isRequired,
  openViews: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  handleCloseView: PropTypes.func.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(HeaderTabs);
