import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const DeleteDialog = ({
  onDeletePost,
  onHandleCloseDeleteDialog,
  openDeleteDialog,
  selectedPost,
}) => (
  <Dialog
    fullWidth
    open={openDeleteDialog}
    onClose={onHandleCloseDeleteDialog}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">
      Are you sure you want to delete this post?
    </DialogTitle>
    <DialogContent>
      <Typography paragraph>{selectedPost && selectedPost.title}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onHandleCloseDeleteDialog}>Cancel</Button>
      <Button onClick={onDeletePost} color="primary">
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteDialog.propTypes = {
  onHandleCloseDeleteDialog: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  openDeleteDialog: PropTypes.bool.isRequired,
  selectedPost: PropTypes.object,
};

export default DeleteDialog;
