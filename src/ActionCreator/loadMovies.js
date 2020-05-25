export function loadMovies(count) {
    return (dispatch) => {
        var data = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cff35c3662955c1702ecddc151708d4d&page=${count}`)
        data.then(res => {
            data = res.json()
            data.then(results => {
                dispatch({
                    type: 'load-movies',
                    payload: results.results
                })
            })
        })
    }
}