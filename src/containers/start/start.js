import React, {Component} from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/postList/postList';

class Start extends Component {

    render() {
        return (
            <div>
                <PostList></PostList>
            </div>
        )
    }

}

function mapStateToProps ({}) {
    return {

    }
}

function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Start);