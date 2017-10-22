import React, {Component} from 'react';
import {connect} from 'react-redux';
import DrawerCategories from 'components/drawerCategories/drawerCategories';
import {closeDrawer} from 'actions/uiActions';

import './drawer.scss';


class Drawer extends Component {

    render() {
        const {visible} = this.props.drawer;
        const {closeDrawer} = this.props;


        const mainClassName = visible ? 'Drawer' : 'Drawer Drawer--Collapsed';

        return (
            <div className={mainClassName}>
                <div className='Drawer__Background'></div>
                <div className='Drawer__Container'>
                    <button className='Drawer__CloseButton' onClick={closeDrawer}></button>

                    <DrawerCategories />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ui}) {
    return {
        drawer:ui.drawer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeDrawer:() => dispatch(closeDrawer()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Drawer);