import React, {Component} from 'react';
import { connect } from 'react-redux';


class Start extends Component {

    render() {
        return (
            <div>Start</div>
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