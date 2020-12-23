import {connect} from "react-redux";
import HomePage from "./HomePage";
import {clearData, fetchData} from "../../redux/homeReducer";
import React from "react";

class HomePageContainer extends React.Component {
    componentDidMount() {
        const apiUrl = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
        this.props.fetchData(apiUrl)
        this.interval = setInterval(() => {
            this.props.clearData()
            this.props.fetchData(apiUrl)
        }, 60000)

    }
    updateData = () => {
        this.props.clearData()
        this.props.fetchData(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <HomePage {...this.props} updateData={this.updateData} />
        )
    }
}

const mapStateToProps = state => {
    return {
        homePage: state.homePage
    }
}


export default connect(mapStateToProps,
    {fetchData, clearData })(HomePageContainer);