import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import layoutStyles from 'containers/Layout/styles';

class MainContent extends React.PureComponent {
  render() {
    const {
      classes,
      selectedMenuItem,
      sidebarIsOpen,
      showHeaderTabs,
    } = this.props;
    let mainContainerClass = 'main-container main-container-sidebar-opened';
    let subtabs = '';

    if (!sidebarIsOpen) {
      mainContainerClass = 'main-container main-container-sidebar-closed';
    }

    if (showHeaderTabs && selectedMenuItem && selectedMenuItem.parent) {
      subtabs = 'subtabs';
    }

    return (
      <main
        className={classNames(classes.content, mainContainerClass, subtabs)}
      >
        {this.props.children}
      </main>
    );
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
  children: PropTypes.node,
  sidebarIsOpen: PropTypes.bool.isRequired,
  showHeaderTabs: PropTypes.bool.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(MainContent);
