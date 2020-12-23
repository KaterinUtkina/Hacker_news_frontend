import React from "react";
import {connect} from "react-redux";
import {clearNewsData, newsFetchData} from "../../redux/newsReducer";
import {withRouter} from "react-router-dom";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
        let newsId = this.props.match.params.newsId;
        const idUrl = "https://hacker-news.firebaseio.com/v0/item/" + newsId + ".json?print=pretty"
        this.props.newsFetchData(idUrl)
        this.interval = setInterval(() => {
            this.props.clearNewsData()
            this.props.newsFetchData(idUrl)
        }, 60000)
    }
    updateData = () => {
        this.props.clearNewsData()
        this.props.newsFetchData("https://hacker-news.firebaseio.com/v0/item/" + this.props.match.params.newsId + ".json?print=pretty")
    }
    componentWillUnmount() {
        this.props.clearNewsData()
        clearInterval(this.interval);
    }

    render() {
        return (
           <News news={this.props.newsPage.news} updateData={this.updateData}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsPage: state.newsPage,
    }
}
let withUrlDataContainerComponent = withRouter(NewsContainer)

export default connect(mapStateToProps, {
    newsFetchData, clearNewsData,
})(withUrlDataContainerComponent);