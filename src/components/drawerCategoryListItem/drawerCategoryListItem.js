import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {closeDrawer} from "../../actions/uiActions";


import './drawerCategoryListItem.scss';


const DrawerCategoryListItem = function (props) {
    const {path, name} = props.item;
    const {closeDrawer} = props;

    return (
        <li className='CategoryListItem'>
            <Link to={`/categories/${path}`} onClick={closeDrawer}>
                <div className='Category__Name'>{name}</div>
            </Link>
        </li>
    );
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        closeDrawer:() => dispatch(closeDrawer())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DrawerCategoryListItem);