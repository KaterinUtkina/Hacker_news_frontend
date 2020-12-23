import React from 'react';
import HomePageContainer from "./components/HomePage/HomePageContainer";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app_overlay">
                <div className="app_wrapper_content">
                    <Route exact path="/" render={() => <HomePageContainer/>}/>
                    <Route path="/news/:newsId?" render={() => <NewsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;