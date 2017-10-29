import React from 'react';
import PT from 'prop-types';

import './editDelete.scss';

const EditDelete = props => (
  <div className="EditDelete">
    <button className="EditDelete__Edit" onClick={() => props.toggleEdit(props.id)} />
    <button className="EditDelete__Delete" onClick={() => props.delete(props.id)} />
  </div>
);

EditDelete.propTypes = {
  id: PT.string.isRequired,
  toggleEdit: PT.func.isRequired,
  delete: PT.func.isRequired,
};

export default EditDelete;
