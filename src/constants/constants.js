const uuid = require('uuid/v4');

export const UI_FILTER = [
  { id: 'BY_NAME', label: 'By name', post_object_key: 'title' },
  { id: 'BY_DATE', label: 'By date', post_object_key: 'timestamp' },
  { id: 'BY_SCORE', label: 'By votes', post_object_key: 'voteScore' },
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

export const HUMAN_DATE_FORMAT = 'ddd, MMMM YYYY';
