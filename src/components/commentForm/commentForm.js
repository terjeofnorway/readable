import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import PT from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { Column, Row } from 'react-foundation';
import { saveComment } from 'actions/commentActions';
import { toggleCommentDatePicker } from 'actions/uiActions';
import { createCommentTemplate } from 'constants/constants';
import classname from 'classname';
import './commentForm.scss';

class CommentForm extends Component {
  static propTypes = {
    comment: PT.object,
    saveComment: PT.func,
    parentId: PT.string.isRequired,
  }

  static defaultProps = {
    comment: createCommentTemplate(),
    saveComment: () => {},
  }

  componentWillMount() {
    this.setState({ isDatePickerShowing: false });
    this.saveCommentToLocalState(this.props.comment);
  }

  onFieldChange = (target, input) => {
    const updateValue = (target === 'timestamp') ?
      (input.unix() * 1000) :
      input;

    const comment = { ...this.state.comment, [target]: updateValue };
    this.setState({ comment });
  };

  saveCommentToLocalState = comment => {
    const localComment = comment ?
      { ...comment } :
      createCommentTemplate();

    this.setState({ comment: localComment });
  };

  saveForm = event => {
    event.preventDefault();
    const comment = { ...this.state.comment };
    if (comment.author === '' || comment.body === '') return;
    comment.isEditing = false;
    comment.parentId = comment.parentId ? comment.parentId : this.props.parentId;
    this.props.saveComment(comment);
    this.resetComment();
  };

  inputOnFocus = event => {
    this.setState({ inputFocus: event.target.name });
  };

  inputOnBlur = () => {
    this.setState({ inputFocus: '' });
  };

  resetComment = () => {
    this.setState({
      comment: createCommentTemplate(),
    });
  };

  toggleDatepickerFocus = ({ focused }) => {
    this.setState({ isDatePickerShowing: focused });
  };

  render() {
    const { author, timestamp, body } = this.state.comment;
    const submitButtonClass = classname({
      Comment__Submit: true,
      'Comment__Submit--disabled': (author === '' || body === ''),
    });

    return (
      <Column small={12} medium={8} offsetOnMedium={2}>
        <form className="CommentForm" onSubmit={this.saveForm}>
          <SingleDatePicker
            onFocusChange={this.toggleDatepickerFocus}
            focused={this.state.isDatePickerShowing}
            date={moment(timestamp)}
            numberOfMonths={1}
            isOutsideRange={() => false}
            firstDayOfWeek={1}
            displayFormat="ddd, MMMM Do YYYY"
            onDateChange={momentObject => this.onFieldChange('timestamp', momentObject)}
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
      </Column>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment)),
  toggleDatePicker: ({ focused }) => dispatch(toggleCommentDatePicker(focused)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
