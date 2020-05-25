export function ApiCall() {
    return (dispatch) => {
        var data = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cff35c3662955c1702ecddc151708d4d`)
        data.then(res => {
            data = res.json()
            data.then(results => {
                dispatch({
                    type: 'movies',
                    payload: results.results
                })
            })
        })
    }
}
export function detailView(data) {
    return {
        type: 'movie-detail',
        payload: data
    }
}