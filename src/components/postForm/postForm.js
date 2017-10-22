import React, {Component} from 'react'
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import {toggleCommentDatePicker} from 'actions/uiActions';
import classname from 'classname';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './postForm.scss';


class PostForm extends Component{

    state = {
        post:{},
        isDatePickerShowing:false,
    }


    componentWillMount(){
        this.savePostToLocalState(this.props.post);
    }

    savePostToLocalState = (post) =>{
        this.setState({post});
    }

    updateLocalTempPost = (target, input) => {
        const updateValue = (target === 'timestamp') ? (input.unix() * 1000) : input;

        const post = {...this.state.post,[target]:updateValue};
        this.setState({post});
    }

    saveForm = (event) => {
        event.preventDefault();
        const post = {...this.state.post};

        // Todo: write separate validation function.
        if(post.author === '' || post.body === '') return;
        post.isEditing = false;
        this.props.savePost(post);
    }

    inputOnFocus = (event) => {
        this.setState({inputFocus:event.target.name});
    }

    inputOnBlur = (event) => {
        this.setState({inputFocus:''});
    }

    toggleDatepickerFocus = ({focused}) => {
        this.setState({isDatePickerShowing:focused});
    }

    selectChange = (event) => {
        this.updateLocalTempPost('category',event.value);
    }

    render(){
        const {category, title, timestamp, author, body} = this.state.post;


        const submitButtonClass = classname({Comment__Submit:true});

        return (
            <form className="PostForm" onSubmit={this.saveForm}>
                <Select
                    name="form-field-name"
                    options={this.props.selectionCategories}
                    allowCreate={false}
                    searchable={false}
                    value={category}
                    clearable={false}
                    onChange={this.selectChange}
                />
                <input
                    name="title"
                    className="Post__Title"
                    value={title}
                    onChange={event => this.updateLocalTempPost('title',event.target.value)}
                    />
                <input
                    name="author"
                    className="Post__Author"
                    value={author}
                    onChange={event => this.updateLocalTempPost('author',event.target.value)}
                />
                <SingleDatePicker
                    onFocusChange={this.toggleDatepickerFocus}
                    focused={this.state.isDatePickerShowing}
                    date={moment(timestamp)}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    firstDayOfWeek={1}
                    displayFormat="ddd, MMMM Do YYYY"
                    onDateChange={(momentObject) => this.updateLocalTempPost('timestamp', momentObject)} />

                <textarea
                    name="body"
                    className="Post__Body"
                    value={body}
                    onChange={event => this.updateLocalTempPost('body',event.target.value)}
                />

                <input type="submit" value="Save" className={submitButtonClass} />
            </form>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return {
        selectionCategories:categories.map(item => ({value: item.name, label: item.name})),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDatePicker:({focused}) => dispatch(toggleCommentDatePicker(focused)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);