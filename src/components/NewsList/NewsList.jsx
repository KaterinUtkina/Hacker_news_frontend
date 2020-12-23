import React from 'react';
import stl from "./NewsList.module.css";
import {NavLink} from "react-router-dom";

const NewsList = (props) => {
    if (props.data) {
        let time = new Date(props.data.time * 1000);
        let timeHoursMinutes = ('0' + time.getHours()).slice(-2) + ":" + ('0' + time.getMinutes()).slice(-2);
        let timeDate = ("0" + time.getDate()).slice(-2) + "." + ("0" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear();
        return (
            <li className={stl.stories_container_item}>
                <div className="story_time">
                    <div className="story_time_hours">{timeHoursMinutes}</div>
                    <div> {timeDate}</div>
                </div>
                <div className={stl.story_description}>
                    <div className={stl.story_author}>{props.data.by}</div>
                    <h2><NavLink to={"/news/" + props.data.id}>{props.data.title}</NavLink></h2>
                    <div className={stl.story_scope}>Рейтинг: {props.data.score}</div>
                </div>
            </li>
        )
    } else {
        return null
    }
}

export default NewsList;