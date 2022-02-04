import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import LinkToMaterialUI from 'components/Credits/MaterialUI/linkToMaterialUI';
import PageBase from 'components/PageBase';

import styles from './styles';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFieldsPage extends React.PureComponent {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <PageBase
        title="Text Fields Page"
        navigation="Application / UI Elements / Text Fields Page"
        minHeight={500}
      >
        <Grid container spacing={3} justify="center" direction="row">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              TextField
            </Typography>
            <Paper square className={classes.paper}>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="standard-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  error
                  id="standard-error"
                  label="Error"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
                <TextField
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-dense"
                  label="Dense"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  defaultValue="Default Value"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="normal"
                />
                <TextField
                  id="standard-with-placeholder"
                  label="With placeholder"
                  placeholder="Placeholder"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-textarea"
                  label="With placeholder multiline"
                  placeholder="Placeholder"
                  multiline
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-number"
                  label="Number"
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
                <TextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Native select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                >
                  {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-bare"
                  className={classes.textField}
                  defaultValue="Bare"
                  margin="normal"
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Outlined
            </Typography>
            <Paper square className={classes.paper}>
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  error
                  id="outlined-error"
                  label="Error"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-dense"
                  label="Dense"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                  helperText="hello"
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  defaultValue="Default Value"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-with-placeholder"
                  label="With placeholder"
                  placeholder="Placeholder"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-number"
                  label="Number"
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Native select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-bare"
                  className={classes.textField}
                  defaultValue="Bare"
                  margin="normal"
                  variant="outlined"
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" className={classes.title}>
              Filled
            </Typography>
            <Paper square className={classes.paper}>
              <form noValidate autoComplete="off">
                <TextField
                  id="filled-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  error
                  id="filled-error"
                  label="Error"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-dense"
                  label="Dense"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="filled"
                />
                <TextField
                  id="filled-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                  helperText="hello"
                  variant="filled"
                />
                <TextField
                  id="filled-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  defaultValue="Default Value"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-with-placeholder"
                  label="With placeholder"
                  placeholder="Placeholder"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-number"
                  label="Number"
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
                <TextField
                  id="filled-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                  variant="filled"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="filled-select-currency-native"
                  select
                  label="Native select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                  variant="filled"
                >
                  {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="filled-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="filled-bare"
                  className={classes.textField}
                  defaultValue="Bare"
                  margin="normal"
                  variant="filled"
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
        <LinkToMaterialUI link="https://material-ui.com/demos/text-fields/" />
      </PageBase>
    );
  }
}

TextFieldsPage.propTypes = {
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
)(TextFieldsPage);
