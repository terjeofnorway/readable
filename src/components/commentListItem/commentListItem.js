import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Column} from 'react-foundation';

import DateTimeHelper from '../../helpers/datetime.js';
import ContentEditable from '../../components/contentEditable/contentEditable';
import Button from '../button/button';
import {saveComment, deleteComment} from "../../actions/commentActions";
import {toggleCommentActions, toggleEditComment} from '../../actions/uiActions';
import EditDelete from '../../components/editDelete/editDelete';
import './commentListItem.scss';


class CommentListItem extends Component {

    componentDidMount(){
        this.setState({tempComment:{...this.props.comment}});
    }

    updateLocalComment(e,field){
        const tempComment = {...this.state.tempComment,[field]:e.target.value};
        this.setState({tempComment});
    }

    mouseEnterEventHandler = () => {
        this.props.toggleCommentActions(this.props.comment.id);
    }

    render() {
        const {id, author, timestamp, body, isEditing} = this.props.comment;
        const baseClassName = `CommentListItem ${isEditing ? 'CommmentForm':''}`;
        const commentActionClass = this.props.activeCommentAction === id ? 'Comment__Action Comment__Action--show' : 'Comment__Action';

        const editButton = isEditing ?
            <Row>
                <Column small={12} large={12}>
                    <Button onClick={() => this.props.saveComment(this.state.tempComment)}>Save</Button>
                </Column>
            </Row>
            :
            '';

        return (
            <div className='CommentListItem' onMouseEnter={(e) => this.mouseEnterEventHandler(e)} onMouseLeave={(e) => this.mouseEnterEventHandler(e)}>
                <div className={commentActionClass}>
                    <div className='Action__Overlay'></div>
                    <div className='Action__Editdelete'>
                        <EditDelete id={id} toggleEdit={id => this.props.toggleEditComment(id)} delete={(id) => this.props.delete(id)}/>
                    </div>
                </div>

                <Row>
                    <Column small={12} large={12}>
                        <h2 className='Comment__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</h2>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <ContentEditable
                            disabled={!isEditing}
                            className='Comments__Author'
                            html={author}
                            onChange={(e) => this.updateLocalComment(e, 'author')} />
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <ContentEditable
                            disabled={!isEditing}
                            className='Comments__Body'
                            html={body}
                            onChange={(e) => this.updateLocalComment(e, 'body')} />
                    </Column>
                </Row>
                {editButton}

            </div>
        );
    }
}

function mapStateToProps({ui}) {
    return {
        activeCommentAction:ui.commentEditor.activeCommentAction,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveComment:(comment) => dispatch(saveComment(comment)),
        toggleCommentActions:(id) => dispatch(toggleCommentActions(id)),
        toggleEditComment:(id) => dispatch(toggleEditComment(id)),
        delete:(id) => dispatch(deleteComment(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListItem);