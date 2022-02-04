import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Info from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const NotificationBox = ({ classes, text, link }) => (
  <Grid container spacing={3} style={{ marginBottom: 20 }}>
    <Grid item xs={12}>
      <Paper square>
        <List>
          <ListItem>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText
              primary={
                <span>
                  {text}
                  {link && (
                    <span>
                      {' '}
                      <a
                        className={classes && classes.link}
                        href={link}
                        target="_blank"
                      >
                        {link}
                      </a>
                    </span>
                  )}
                </span>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>
);

NotificationBox.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default NotificationBox;
