
import {showConfirm} from "./uiActions";
import API from '../helpers/api';


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

        // eslint-disable-next-line
        const confirmPromise = new Promise((resolve, reject) => {
            resolveCallback = resolve;
            rejectCallback = reject;

        }).then((value) => {
            //Redispatch theis action, but with confirmed as true
            dispatch(deletePost(postId, true));
            API.requestDeletePost(postId).then((value) => console.log('god this from server:', value))
                .catch(error => console.log(error));

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

export function startEditPost(id){
    return {
        type: 'START_EDIT_POST',
        id,
    }
}


export function savePost(post){
    return {
        type:'SAVE_POST',
        post,
    }
}

export function addNewPost(post){
    return {
        type:'ADD_NEW_POST',
        post
    }
}