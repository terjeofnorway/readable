import React, {Component} from 'react'
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import {saveComment} from '../../actions/commentActions';
import {toggleCommentDatePicker} from '../../actions/uiActions';
import DateTimeHelper from '../../helpers/datetime.js';
import './commentForm.scss';
import classname from 'classname';

const uuid = require('uuid/v4');



class CommentForm extends Component{

    state = {
        comment:{},
        isDatePickerShowing:false,
    }

    componentWillMount(){
        this.saveCommentToLocalState(this.props.comment);
    }

    saveCommentToLocalState = (comment) =>{
        comment = comment ? comment : {author:'',timestamp:Date.now(),body:'',parentId:this.props.parentId};
        this.setState({comment});
    }

    onFieldChange = (target, input) => {
        const updateValue = (target === 'timestamp') ? (input.unix() * 1000) : input;

        const comment = {...this.state.comment,[target]:updateValue};
        this.setState({comment});
    }

    saveForm = (event) => {
        event.preventDefault();
        const comment = {...this.state.comment};
        if(comment.author === '' || comment.body === '') return;
        comment.isEditing = false;
        this.props.saveComment(comment);
        this.resetComment();
    }

    inputOnFocus = (event) => {
        this.setState({inputFocus:event.target.name});
    }

    inputOnBlur = (event) => {
        this.setState({inputFocus:''});
    }

    resetComment = () => {
        this.setState({comment:{author:'', body:'', id:'', timestamp:Date.now()}});
    }

    toggleDatepickerFocus = ({focused}) => {
        this.setState({isDatePickerShowing:focused});
    }

    render(){

        const {author, timestamp, body} = this.state.comment;
        const submitEnabled = false;
        const submitButtonClass = classname({Comment__Submit:true,'Comment__Submit--disabled':(author ==='' || body === '')})

        return (
            <form className="CommentForm" onSubmit={this.saveForm}>
                <SingleDatePicker
                    onFocusChange={this.toggleDatepickerFocus}
                    focused={this.state.isDatePickerShowing}
                    date={moment(timestamp)}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    firstDayOfWeek={1}
                    displayFormat="ddd, MMMM Do YYYY"
                    onDateChange={(momentObject) => this.onFieldChange('timestamp', momentObject)} />
                <div className={classname({
                    Input__Wrapper:true,
                    Input__Wrapper__Author:true,
                    'Input__Wrapper--blurandempty':(this.state.inputFocus !== 'author' && this.state.comment.author === '')
                })}>
                    <input className='Comment__Author'
                           name="author"
                           type="text"
                           value={author}
                           onChange={(event) => this.onFieldChange('author',event.target.value)}
                           onFocus={this.inputOnFocus}
                           onBlur={this.inputOnBlur}
                    />
                </div>
                <div className={classname({
                    Input__Wrapper:true,
                    Input__Wrapper__Body:true,
                    'Input__Wrapper--blurandempty':(this.state.inputFocus !== 'body' && this.state.comment.body === '')
                })}>
                    <textarea
                        className='Comment__Body'
                        name='body'
                        value={body}
                        onChange={(event) => this.onFieldChange('body',event.target.value)}
                        onFocus={this.inputOnFocus}
                        onBlur={this.inputOnBlur}
                    />
                </div>
                <input type="submit" value="Save" className={submitButtonClass} />
            </form>
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        //isDatePickerShowing:ui.commentEditor.isDatePickerShowing,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveComment:(comment) => dispatch(saveComment(comment)),
        toggleDatePicker:({focused}) => dispatch(toggleCommentDatePicker(focused)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);