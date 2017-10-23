import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import DrawerCategoryListItem from 'components/drawerCategoryListItem/drawerCategoryListItem';
import './drawerCategories.scss';

const DrawerCategories = props => {
  const { categories } = props;

  return (
    <div className="DrawerCategories">
      <h1 className="DrawerCategories__Title">Categories</h1>
      <ul className="DrawerCategoryList">
        {
          categories.map(item => (
            <DrawerCategoryListItem
              key={item.name}
              item={item}
            />))
        }
      </ul>
    </div>
  );
};

DrawerCategories.propTypes = {
  categories: PT.arrayOf(PT.shape({ name: PT.string.isRequired, path: PT.string.isRequired })).isRequired,
};

const mapStateToProps = ({ categories }) => ({
  categories,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerCategories);
