const IDS_FETCH_DATA_SUCCESS = "IDS-FETCH-DATA-SUCCESS";
const IDS_CLEAR_DATA = "IDS_CLEAR_DATA";
const NEWS_FETCH_DATA_SUCCESS = "NEWS-FETCH-DATA-SUCCESS";

let initialState = {
    ids: [],
    isLoading: true,
}

const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case IDS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                ids: action.data,
                isLoading: false,
            };
        case IDS_CLEAR_DATA:
            return {
                ...state,
                ids: [],
                isLoading: true,
            }
        default:
            return state;
    }
}

export const fetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(res => res.json())
            .then(ids => Promise.all(ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                .then(res => res.json()))))
            .then(results => dispatch(idsFetchDataSuccess(results)))
    }
}

export const idsFetchDataSuccess = (res) => {
    return {
        type: IDS_FETCH_DATA_SUCCESS,
        data: res
    }
}
export const clearData = () => {
    return {
        type: IDS_CLEAR_DATA,
    }
}

export default homeReducer;