import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import PageBase from 'components/PageBase';

import styles from './styles';

class PickersPage extends React.PureComponent {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    gilad: true,
    jason: false,
    antoine: false,
    switchA: true,
    switchB: false,
    switchC: true,
    value: 'female',
  };

  handleChange = name => event => {
    this.setState({
      [name]: name === 'value' ? event.target.value : event.target.checked,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      checkedA,
      checkedB,
      checkedF,
      checkedG,
      gilad,
      jason,
      antoine,
      value,
      switchA,
      switchB,
      switchC,
    } = this.state;
    const error =
      Object.values([gilad, jason, antoine]).filter(v => v).length !== 2;

    return (
      <PageBase
        title="Selection Controls Page"
        navigation="Application / UI Elements / Selection Controls Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Checkboxes
            </Typography>
            <Paper square className={classes.paper}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label="Secondary"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Primary"
                />
                <FormControlLabel
                  control={<Checkbox value="checkedC" />}
                  label="Uncontrolled"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox value="checkedD" />}
                  label="Disabled"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox checked value="checkedE" />}
                  label="Disabled"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedF}
                      onChange={this.handleChange('checkedF')}
                      value="checkedF"
                      indeterminate
                    />
                  }
                  label="Indeterminate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedG}
                      onChange={this.handleChange('checkedG')}
                      value="checkedG"
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label="Custom color"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      value="checkedH"
                    />
                  }
                  label="Custom icon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      value="checkedI"
                    />
                  }
                  label="Custom size"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Checkboxes with FormGroup
            </Typography>
            <Paper square className={classes.paper}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={this.handleChange('gilad')}
                        value="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={this.handleChange('jason')}
                        value="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={this.handleChange('antoine')}
                        value="antoine"
                      />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
              <FormControl
                required
                error={error}
                component="fieldset"
                className={classes.formControl}
              >
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={this.handleChange('gilad')}
                        value="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={this.handleChange('jason')}
                        value="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={this.handleChange('antoine')}
                        value="antoine"
                      />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>You can display an error</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Radio Buttons
            </Typography>
            <Paper square className={classes.paper}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  className={classes.group}
                  value={value}
                  onChange={this.handleChange('value')}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender2"
                  className={classes.group}
                  value={value}
                  onChange={this.handleChange('value')}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="primary" />}
                    label="Other"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                    labelPlacement="start"
                  />
                </RadioGroup>
                <FormHelperText>labelPlacement start</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Switches with FormGroup
            </Typography>
            <Paper square className={classes.paper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchA}
                        onChange={this.handleChange('switchA')}
                        value="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchB}
                        onChange={this.handleChange('switchB')}
                        value="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchC}
                        onChange={this.handleChange('switchC')}
                        value="antoine"
                      />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/selection-controls/" />
      </PageBase>
    );
  }
}

PickersPage.propTypes = {
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
)(PickersPage);
