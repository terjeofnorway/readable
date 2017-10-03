import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Column} from 'react-foundation';

import DateTimeHelper from '../../helpers/datetime.js';
import ContentEditable from '../../components/contentEditable/contentEditable';
import Button from '../button/button';
import {saveComment} from "../../actions/commentActions";

import './commentListItem.scss';


class CommentListItem extends Component {

    componentDidMount(){
        this.setState({tempComment:{...this.props.comment}});
    }

    updateLocalComment(e,field){
        const tempComment = {...this.state.tempComment,[field]:e.target.value};
        this.setState({tempComment});
    }

    render() {
        const {author, timestamp, body} = this.props.comment;
        return (
            <div className="CommentListItem CommentForm">
                <Row>
                    <Column small={12} large={12}>
                        <h2 className='Comment__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</h2>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <ContentEditable
                            disabled={false}
                            className='Comments__Author'
                            html={author}
                            onChange={(e) => this.updateLocalComment(e, 'author')} />
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <ContentEditable
                            disabled={false}
                            className='Comments__Body'
                            html={body}
                            onChange={(e) => this.updateLocalComment(e, 'body')} />
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <Button onClick={() => this.props.saveComment(this.state.tempComment)}>Save</Button>
                    </Column>

                </Row>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        saveComment:(comment) => dispatch(saveComment(comment)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListItem);