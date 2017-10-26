import React from 'react';
import PT from 'prop-types';

import CommentListItem from 'components/commentListItem/commentListItem';
import Filter from 'components/filter/filter';

import './commentList.scss';

const CommentList = props => (
  <div>
    <Filter sortTarget="comment" />
    <div className="CommentList">
      {Object.keys(props.comments).map(key => (<CommentListItem
        comment={props.comments[key]}
        key={key}
      />))}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PT.arrayOf(PT.object),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
