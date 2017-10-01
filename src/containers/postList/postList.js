import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from '../../components/postListItem/postListItem';
import Filter from '../../components/filter/filter';

import './postList.scss';


class PostList extends Component {

    render() {
        const {posts, categorySlug} = this.props;


        return (
            <div>
                <Filter sortTarget='post'/>
                <div className="PostList__Container">
                    {
                        posts.map((post) => (<PostListItem post={post} key={post.id}/>))
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps({posts, categories, ui}) {

    const orderByPostKey = ui.post_order.post_object_key;

    const postArray = Object.keys(posts).map((key) => posts[key]);
    const sortedPosts = postArray.sort((a,b) => a[orderByPostKey] < b[orderByPostKey]);

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