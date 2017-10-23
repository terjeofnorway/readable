import React from 'react';
import { Link } from 'react-router-dom';

import './addPostButton.scss';

const AddPost = () => (
  <div className="Add__Post"><Link to="posts/new">Add new post</Link></div>
);

export default AddPost;
