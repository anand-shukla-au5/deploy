export function TvShows() {
    return (dispatch) => {
        var data = fetch('https://api.themoviedb.org/3/tv/popular?api_key=cff35c3662955c1702ecddc151708d4d')
        data.then(res => {
            data = res.json()
            data.then(results => {
                dispatch({
                    type: 'tv',
                    payload: results.results
                })
            })
        })
    }
}
export function detailView(data) {
    return {
        type: 'tv-detail',
        payload: data
    }
}