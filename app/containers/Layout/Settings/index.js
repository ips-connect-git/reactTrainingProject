import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import {
  makeSelectCurrentTheme,
  makeSelectOpenSettingDrawer,
  makeSelectShowOpenView,
  makeSelectShowHeaderTabs,
} from 'containers/App/selectors';
import {
  changeTheme,
  closeSettingsDrawer,
  showHideOpenViews,
  showHideHeaderTabs,
} from 'containers/App/actions';
import layoutStyles from '../styles';

class Settings extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      closeSettingDrawnerOnce: false,
      currentTheme: props.currentTheme,
      canOpenSettingsDrawer: true,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.isWindowResizing);
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (
      nextProps.location.pathname !== '/' &&
      !prevProps.closeSettingDrawnerOnce
    ) {
      return {
        closeSettingDrawnerOnce: true,
      };
    }
    if (nextProps.currentTheme !== prevProps.currentTheme) {
      return {
        currentTheme: nextProps.currentTheme,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.props.dispatch(closeSettingsDrawer());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isWindowResizing);
  }

  isWindowResizing = () => {
    if (!this.props.openSettingDrawer) {
      this.setState({
        canOpenSettingsDrawer: false,
      });
      setTimeout(() => {
        this.setState({ canOpenSettingsDrawer: true }); // Fix resizing bug. The bug shows the settings drawer while resizing the windows and is hidden, so we can show it after resizing and have waited 500ms
      }, 500);
    }
  };

  themeChanged = event => {
    const newTheme = event.target.value;
    this.props.dispatch(changeTheme(newTheme));
  };

  closeSettingsDrawer = () => {
    this.props.dispatch(closeSettingsDrawer());
  };

  handleShowOpenViews = () => {
    const { dispatch, showOpenViews } = this.props;
    dispatch(showHideOpenViews(!showOpenViews));
  };

  handleShowHeaderTabs = () => {
    const { dispatch, showHeaderTabs } = this.props;
    dispatch(showHideHeaderTabs(!showHeaderTabs));
  };

  render() {
    const { canOpenSettingsDrawer, currentTheme } = this.state;
    const {
      classes,
      openSettingDrawer,
      showOpenViews,
      showHeaderTabs,
    } = this.props;

    return (
      <div>
        {canOpenSettingsDrawer ? (
          <Drawer open={openSettingDrawer} anchor="right" variant="persistent">
            <Grid className={classes.settingsContainer} container>
              <Grid item>
                <IconButton
                  className={classes.settingsCloseButton}
                  onClick={this.closeSettingsDrawer}
                >
                  <ChevronRightIcon />
                </IconButton>
                <Typography gutterBottom variant="h5">
                  <strong>Theme</strong> Color
                </Typography>
                <Divider />
                <RadioGroup
                  name="themes"
                  value={currentTheme}
                  onChange={this.themeChanged}
                >
                  <FormControlLabel
                    value="default"
                    control={<Radio color="primary" />}
                    label="Default"
                  />
                  <FormControlLabel
                    value="atom"
                    control={<Radio color="primary" />}
                    label="Atom"
                  />
                  <FormControlLabel
                    value="aurelia"
                    control={<Radio color="primary" />}
                    label="Aurelia"
                  />
                  <FormControlLabel
                    value="quiet"
                    control={<Radio color="primary" />}
                    label="Quiet"
                  />
                  <FormControlLabel
                    value="sky"
                    control={<Radio color="primary" />}
                    label="Sky"
                  />
                </RadioGroup>
                <Typography gutterBottom variant="h5">
                  <strong>Layout</strong>
                </Typography>
                <Divider />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOpenViews}
                        onChange={this.handleShowOpenViews}
                      />
                    }
                    label="Show Open Views"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showHeaderTabs}
                        onChange={this.handleShowHeaderTabs}
                      />
                    }
                    label="Show Header Tabs"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Drawer>
        ) : null}
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  currentTheme: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  openSettingDrawer: PropTypes.bool.isRequired,
  showOpenViews: PropTypes.bool.isRequired,
  showHeaderTabs: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  currentTheme: makeSelectCurrentTheme(),
  openSettingDrawer: makeSelectOpenSettingDrawer(),
  showOpenViews: makeSelectShowOpenView(),
  showHeaderTabs: makeSelectShowHeaderTabs(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withStyles(theme => layoutStyles(theme), {
    withTheme: true,
  }),
)(Settings);
