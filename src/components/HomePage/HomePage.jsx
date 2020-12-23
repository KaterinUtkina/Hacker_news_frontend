import React from 'react';
import NewsList from "../NewsList/NewsList";
import stl from "./HomePage.module.css"

const HomePage = (props) => {
    debugger;

    if (props.homePage.isLoading) {
        return <div className={stl.list_stories_loading}>Загрузка</div>
    } else {
        return (
            <div className={stl.list_stories_container}>
                <header>
                    <h1 className={stl.header_container}>
                        BREAK NEWS
                    </h1>
                    <button className={stl.update_home_page} onClick={props.updateData}>
                        Обновить
                    </button>
                </header>
                <ul>
                    {props.homePage.ids.map((id, index) => {
                        return <NewsList key={index} data={id}/>
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default HomePage;