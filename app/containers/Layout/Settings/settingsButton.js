import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import { isMobile } from 'utils/menuHelper';
import {
  makeSelectOpenSettingDrawer,
  makeSelectLocation,
} from 'containers/App/selectors';
import {
  openSettingsDrawer,
  closeSettingsDrawer,
} from 'containers/App/actions';

class SettingsButton extends React.PureComponent {
  componentDidMount() {
    // Remove this conditional code if you don't want the settings drawer to display at load
    if (!isMobile()) {
      const { dispatch, location, openSettingDrawer } = this.props;
      setTimeout(() => {
        if (location.pathname === '/' && !openSettingDrawer) {
          dispatch(openSettingsDrawer());
        }
      }, 3000);
    }
  }

  openCloseSettingsDrawer = () => {
    const { openSettingDrawer } = this.props;
    if (openSettingDrawer) {
      this.props.dispatch(closeSettingsDrawer());
    } else {
      this.props.dispatch(openSettingsDrawer());
    }
  };

  render() {
    return (
      <IconButton
        className="settings-button"
        onClick={this.openCloseSettingsDrawer}
      >
        <SettingsIcon />
      </IconButton>
    );
  }
}

SettingsButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.any.isRequired,
  openSettingDrawer: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  openSettingDrawer: makeSelectOpenSettingDrawer(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SettingsButton);
