import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { findMenuItem } from 'utils/menuHelper';
import {
  makeSelectLocation,
  makeSelectMenu,
  makeSelectOpenViews,
  makeSelectSelectedMenuItem,
  makeSelectShowHeaderTabs,
  makeSelectShowSearch,
} from 'containers/App/selectors';
import { selectMenuItem, showHideSearch } from 'containers/App/actions';
import HeaderTabs from 'components/Layout/Header/HeaderTabs';
import HeaderSubTabs from 'components/Layout/Header/HeaderSubTabs';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.isClosingOpenView = false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.isClosingOpenView = false;
    }
  }

  handleTabChange = (event, value) => {
    if (this.isClosingOpenView) {
      return;
    }

    const { menu, openViews } = this.props;
    let result = findMenuItem(menu, 'index', value);
    const { foundMenuItem } = result;

    result = findMenuItem(openViews, 'index', value);
    const foundOpenViewItem = result.foundMenuItem;

    if (foundMenuItem) {
      // Select menu item
      this.props.dispatch(
        selectMenuItem(foundMenuItem, foundOpenViewItem, openViews),
      );
    }
  };

  handleCloseView = menuItem => {
    const isParentItem = menuItem.children;
    this.isClosingOpenView = true;
    this.props.handleCloseView(menuItem, menuItem.children, isParentItem);
  };

  getCalculatedOpenViews = () => {
    const { openViews } = this.props;
    const parentOpenViews = [];

    openViews.forEach(item => {
      const menuItem = item;
      if (menuItem.parent) {
        const { id, index, url } = menuItem;
        const { parentId, parentText } = menuItem.parent;
        const parentExits = parentOpenViews.find(
          parent => parent.parentId === parentId,
        );

        if (!parentExits) {
          parentOpenViews.push({
            id,
            url,
            index,
            parentId,
            children: [{ ...menuItem, firstChildId: menuItem.id }],
            text: parentText,
          });
        } else {
          parentExits.children.push({
            ...menuItem,
            firstChildId: parentExits.id,
          });
        }
      } else {
        parentOpenViews.push({ ...menuItem, parentId: menuItem.id });
      }
    });

    return parentOpenViews;
  };

  getCalculatedSelectedMenuItem = calculatedOpenViews => {
    const { selectedMenuItem } = this.props;

    return (
      calculatedOpenViews.find(
        item =>
          item.parentId ===
          (selectedMenuItem.parent && selectedMenuItem.parent.parentId),
      ) || selectedMenuItem
    );
  };

  handleShowSearch = value => {
    this.props.dispatch(showHideSearch(value));
  };

  render() {
    const {
      selectedMenuItem,
      drawerIsOpen,
      handleDrawerToggle,
      showHeaderTabs,
      showSearch,
    } = this.props;
    const calculatedOpenViews = this.getCalculatedOpenViews();
    const calculatedSelectedMenuItem = this.getCalculatedSelectedMenuItem(
      calculatedOpenViews,
    );

    return (
      <div>
        <HeaderTabs
          drawerIsOpen={drawerIsOpen}
          selectedMenuItemHasChildren={
            showHeaderTabs && calculatedSelectedMenuItem.children !== undefined
          }
          openViews={showHeaderTabs ? calculatedOpenViews : []}
          showSearch={showSearch}
          onShowSearch={this.handleShowSearch}
          selectedMenuItem={calculatedSelectedMenuItem}
          handleDrawerToggle={handleDrawerToggle}
          handleCloseView={this.handleCloseView}
          handleTabChange={this.handleTabChange}
        />
        {showHeaderTabs && calculatedSelectedMenuItem.children ? (
          <HeaderSubTabs
            drawerIsOpen={drawerIsOpen}
            selectedMenuItem={selectedMenuItem}
            openViews={calculatedSelectedMenuItem.children}
            handleCloseView={this.handleCloseView}
            handleTabChange={this.handleTabChange}
          />
        ) : null}
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  handleCloseView: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  location: PropTypes.any.isRequired,
  menu: PropTypes.array.isRequired,
  openViews: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
  showHeaderTabs: PropTypes.bool.isRequired,
  showSearch: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  menu: makeSelectMenu(),
  openViews: makeSelectOpenViews(),
  selectedMenuItem: makeSelectSelectedMenuItem(),
  showHeaderTabs: makeSelectShowHeaderTabs(),
  showSearch: makeSelectShowSearch(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
