import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import PT from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import classname from 'classname';

import { saveComment } from 'actions/commentActions';
import { toggleCommentDatePicker } from 'actions/uiActions';
import { createCommentTemplate } from 'constants/constants';

import './commentForm.scss';

class CommentForm extends Component {
  static propTypes = {
    comment: PT.object,
    saveComment: PT.func.isRequired,
    parentId: PT.string.isRequired,
  };

  static defaultProps = {
    comment: createCommentTemplate(),
  };

  componentWillMount() {
    this.setState({ isDatePickerShowing: false });

    // Set a local state of the comment for editing. This state object will be sent
    // to commentReducer on save. The object is either derived from and existing
    // comment to be edited or from defaultProps if the comment is new.
    this.setState({ comment: { ...this.props.comment } });
  }

  onFieldChange = (target, input) => {
    // Update the local copy of the comment. The actuall redux state is updated
    // when user hits save.
    this.setState({ comment: { ...this.state.comment, [target]: input } });
  };

  saveForm = event => {
    event.preventDefault();

    // Create copy of comment object to avoid state mutation.
    const comment = { ...this.state.comment };

    // Crude form validation
    if (comment.author === '' || comment.body === '') return;

    // Make some adjustments to comment object before sending to reducer.
    comment.isEditing = false;
    comment.parentId = comment.parentId ? comment.parentId : this.props.parentId;

    this.props.saveComment(comment);
    this.resetCommentForm();
  };

  resetCommentForm = () => {
    // Reset the form by creating a new local comment object for the
    // controlled form.
    this.setState({ comment: createCommentTemplate() });
  };

  inputOnFocus = event => {
    this.setState({ inputFocus: event.target.name });
  };

  inputOnBlur = () => {
    this.setState({ inputFocus: '' });
  };

  toggleDatepickerFocus = ({ focused }) => {
    this.setState({ isDatePickerShowing: focused });
  };

  render() {
    const { author, timestamp, body } = this.state.comment;

    // Disable the submit button if some fields are empty.
    const submitButtonClass = classname({
      Comment__Submit: true,
      'Comment__Submit--disabled': (author === '' || body === ''),
    });

    return (
      <form className="CommentForm" onSubmit={this.saveForm}>
        <SingleDatePicker
          onFocusChange={this.toggleDatepickerFocus}
          focused={this.state.isDatePickerShowing}
          date={moment(timestamp)}
          numberOfMonths={1}
          isOutsideRange={() => false}
          firstDayOfWeek={1}
          displayFormat="ddd, MMMM Do YYYY"
          onDateChange={momentObject => this.onFieldChange('timestamp', momentObject.unix() * 1000)}
        />
        <div className={classname({
          Input__Wrapper: true,
          Input__Wrapper__Author: true,
          'Input__Wrapper--blurandempty': ((this.state.inputFocus !== 'author' &&
            this.state.comment.author === '')),
        })}
        >
          <input
            className="Comment__Author"
            name="author"
            type="text"
            value={author}
            onChange={event => this.onFieldChange('author', event.target.value)}
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
          />
        </div>
        <div className={classname({
          Input__Wrapper: true,
          Input__Wrapper__Body: true,
          'Input__Wrapper--blurandempty': ((this.state.inputFocus !== 'body' &&
            this.state.comment.body === '') || this.state.comment.body === undefined),
        })}
        >
          <textarea
            className="Comment__Body"
            name="body"
            value={body}
            onChange={event => this.onFieldChange('body', event.target.value)}
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
          />
        </div>
        <input type="submit" value="Save" className={submitButtonClass} />
      </form>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment)),
  toggleDatePicker: ({ focused }) => dispatch(toggleCommentDatePicker(focused)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
