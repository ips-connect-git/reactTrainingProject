import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const AddEditDialog = ({
  addOrEditText,
  openAddEditDialog,
  onAddEditPost,
  onBodyTextFieldChanged,
  onHandleCloseAddEditDialog,
  onTitleTextFieldChanged,
  selectedPost,
}) => (
  <Dialog
    fullWidth
    open={openAddEditDialog}
    onClose={onHandleCloseAddEditDialog}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">
      {`${addOrEditText} post ${
        selectedPost && addOrEditText === 'Edit' ? selectedPost.id : ''
      }`}
    </DialogTitle>
    <DialogContent>
      {selectedPost ? (
        <form>
          <img
            src={`https://s3.amazonaws.com/fortressassets/images/posts/${
              selectedPost.id > 100 || !selectedPost.id
                ? 'no-image'
                : selectedPost.id
            }_s.jpg`}
            alt={selectedPost.title}
          />
          <TextField
            margin="normal"
            label="Title"
            defaultValue={selectedPost.title}
            fullWidth
            error={selectedPost.title.length === 0}
            onBlur={onTitleTextFieldChanged}
          />
          <TextField
            margin="normal"
            label="Body"
            multiline
            rowsMax={4}
            defaultValue={selectedPost.body}
            fullWidth
            error={selectedPost.body.length === 0}
            onBlur={onBodyTextFieldChanged}
          />
        </form>
      ) : null}
    </DialogContent>
    <DialogActions>
      <Button onClick={onHandleCloseAddEditDialog}>Cancel</Button>
      <Button
        disabled={
          selectedPost &&
          (selectedPost.title.length === 0 || selectedPost.body.length === 0)
        }
        onClick={onAddEditPost}
        color="primary"
      >
        {addOrEditText}
      </Button>
    </DialogActions>
  </Dialog>
);

AddEditDialog.propTypes = {
  addOrEditText: PropTypes.string.isRequired,
  onAddEditPost: PropTypes.func.isRequired,
  onBodyTextFieldChanged: PropTypes.func.isRequired,
  onHandleCloseAddEditDialog: PropTypes.func.isRequired,
  onTitleTextFieldChanged: PropTypes.func.isRequired,
  openAddEditDialog: PropTypes.bool.isRequired,
  selectedPost: PropTypes.object,
};

export default AddEditDialog;
