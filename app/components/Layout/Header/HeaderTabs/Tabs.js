import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import layoutStyles from 'containers/Layout/styles';

const HeaderTabs = ({
  classes,
  openViews,
  selectedMenuItem,
  handleTabChange,
  handleCloseView,
}) => (
  <Tabs
    className={classNames('tabs', classes.tabs)}
    value={(selectedMenuItem && selectedMenuItem.index) || 0}
    onChange={handleTabChange}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="primary"
    TabIndicatorProps={
      selectedMenuItem.children && {
        style: { backgroundColor: grey[100], height: 48, zIndex: -1 },
      }
    }
    textColor="primary"
  >
    {openViews.map(menuItem => (
      <Tab
        key={`id-${menuItem.id}`}
        value={menuItem.index}
        label={menuItem.text}
        className={classNames(
          `${menuItem.index > 0 ? 'close-tab' : ''}`,
          classes.tab,
        )}
        component="div"
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

HeaderTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCloseView: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  openViews: PropTypes.any.isRequired,
  selectedMenuItem: PropTypes.object.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(HeaderTabs);
