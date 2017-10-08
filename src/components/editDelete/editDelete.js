import React from 'react';
import {connect} from 'react-redux';

import './editDelete.scss';


const EditDelete = function (props) {

    return (
        <div className='EditDelete'>
            <button className='EditDelete__Edit' onClick={() => props.toggleEdit(props.id)} />
            <button className='EditDelete__Delete' onClick={() => props.delete(props.id)} />
        </div>
    );
}


function mapStateToProps({}) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditDelete);