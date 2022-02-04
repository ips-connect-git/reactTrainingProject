import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import layoutStyles from 'containers/Layout/styles';

const SubTabs = ({
  classes,
  handleCloseView,
  handleTabChange,
  openViews,
  selectedMenuItem,
}) => (
  <Tabs
    className={classNames('tabs', classes.tabs)}
    value={selectedMenuItem.index}
    onChange={handleTabChange}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="primary"
    textColor="primary"
  >
    {openViews &&
      openViews.map(menuItem => (
        <Tab
          key={`id-${menuItem.id}`}
          value={menuItem.index}
          label={menuItem.text}
          className={classNames(
            `${menuItem.index > 0 ? 'close-tab' : ''}`,
            classes.tab,
          )}
          icon={
            menuItem.index ? (
              <Icon
                onClick={() => handleCloseView(menuItem)}
                className="material-icons"
              >
                cancel
              </Icon>
            ) : null
          }
        />
      ))}
  </Tabs>
);

SubTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCloseView: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  openViews: PropTypes.any.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(SubTabs);
