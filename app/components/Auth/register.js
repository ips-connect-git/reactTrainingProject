import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { isMobile } from 'utils/menuHelper';
import styles from './styles';

class Register extends React.PureComponent {
  render() {
    const {
      classes,
      confirmPassword,
      fullName,
      email,
      onConfirmPasswordChange,
      onFullNameChange,
      onGoBack,
      onEmailChange,
      onPasswordChange,
      onRegister,
      password,
    } = this.props;

    let container;

    if (isMobile()) {
      container = classes.mobileContainerRegister;
    }

    return (
      <div className={classNames(classes.boxContainer, container)}>
        <div className={classes.boxWrapper}>
          <Paper className={classes.paper} elevation={3} square>
            <div>
              <div className={classes.title}>Sign Up</div>
              <div className={classes.logoSmallContainer}>
                <img
                  src="https://s3.amazonaws.com/fortressassets/logo-small.png"
                  alt="Fortress Admin Templat"
                />
              </div>
            </div>
            <hr />
            <form>
              <TextField
                margin="normal"
                label="Full Name"
                fullWidth
                defaultValue={fullName}
                onBlur={onFullNameChange}
              />
              <TextField
                margin="normal"
                label="E-mail"
                fullWidth
                defaultValue={email}
                onBlur={onEmailChange}
              />
              <TextField
                margin="normal"
                label="Password"
                fullWidth
                type="password"
                defaultValue={password}
                onBlur={onPasswordChange}
              />
              <TextField
                margin="normal"
                label="Confirm Password"
                fullWidth
                type="password"
                defaultValue={confirmPassword}
                onBlur={onConfirmPasswordChange}
              />

              <div className={classes.buttonsContainer}>
                <Button onClick={onGoBack}>Go Back</Button>

                <Button
                  color="primary"
                  className={classes.boxBtn}
                  onClick={onRegister}
                >
                  Register
                </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  fullName: PropTypes.string.isRequired,
  onFullNameChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onConfirmPasswordChange: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(() => styles(), {
  withTheme: true,
})(Register);
