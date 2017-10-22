import API from 'helpers/api';
const uuid = require('uuid/v4');

/** Adds a new vote to the total post score. Votes can be 1 or -1
 *
 * @param voteScore Number The Score to add (can be 1 or -1)
 * @param postId String The unique ID of the post.
 * @returns {{type: string, voteScore: *, postId: *}}
 */


/** Load Posts **/
export function loadComments(postId) {
    return (dispatch) => API.loadCommentsFromServer(postId).then(data => dispatch(injectComments((data))));
}

export function injectComments(comments) {
    return {
        type: 'INFLATE_COMMENTS',
        comments,
    }
}

export function startEditComment(commentId){
    return {
        type:'START_EDIT_COMMENT',
        commentId,
    }
}

export function stopEditComment(commentId){
    return {
        type:'START_EDIT_COMMENT',
        commentId,
    }
}

export function saveComment(comment) {
    const cleanComment = comment.id ? {...comment}
    :
        {...comment, id:uuid(), isEditing:false, voteScore:0}

    return {
        type: 'SAVE_COMMENT',
        comment:cleanComment,
    }
}


export function deleteComment(commentId) {
    return {
        type: 'DELETE_COMMENT',
        commentId,
    }
}


export function addCommentVoteScore(voteScore, commentId){
    return {
        type: 'ADD_VOTE_SCORE_TO_COMMENT',
        voteScore,
        commentId,
    }
}
