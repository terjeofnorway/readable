const uuid = require('uuid/v4');

export const LIST_ORDER_OPTIONS = [
  { id: 'BY_NAME', label: 'By name', field_key: 'title' },
  { id: 'BY_DATE', label: 'By date', field_key: 'timestamp' },
  { id: 'BY_SCORE', label: 'By votes', field_key: 'voteScore' },
];

export const createPostTemplate = () => ({
  id: uuid(),
  author: '',
  timestamp: Date.now(),
  body: '',
  deleted: false,
  title: '',
  voteScore: 0,
  isEditing: false,
});

export const createCommentTemplate = () => ({
  id: uuid(),
  timestamp: Date.now(),
  title: '',
  author: '',
  body: '',
  voteScore: 0,
  isEditing: false,
});

export const HUMAN_DATE_FORMAT = 'ddd, MMMM YYYY';
