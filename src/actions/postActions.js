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