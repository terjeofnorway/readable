import React, {Component} from 'react'
import {connect} from 'react-redux';
import {saveComment} from '../../actions/commentActions';

import './commentForm.scss';


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
        comment.isEditing = false;
        this.props.saveComment(comment);
    }

    render(){

        const {id, author, timestamp, body} = this.state.comment;



        return (
            <form className="CommentForm" onSubmit={this.saveForm}>
                <input className='Comment__Date' name="timestamp" type="text" value={timestamp} onChange={(event) => this.onFieldChange('timestamp',event.target.value)} />
                <input className='Comment__Author' name="author" type="text" value={author} onChange={(event) => this.onFieldChange('author',event.target.value)}  />
                <textarea className='Comment__Body' name='body' value={body} onChange={(event) => this.onFieldChange('body',event.target.value)}  />
                <input type="submit" value="Save" className="Comment__Submit"/>
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