import React from 'react';
import PT from 'prop-types';
import { Column, Row } from 'react-foundation';
import CommentListItem from 'components/commentListItem/commentListItem';
import Filter from 'components/filter/filter';

import './commentList.scss';

const CommentList = props => (
  <div className="CommentList">
    <Row>
      <Column small={12} medium={8} offsetOnMedium={2}>
        {Object.keys(props.comments).length > 0 ? <Filter sortTarget="comment" /> : ''}
      </Column>
    </Row>
    <Row>
      <Column small={12} medium={8} offsetOnMedium={2}>
        {Object.keys(props.comments).map(key => (<CommentListItem
          comment={props.comments[key]}
          key={key}
        />))}
        {Object.keys(props.comments).length === 0 ? <div className="CommentList__Emptytext">No comments yet! Be the first!</div> : ''}
      </Column>
    </Row>
  </div>
);

CommentList.propTypes = {
  comments: PT.arrayOf(PT.object),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
