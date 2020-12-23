import React from 'react';
import CommentItem from "./CommentItem";


const Comments = (props) => {
    if (!props.comments || props.comments.length === 0) return null
    return (
        <ul>
            {props.comments.map((comment, index) => {
                return <CommentItem key={index} comment={comment}/>
            })}
        </ul>
    );
}


export default Comments;