import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

import { signOut } from 'containers/App/actions';
import styles from './styles';

class Profile extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  signOut = () => {
    this.setState({
      anchorEl: null,
    });
    this.props.dispatch(signOut());
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, drawerIsOpen } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Tooltip title="John Doe">
          <IconButton
            aria-owns={drawerIsOpen ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
          >
            <Avatar className={classes.avatar}>JD</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem>View Profile</MenuItem>
          <MenuItem>Help</MenuItem>
          <Divider />
          <MenuItem onClick={this.signOut}>Sign out</MenuItem>
        </Menu>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(
  withStyles(theme => styles(theme), {
    withTheme: true,
  })(Profile),
);
