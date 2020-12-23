import React, {useEffect, useState} from 'react';
import Comments from "./Comments";

export const CommentsContainer = (props) => {
    const [commentState, setCommentState] = useState({
        comments: null,
    });


    useEffect(() => {
        let cleanupFunction = false;
        if(!cleanupFunction) {
            Promise.all(props.childrens.map(child => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${child}.json?print=pretty`)
                        .then(res => res.json())
                })
            )
                .then(result => setCommentState({comments: result}))
        }
        return () => cleanupFunction= true;

    }, [props.childrens]);
    if (!commentState.loading) {
        return(
            <div>
            <Comments comments={commentState.comments} />
            </div>
            );
    } else {
        return null
    }
}
export default CommentsContainer;