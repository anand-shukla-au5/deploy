import React from 'react'
import { connect } from 'react-redux'
class Detailmovie extends React.Component {
    render() {
        console.log(this.props.detail.moviesDetail)
        return (
            <div className="row">
                <br /><br />
                <div className="col-5">
                    <h6>{this.props.detail.moviesDetail.original_title}</h6>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.detail.moviesDetail.poster_path}`} alt="Poster" style={{ "height": "500px" }} />
                </div>
                <div className="col-6">
                    <ul>
                        <li><h1>Title : {this.props.detail.moviesDetail.title}</h1></li>
                        <li><h2>Average Vote :{this.props.detail.moviesDetail.vote_average}</h2></li>
                    </ul>
                    <p>{this.props.detail.moviesDetail.overview}</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}
export default connect(mapStateToProps)(Detailmovie)