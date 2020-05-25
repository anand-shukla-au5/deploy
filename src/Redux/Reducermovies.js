let initialState = {
    movies: [],
    tv: []
}
function ReducerMovie(state = initialState, action) {
    var stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'movies':
            stateCopy.movies = action.payload
            return stateCopy
        case 'tv':
            stateCopy.tv = action.payload
            return stateCopy
        case 'load-movies':
            action.payload.forEach(el => {
                stateCopy.movies.push(el)
            })
            console.log(stateCopy)
            return stateCopy
        case 'load-tv':
            action.payload.forEach(el => {
                stateCopy.tv.push(el)
            })
            console.log(stateCopy)
            return stateCopy
        default:
            return state
    }
}
export default ReducerMovie