import React, {Component} from 'react'
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import {savePost} from '../../actions/postActions';
import {toggleCommentDatePicker} from '../../actions/uiActions';
import './postForm.scss';
import classname from 'classname';


class PostForm extends Component{

    state = {
        post:{},
        isDatePickerShowing:false,
    }

    componentWillMount(){
        this.savePostToLocalState(this.props.post);
    }

    savePostToLocalState = (post) =>{
        post = post ? post : {author:'',timestamp:Date.now(),body:'',deleted:false,title:'',voteScore:0};
        this.setState({post});
    }

    onFieldChange = (target, input) => {
        const updateValue = (target === 'timestamp') ? (input.unix() * 1000) : input;

        console.log(updateValue);

        const post = {...this.state.post,[target]:updateValue};
        this.setState({post});
    }

    saveForm = (event) => {
        event.preventDefault();
        const post = {...this.state.post};
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

    render(){
        if(!this.props.post) {return (<div></div>)}

        const submitEnabled = false;
        const submitButtonClass = classname({Comment__Submit:true});

        return (
            <form className="PostForm" onSubmit={this.saveForm}>
                <input
                    name="title"
                    className="Post__Title"
                    value={this.state.post.title}
                    onChange={event => this.onFieldChange('title',event.target.value)}
                    />
                <input
                    name="author"
                    className="Post__Author"
                    value={this.state.post.author}
                    onChange={event => this.onFieldChange('author',event.target.value)}
                />
                <SingleDatePicker
                    onFocusChange={this.toggleDatepickerFocus}
                    focused={this.state.isDatePickerShowing}
                    date={moment(this.state.post.timestamp)}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    firstDayOfWeek={1}
                    displayFormat="ddd, MMMM Do YYYY"
                    onDateChange={(momentObject) => this.onFieldChange('timestamp', momentObject)} />

                <textarea
                    name="body"
                    className="Post__Author"
                    value={this.state.post.body}
                    onChange={event => this.onFieldChange('body',event.target.value)}
                />

                <input type="submit" value="Save" className={submitButtonClass} />
            </form>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        savePost:(post) => dispatch(savePost(post)),
        toggleDatePicker:({focused}) => dispatch(toggleCommentDatePicker(focused)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);