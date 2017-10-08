import API from '../helpers/api';


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

export function saveComment(comment) {
    return {
        type: 'SAVE_COMMENT',
        comment,
    }
}


export function deleteComment(commentId) {
    return {
        type: 'DELETE_COMMENT',
        commentId,
    }
}