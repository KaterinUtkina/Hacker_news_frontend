import React from 'react';
import {NavLink} from "react-router-dom";
import stl from "./News.module.css"
import CommentsContainer from "../Comments/CommentsContainer";


const News = (props) => {
    if (!props.news) {
        return <div className={stl.news_loading}>Загрузка</div>
    }
    let urlNewsCheck = () => {
        if (props.news.url) {
            return (
                <div className={stl.navigation_news}>
                    <a href={props.news.url}>Подробнее</a>
                    <span className={`${stl.arrow} ${stl.arrow_right}`}/>
                </div>
            );
        }
    }
    if (props.news.time) {
        let time = new Date(props.news.time * 1000);
        let timeHoursMinutes = ('0' + time.getHours()).slice(-2) + ":" + ('0' + time.getMinutes()).slice(-2);
        let timeDate = ("0" + time.getDate()).slice(-2) + "." + ("0" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear();
        let showComment = () => {
            if (!props.news.kids || props.news.kids.length === 0) {
                return <div className={stl.line_before_comment}>Нет комментариев</div>

            } else return (
                <div>
                    <div className={stl.line_before_comment}>Число
                        комментариев:{props.news.kids.length} </div>
                    <CommentsContainer childrens={props.news.kids}/>
                </div>
            );
        }
        return (
            <div className={stl.mews_page}>
                <header className={stl.header_news}>
                    <div className={stl.header_container}>
                        <h2>
                            {props.news.title}
                        </h2>
                        <div className="story_time">
                            <div className="story_time_hours">{timeHoursMinutes}</div>
                            <div>{timeDate}</div>
                        </div>
                    </div>
                    <div className={stl.navigation_news}><NavLink exact to="/"><span
                        className={`${stl.arrow} ${stl.arrow_left}`}/> Назад </NavLink></div>
                    {urlNewsCheck()}
                </header>
                <button onClick={props.updateData} className={stl.update_news_page}>
                    Обновить
                </button>
                <div className={stl.news_description}>
                    <div className={stl.author_news}>Автор статьи: {props.news.by}.</div>
                    {showComment()}
                </div>
            </div>
        );
    }
}

export default News;