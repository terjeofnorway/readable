import React from 'react';
import PT from 'prop-types';

import './vote.scss';

const Vote = props => {
  const { voteScore, id } = props;
  return (
    <div className="Vote">
      <button className="Vote__VoteButton--Up" onClick={() => props.addVote(1, id)} />
      <div className="Vote__CurrentScore">{voteScore}</div>
      <button className="Vote__VoteButton--Down" onClick={() => props.addVote(-1, id)} />
    </div>
  );
};

Vote.propTypes = {
  voteScore: PT.number,
  id: PT.string,
  addVote: PT.func,
};

Vote.defaultProps = {
  voteScore: 0,
  id: '',
  addVote: () => {},
};

export default Vote;
