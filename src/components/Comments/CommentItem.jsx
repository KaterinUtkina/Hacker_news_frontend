import React, {useState} from 'react';
import CommentsContainer from "./CommentsContainer";
import stl from "./Comments.module.css"

const CommentItem = (props) => {
    const [clickState, setClickState] = useState({
        click: false,
    });
    if (!props.comment.deleted) {
        let textHTMLConvert = props.comment.text;
        let show = () => {
            if (clickState.click) {
                return <CommentsContainer childrens={props.comment.kids}/>
            } else return null
        }
        let textButton = () => {
            if (!clickState.click) return <p className={stl.button_text}> Комментарии:{props.comment.kids.length}</p>
        }
        let buttonShowingChildComments = () => {
            if (props.comment.kids) {
                return <button onClick={() => setClickState({click: true})} className={stl.button_comment}>
                    {textButton()}
                </button>
            } else {
                return null
            }
        };
        return (
            <li>
                <div className={stl.comment_author}>{props.comment.by}:</div>
                <div dangerouslySetInnerHTML={{__html: textHTMLConvert}} className={stl.comment_text}>
                </div>
                {buttonShowingChildComments()}
                {show()}
            </li>
        );
    } else {
        return null
    }
}

export default CommentItem;
