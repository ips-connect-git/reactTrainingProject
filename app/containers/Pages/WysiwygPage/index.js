import React from 'react';
import PropTypes from 'prop-types';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { withStyles } from '@material-ui/core/styles';

import PageBase from 'components/PageBase';
import LinkToReactDraftWysiwig from 'components/Credits/ReactDraftWysiwyg/linkToReactDraftWysiwig';
import styles from './styles';

class WysiwygPage extends React.PureComponent {
  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks,
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const { classes } = this.props;

    return (
      <PageBase title="React Draft Wysiwyg" minHeight={500} wrapContent>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName={classes.editor}
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          className={classes.content}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />

        <LinkToReactDraftWysiwig />
      </PageBase>
    );
  }
}

WysiwygPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  () => ({
    ...styles(),
  }),
  { withTheme: true },
)(WysiwygPage);
