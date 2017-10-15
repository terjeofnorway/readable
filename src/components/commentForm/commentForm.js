import React, {Component} from 'react'
import {connect} from 'react-redux';
import {saveComment} from '../../actions/commentActions';
import DateTimeHelper from '../../helpers/datetime.js';
import './commentForm.scss';
import classname from 'classname';

const uuid = require('uuid/v4');


class CommentForm extends Component{

    state = {
        comment:{}
    }

    componentWillMount(){
        this.saveCommentToState(this.props.comment);
    }

    componentWillReceiveProps(nextProps){
        this.saveCommentToState(nextProps.comment);
    }

    saveCommentToState = (comment) =>{
        comment = comment ? comment : {author:'',timestamp:Date.now(),body:'',parentId:this.props.parentId};

        this.setState({comment})
    }

    onFieldChange = (target,value) => {
        const comment = {...this.state.comment,[target]:value};
        this.setState({comment});
        console.log(this.state);
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
        this.setState({comment:{author:'', body:'', id:'', timestamp:''}});
    }

    render(){

        const {author, timestamp, body} = this.state.comment;
        const submitEnabled = false;
        const submitButtonClass = classname({Comment__Submit:true,'Comment__Submit--disabled':(author ==='' || body === '')})


        return (
            <form className="CommentForm" onSubmit={this.saveForm}>
                <h2 className='Comment__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</h2>
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

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveComment:(comment) => dispatch(saveComment(comment)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);