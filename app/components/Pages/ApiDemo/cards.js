import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import styles from 'containers/Pages/ApiDemoPage/styles';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransition: false,
      postExpanded: {},
    };
  }

  componentDidMount() {
    this.setShowTransition();
  }

  handleExpandClick = post => {
    const { postExpanded } = this.state;
    const postId = this.getFormattedPostId(post.id);
    let expanded = true;

    if (postExpanded[postId] !== undefined) {
      expanded = !postExpanded[postId].expanded;
    }

    this.setState({
      postExpanded: Object.assign({}, postExpanded, {
        [postId]: { expanded },
      }),
    });
  };

  setShowTransition = () => {
    this.setState({ showTransition: true });
  };

  getFormattedPostId = id => `post${id}`;

  render() {
    const {
      classes,
      onSelectPostToBeEdited,
      onSelectPostToBeDeleted,
    } = this.props;
    const { showTransition, postExpanded } = this.state;
    const { post } = this.props;
    const postId = this.getFormattedPostId(post.id);
    const expanded =
      (postExpanded[postId] && postExpanded[postId].expanded) || false;

    return (
      <Grid item key={post.id}>
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => onSelectPostToBeEdited(post)}>
            <CSSTransition
              in={showTransition}
              appear
              classNames={{
                appear: 'fade-appear',
                appearActive: 'fade-appear-active',
              }}
              timeout={500}
            >
              <img
                id={`img-${post.id}`}
                className={classes.media}
                src={`https://s3.amazonaws.com/fortressassets/images/posts/${
                  post.id > 100 ? 'no-image' : post.id
                }.jpg`}
                alt={post.title}
              />
            </CSSTransition>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                {post.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions} disableSpacing>
            <IconButton
              aria-label="Edit"
              onClick={() => onSelectPostToBeEdited(post)}
            >
              <Icon>edit_icon</Icon>
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => onSelectPostToBeDeleted(post)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => this.handleExpandClick(post)}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectPostToBeEdited: PropTypes.func.isRequired,
  onSelectPostToBeDeleted: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(Cards);
