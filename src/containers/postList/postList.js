import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Row, Column } from 'react-foundation';

import PostListItem from 'components/postListItem/postListItem';
import Sorter from 'components/sorter/sorter';

import './postList.scss';

const PostList = props => {
  const { posts, categorySlug } = props;

  // Prepare UI to be inserted into the return DOM.
  const listHeader = categorySlug ? <h1 className="PostList__Header">{`Category: ${categorySlug}`}</h1> : '';
  const noPostsFound = posts.length === 0 ? <Column className="PostList__NoPosts">Sorry, no posts were found!</Column> : '';

  return (
    <div className="PostList">
      <Sorter sortTarget="post" />
      {listHeader}
      <Row className="PostList__Container">
        {posts.map(post => (<PostListItem post={post} key={post.id} />))}
        {noPostsFound}
      </Row>
    </div>
  );
};

PostList.propTypes = {
  posts: PT.arrayOf(PT.object).isRequired,
  categorySlug: PT.string,
};

PostList.defaultProps = {
  categorySlug: '',
};

const mapStateToProps = ({ posts, categories, ui }, props) => {
  const orderByPostKey = ui.post_order.field_key;
  const filterCategory = props.categorySlug;

  // One might argue that filtering should be done in ONE call, but then
  // there's code readability vs theoretical performance issues. I chose the first in this case.
  const postArray = Object.keys(posts)
    .map(key => posts[key])
    .filter(item => !item.deleted)
    .filter(item => (filterCategory ? item.category === filterCategory : true))
    .sort((a, b) => a[orderByPostKey] < b[orderByPostKey]);

  return {
    posts: postArray,
    post_order: ui.post_order,
    categories,
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
