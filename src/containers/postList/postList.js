import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from 'components/postListItem/postListItem';
import Filter from 'components/filter/filter';

import './postList.scss';


class PostList extends Component {

    render() {
        const {posts, categorySlug} = this.props;

        const filterHeader = categorySlug ? <h1 className="PostList__Header">{`Category: ${categorySlug}`}</h1> : '';
        const noPostsFound = posts.length === 0 ? <div className="PostList__NoPosts">Sorry, no posts were found!</div> : '';

        return (
            <div className='PostList'>
                <Filter sortTarget='post'/>
                {filterHeader}
                <div className="PostList__Container">
                    {
                        posts.map((post) => (<PostListItem post={post} key={post.id}/>))
                    }
                    {noPostsFound}
                </div>
            </div>
        );
    }
}


function mapStateToProps({posts, categories, ui}, props) {

    const orderByPostKey = ui.post_order.post_object_key;
    const filterCategory = props.categorySlug;

    const postArray = Object.keys(posts).map((key) => posts[key]);
    const postFiltered = filterCategory ? postArray.filter(item => item.category === filterCategory) : postArray;
    const sortedPosts = postFiltered.sort((a,b) => a[orderByPostKey] < b[orderByPostKey]);

    return {
        posts: sortedPosts,
        post_order:ui.post_order,
        categories
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);