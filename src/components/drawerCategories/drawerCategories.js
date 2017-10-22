import React, {Component} from 'react';
import {connect} from 'react-redux';

import DrawerCategoryListItem from 'components/drawerCategoryListItem/drawerCategoryListItem';
import './drawerCategories.scss';


class DrawerCategories extends Component {

    render() {
        const {categories} = this.props;


        return (
            <div className="DrawerCategories">
                <h1 className='DrawerCategories__Title'>Categories</h1>
                <ul className='DrawerCategoryList'>
                    {
                        categories.map((item) => <DrawerCategoryListItem key={item.name} item={item}/>)
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({categories}) {
    return {
        categories,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerCategories);