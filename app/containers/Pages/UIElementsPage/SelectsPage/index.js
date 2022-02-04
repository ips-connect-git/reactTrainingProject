import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import PageBase from 'components/PageBase';

import styles from './styles';

class SelectsPage extends React.PureComponent {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="Selects Page"
        navigation="Application / UI Elements / Selects Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Simple Select
            </Typography>
            <Paper square className={classes.paper}>
              <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Age</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-helper">Age</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={<Input name="age" id="age-helper" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    displayEmpty
                    name="age"
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Without label</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="age-label-placeholder">
                    Age
                  </InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={<Input name="age" id="age-label-placeholder" />}
                    displayEmpty
                    name="age"
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Label + placeholder</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl} disabled>
                  <InputLabel htmlFor="name-disabled">Name</InputLabel>
                  <Select
                    value={this.state.name}
                    onChange={this.handleChange}
                    input={<Input name="name" id="name-disabled" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                  </Select>
                  <FormHelperText>Disabled</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl} error>
                  <InputLabel htmlFor="name-error">Name</InputLabel>
                  <Select
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    renderValue={value => `⚠️  - ${value}`}
                    input={<Input id="name-error" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                  </Select>
                  <FormHelperText>Error</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="name-readonly">Name</InputLabel>
                  <Select
                    value={this.state.name}
                    onChange={this.handleChange}
                    input={<Input name="name" id="name-readonly" readOnly />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                  </Select>
                  <FormHelperText>Read only</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-auto-width">Age</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={<Input name="age" id="age-auto-width" />}
                    autoWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Auto width</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="" disabled>
                      Placeholder
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Placeholder</FormHelperText>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-required">Age</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                    inputProps={{
                      id: 'age-required',
                    }}
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/selects/" />
      </PageBase>
    );
  }
}

SelectsPage.propTypes = {
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
)(SelectsPage);
