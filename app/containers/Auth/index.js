import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import ForgotPassword from 'components/Auth/forgotPassword';
import Login from 'components/Auth/login';
import Register from 'components/Auth/register';
import {
  makeSelectUserIsAuthenticated,
  makeSelectAuthenticationErrorMessage,
} from 'containers/App/selectors';
import {
  signIn,
  clearAuthenticationMessage,
  register,
  resetPassword,
} from 'containers/App/actions';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: 'demo@test.com', // default values, leave it empty when implementing your logic
        password: 'demo', // default values, leave it empty when implementing your logic
        rememberMe: false,
      },
      register: {
        fullName: 'John Smith',
        email: 'demo@test.com',
        password: 'demo',
        confirmPassword: 'demo',
      },
      forgotPassword: {
        email: 'demo@test.com',
      },
      showForgotPassword: false,
      showRegister: false,
      errorMessage: props.authenticationErrorMessage,
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (
      nextProps.authenticationErrorMessage !==
      prevProps.authenticationErrorMessage
    ) {
      return {
        errorMessage: nextProps.authenticationErrorMessage,
      };
    }

    return null;
  }

  signIn = () => {
    const { login } = this.state;
    const { email, password, rememberMe } = login;
    // validations goes here
    const payload = {
      email,
      password,
      rememberMe,
    };

    this.props.dispatch(signIn(payload));
  };

  loginEmailChanged = event => {
    const email = event.target.value;
    const { login } = this.state;
    const loginModified = Object.assign({}, login, { email });

    this.setState({
      login: loginModified,
    });

    this.props.dispatch(clearAuthenticationMessage());
  };

  loginPasswordChanged = event => {
    const password = event.target.value;
    const { login } = this.state;
    const loginModified = Object.assign({}, login, { password });

    this.setState({
      login: loginModified,
    });

    this.props.dispatch(clearAuthenticationMessage());
  };

  loginRememberMeChanged = event => {
    const rememberMe = event.target.checked;
    const { login } = this.state;
    const loginModified = Object.assign({}, login, { rememberMe });

    this.setState({
      login: loginModified,
    });
  };

  registerUser = () => {
    // validations goes here
    const { fullName, email, password } = this.state;
    const payload = {
      fullName,
      email,
      password,
    };

    this.props.dispatch(register(payload));
  };

  registerFullNameChanged = event => {
    const fullName = event.target.value;
    const registerState = this.state.register;
    const registerModified = Object.assign({}, registerState, { fullName });

    this.setState({
      register: registerModified,
    });
  };

  registerEmailChanged = event => {
    const email = event.target.value;
    const registerState = this.state.register;
    const registerModified = Object.assign({}, registerState, { email });

    this.setState({
      register: registerModified,
    });
  };

  registerPasswordChanged = event => {
    const password = event.target.value;
    const registerState = this.state.register;
    const registerModified = Object.assign({}, registerState, { password });

    this.setState({
      register: registerModified,
    });
  };

  registerConfirmPasswordChanged = event => {
    const confirmPassword = event.target.value;
    const registerState = this.state.register;
    const registerModified = Object.assign({}, registerState, {
      confirmPassword,
    });

    this.setState({
      register: registerModified,
    });
  };

  resetPassword = () => {
    // validations goes here
    const payload = {
      email: this.state.forgotPassword.email,
    };

    this.props.dispatch(resetPassword(payload));
  };

  forgotPasswordEmailChanged = event => {
    this.setState({
      forgotPassword: {
        email: event.target.value,
      },
    });
  };

  showLogin = () => {
    this.setState({
      showRegister: false,
      showForgotPassword: false,
    });
  };

  showRegister = () => {
    this.setState({
      showRegister: true,
      showForgotPassword: false,
    });
  };

  showForgotPassword = () => {
    this.setState({
      showRegister: false,
      showForgotPassword: true,
    });
  };

  render() {
    const { showRegister, login, errorMessage, forgotPassword } = this.state;

    return (
      <div>
        {showRegister ? (
          <div>
            <Register
              fullName={this.state.register.fullName}
              onFullNameChange={this.registerFullNameChanged}
              email={this.state.register.email}
              onEmailChange={this.registerEmailChanged}
              password={this.state.register.password}
              onPasswordChange={this.registerPasswordChanged}
              confirmPassword={this.state.register.confirmPassword}
              onConfirmPasswordChange={this.registerConfirmPasswordChanged}
              onRegister={this.registerUser}
              onGoBack={this.showLogin}
            />
          </div>
        ) : (
          <div>
            {this.state.showForgotPassword ? (
              <ForgotPassword
                email={forgotPassword.email}
                onEmailChange={this.forgotPasswordEmailChanged}
                onGoBack={this.showLogin}
              />
            ) : (
              <Login
                email={login.email}
                onEmailChange={this.loginEmailChanged}
                password={login.password}
                onPasswordChange={this.loginPasswordChanged}
                onSignIn={this.signIn}
                onForgotPassword={this.showForgotPassword}
                onRegister={this.showRegister}
                rememberMe={login.rememberMe}
                onRememberMeChange={this.loginRememberMeChanged}
                errorMessage={errorMessage}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

AuthPage.propTypes = {
  authenticationErrorMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  userIsAuthenticated: makeSelectUserIsAuthenticated(),
  authenticationErrorMessage: makeSelectAuthenticationErrorMessage(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
