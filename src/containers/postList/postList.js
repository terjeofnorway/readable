import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from '../../components/postListItem/postListItem';

import './postList.scss';


class PostList extends Component {

    constructor(props) {
        super(props);
    }

    testRender(){
        this.props.history.push('something');
        console.log(this.props.history);
    }

    render() {
        const {posts} = this.props;


        return (
            <div className="PostList__Container">
                {
                    posts.map((post) => (<PostListItem post={post} key={post.id}/>))
                }
            </div>
        );
    }
}

function mapStateToProps({posts, categories}) {
    return {
        posts:Object.keys(posts).map((key) => posts[key]),
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