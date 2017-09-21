
import {showConfirm} from "./uiActions";


/** Adds a new vote to the total post score. Votes can be 1 or -1
 *
 * @param voteScore Number The Score to add (can be 1 or -1)
 * @param postId String The unique ID of the post.
 * @returns {{type: string, voteScore: *, postId: *}}
 */
export function addVoteScore(voteScore, postId){
    return {
        type: 'ADD_VOTE_SCORE_TO_POST',
        voteScore,
        postId,
    }
}


export function deletePost(postId, confirmed){

    return (dispatch) => {
        let resolveCallback = null, rejectCallback = null;

        const confirmPromise = new Promise((resolve, reject) => {
            resolveCallback = resolve;
            rejectCallback = reject;

        }).then((value) => {
            dispatch(deletePost(postId, true));
            //TODO: Redirect after deletion

        }).catch(() => {

        });

        return confirmed ?
            dispatch({
                type:'DELETE_POST',
                postId,
            })
            :
            dispatch(showConfirm(
                'Are you sure?',
                'Will delete the post altogether!',
                resolveCallback,
                rejectCallback,
            ))
    }

}

