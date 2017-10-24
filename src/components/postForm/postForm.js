import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import PT from 'prop-types';
import { toggleCommentDatePicker } from 'actions/uiActions';
import classname from 'classname';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './postForm.scss';

class PostForm extends Component {
  static propTypes = {
    post: PT.shape({
      author: PT.string.isRequired,
      timestamp: PT.number.isRequired,
      title: PT.string.isRequired,
      body: PT.string.isRequired,
    }).isRequired,
    savePost: PT.func.isRequired,
    selectionCategories: PT.arrayOf(PT.shape({ value: PT.string.isRequired, label: PT.string.isRequired })).isRequired,
  }

  componentWillMount() {
    this.setState({ isDatePickerShowing: false });
    this.savePostToLocalState(this.props.post);
  }

  savePostToLocalState = post => {
    this.setState({ post });
  };

  updateLocalTempPost = (target, input) => {
    const updateValue = (target === 'timestamp') ? (input.unix() * 1000) : input;

    const post = { ...this.state.post, [target]: updateValue };
    this.setState({ post });
  };

  saveForm = event => {
    event.preventDefault();
    const post = { ...this.state.post };

    // Todo: write separate validation function.
    if (post.author === '' || post.body === '') return;
    post.isEditing = false;
    this.props.savePost(post);
  };

  toggleDatepickerFocus = ({ focused }) => {
    this.setState({ isDatePickerShowing: focused });
  };

  selectChange = event => {
    this.updateLocalTempPost('category', event.value);
  };

  inputOnFocus = event => {
    this.setState({ inputFocus: event.target.name });
  };

  inputOnBlur = () => {
    this.setState({ inputFocus: '' });
  };

  render() {
    const {
      category,
      title,
      timestamp,
      author,
      body,
    } = this.state.post;

    const submitButtonClass = classname({ Post__Submit: true });

    return (
      <form className="PostForm" onSubmit={this.saveForm}>
        <Select
          name="form-field-name"
          options={this.props.selectionCategories}
          allowCreate={false}
          searchable={false}
          value={category}
          placeholder="SELECT CATEGORY"
          clearable={false}
          onChange={this.selectChange}
          className="Post__Category"
        />
        <div className={classname({
          Input__Wrapper: true,
          Input__Wrapper__Title: true,
          'Input__Wrapper--blurandempty': (this.state.inputFocus !== 'title' &&
            this.state.post.title === ''),
        })}
        >
          <input
            name="title"
            className="Post__Title"
            value={title}
            onChange={event => this.updateLocalTempPost('title', event.target.value)}
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
          />
        </div>
        <div className={classname({
          Input__Wrapper: true,
          Input__Wrapper__Author: true,
          'Input__Wrapper--blurandempty': (this.state.inputFocus !== 'author' &&
            this.state.post.author === ''),
        })}
        >
          <input
            name="author"
            className="Post__Author"
            value={author}
            onChange={event => this.updateLocalTempPost('author', event.target.value)}
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
          />
        </div>
        <SingleDatePicker
          onFocusChange={this.toggleDatepickerFocus}
          focused={this.state.isDatePickerShowing}
          date={moment(timestamp)}
          numberOfMonths={1}
          isOutsideRange={() => false}
          firstDayOfWeek={1}
          displayFormat="ddd, MMMM Do YYYY"
          onDateChange={momentObject => this.updateLocalTempPost('timestamp', momentObject)}
        />
        <div className={classname({
          Input__Wrapper: true,
          Input__Wrapper__Body: true,
          'Input__Wrapper--blurandempty': (this.state.inputFocus !== 'body' &&
            this.state.post.body === ''),
        })}
        >
          <textarea
            name="body"
            className="Post__Body"
            value={body}
            onChange={event => this.updateLocalTempPost('body', event.target.value)}
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
          />
        </div>
        <input type="submit" value="Save" className={submitButtonClass} />
      </form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  selectionCategories: categories.map(item => ({ value: item.name, label: item.name })),
});

const mapDispatchToProps = dispatch => ({
  toggleDatePicker: ({ focused }) => dispatch(toggleCommentDatePicker(focused)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
