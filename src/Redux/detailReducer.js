let initialState = {
    moviesDetail: '',
    tvDetail: ''
}
export function detailReducer(state = initialState, action) {
    var stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'movie-detail':
            console.log(action)
            stateCopy.moviesDetail = action.payload
            return stateCopy
        case 'tv-detail':
            console.log(action)
            stateCopy.tvDetail = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}