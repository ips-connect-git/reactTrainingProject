/*
  Get more info from:
  https://material.io/icons/
  https://github.com/mikamaunula/react-material-icons
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';

import actionIcons from './MaterialIcons/Action';
import alertIcons from './MaterialIcons/Alert';
import avIcons from './MaterialIcons/AV';
import communicationIcons from './MaterialIcons/Communication';
import contentIcons from './MaterialIcons/Content';
import deviceIcons from './MaterialIcons/Device';
import editorIcons from './MaterialIcons/Editor';
import fileIcons from './MaterialIcons/File';
import hardwareIcons from './MaterialIcons/Hardware';
import imageIcons from './MaterialIcons/Image';
import mapsIcons from './MaterialIcons/Maps';
import navigationIcons from './MaterialIcons/Navigation';
import notificationIcons from './MaterialIcons/Notification';
import socialIcons from './MaterialIcons/Social';
import styles from './styles';
import toggleIcons from './MaterialIcons/Toggle';

let loadingTimeOut;

class IconsPage extends React.PureComponent {
  state = {
    icons: [],
    loading: true,
  };

  componentWillMount() {
    this.createIconsList('Action', actionIcons);
    this.createIconsList('Alert', alertIcons);
    this.createIconsList('AV', avIcons);
    this.createIconsList('Communication', communicationIcons);
    this.createIconsList('Content', contentIcons);
    this.createIconsList('Device', deviceIcons);
    this.createIconsList('Editor', editorIcons);
    this.createIconsList('File', fileIcons);
    this.createIconsList('Hardware', hardwareIcons);
    this.createIconsList('Image', imageIcons);
    this.createIconsList('Maps', mapsIcons);
    this.createIconsList('Navigation', navigationIcons);
    this.createIconsList('Notification', notificationIcons);
    this.createIconsList('Social', socialIcons);
    this.createIconsList('Toggle', toggleIcons);
  }

  componentDidMount() {
    loadingTimeOut = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(loadingTimeOut);
  }

  getIconDisplayName = icon =>
    icon
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, str => str.toUpperCase());

  createIconsList = (iconLibraryTitle, iconLibrary) => {
    const { icons } = this.state;
    icons.push({
      iconLibraryTitle,
      iconLibrary,
    });

    this.setState({
      icons,
    });
  };

  renderIcon = icon => {
    const { classes } = this.props;
    return (
      <Icon className={classNames('material-icons', classes.icon)}>{icon}</Icon>
    );
  };

  render() {
    const { icons, loading } = this.state;
    const { classes } = this.props;

    return (
      <PageBase
        title="Icons Page"
        navigation="Application / Icons Page"
        minHeight={500}
        wrapContent
        loading={loading}
        showLoadingText
      >
        <Grid container>
          {!loading &&
            icons.map((library, index) => (
              <Grid key={`key-${index + 1}`}>
                <Typography variant="h5" className={classes.title}>
                  {library.iconLibraryTitle}
                </Typography>
                <Divider />
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="row"
                >
                  {Object.keys(library.iconLibrary).map((item, childIndex) => (
                    <Grid
                      key={`child-key-${childIndex + 1}`}
                      className={classes.icons}
                      item
                    >
                      {this.renderIcon(library.iconLibrary[item])}
                      <div className={classes.iconDisplayName}>
                        {this.getIconDisplayName(item)}
                      </div>
                    </Grid>
                  ))}
                </Grid>
                <Divider className={classes.divider} />
              </Grid>
            ))}
        </Grid>
      </PageBase>
    );
  }
}

IconsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(IconsPage);
