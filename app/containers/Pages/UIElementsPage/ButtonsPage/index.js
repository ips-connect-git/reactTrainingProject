import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import NavigationIcon from '@material-ui/icons/Navigation';
import Paper from '@material-ui/core/Paper';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import PageBase from 'components/PageBase';

import styles from './styles';

class ButtonsPage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="Buttons Page"
        navigation="Application / UI Elements / Buttons Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Text Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <Button className={classes.button}>Default</Button>
              <Button color="primary" className={classes.button}>
                Primary
              </Button>
              <Button color="secondary" className={classes.button}>
                Secondary
              </Button>
              <Button disabled className={classes.button}>
                Disabled
              </Button>
              <Button href="#text-buttons" className={classes.button}>
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="flat-button-file"
                multiple
                type="file"
              />
              <label htmlFor="flat-button-file">
                <Button component="span" className={classes.button}>
                  Upload
                </Button>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Outlined Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <Button variant="outlined" className={classes.button}>
                Default
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Secondary
              </Button>
              <Button variant="outlined" disabled className={classes.button}>
                Disabled
              </Button>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                className={classes.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
              />
              <label htmlFor="outlined-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Contained Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <Button variant="contained" className={classes.button}>
                Default
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled
                className={classes.button}
              >
                Disabled
              </Button>
              <Button
                variant="contained"
                href="#contained-buttons"
                className={classes.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Floating Action Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <Fab color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="Edit"
                className={classes.button}
              >
                <Icon>edit_icon</Icon>
              </Fab>
              <Fab
                variant="extended"
                aria-label="Delete"
                className={classes.button}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Extended
              </Fab>
              <Fab disabled aria-label="Delete" className={classes.button}>
                <DeleteIcon />
              </Fab>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Icon Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <IconButton className={classes.button} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton
                className={classes.button}
                aria-label="Delete"
                disabled
                color="primary"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="secondary"
                className={classes.button}
                aria-label="Add an alarm"
              >
                <Icon>alarm</Icon>
              </IconButton>
              <IconButton
                color="primary"
                className={classes.button}
                aria-label="Add to shopping cart"
              >
                <AddShoppingCartIcon />
              </IconButton>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  className={classes.button}
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Buttons with icons and label
            </Typography>
            <Paper square className={classes.paper}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
              >
                Upload
                <CloudUploadIcon className={classes.rightIcon} />
              </Button>
              <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
              >
                <KeyboardVoiceIcon className={classes.leftIcon} />
                Talk
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                <SaveIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/buttons/" />
      </PageBase>
    );
  }
}

ButtonsPage.propTypes = {
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
)(ButtonsPage);
