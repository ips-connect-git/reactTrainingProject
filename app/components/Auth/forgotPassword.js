import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

class ForgotPassword extends React.Component {
  state = {
    showEmailSentMessage: false,
    message: 'Enter your e-mail address below to reset your password.',
  };

  sentEmail = () => {
    const { email } = this.props;
    this.setState({
      showEmailSentMessage: true,
      message: `An email has been sent to ${email} with further instructions.`,
    });
  };

  render() {
    const { classes, email, onEmailChange, onGoBack } = this.props;
    const { showEmailSentMessage } = this.state;

    return (
      <div className={classes.boxContainer}>
        <div className={classes.boxWrapper}>
          <Paper className={classes.paper} elevation={3} square>
            <div>
              <div className={classes.title}>Forgot Password?</div>
              <div className={classes.logoSmallContainer}>
                <img
                  src="https://s3.amazonaws.com/fortressassets/logo-small.png"
                  alt="Fortress Admin Template"
                />
              </div>
            </div>
            <hr />
            <Typography paragraph>{this.state.message}</Typography>
            <form>
              {showEmailSentMessage ? null : (
                <TextField
                  label="E-mail"
                  fullWidth
                  defaultValue={email}
                  onBlur={onEmailChange}
                />
              )}

              <div className={classes.buttonsContainer}>
                <Button onClick={onGoBack}>Go Back</Button>

                {showEmailSentMessage ? null : (
                  <Button
                    color="primary"
                    className={classes.boxBtn}
                    onClick={this.sentEmail}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(() => styles(), {
  withTheme: true,
})(ForgotPassword);
