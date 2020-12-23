const NEWS_FETCH_DATA_SUCCESS = "NEWS-FETCH-DATA-SUCCESS";
const CLEAR_NEWS_DATA = "CLEAR-NEWS-DATA";

let initialState = {
    news: null,
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEWS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                news: action.data,
            }
        case CLEAR_NEWS_DATA:
            return {
                ...state,
                news: null,
            }
        default:
            return state;
    }
}

export const newsFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(res => res.json())
            .then(res => dispatch(newsFetchDataSuccess(res)))
    }
}

export const newsFetchDataSuccess = (res) => {
    return {
        type: NEWS_FETCH_DATA_SUCCESS,
        data: res
    }
}
export const clearNewsData = () => {
    return {
        type: CLEAR_NEWS_DATA,
    }
}

export default newsReducer;