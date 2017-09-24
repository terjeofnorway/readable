import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



import './drawerCategoryListItem.scss';


const DrawerCategoryListItem = function (props) {
    const {path, name} = props.item;

    return (
        <li className='CategoryListItem'>
            <Link to={`/categories/${path}`}>
                <div className='Category__Name'>{name}</div>
            </Link>
        </li>
    );
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DrawerCategoryListItem);