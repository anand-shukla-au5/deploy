import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
class Detailtv extends React.Component {
    render() {
        console.log(this.props.detail.tvDetail)
        return (
            <div className="row">
                <br /><br />
                <div className="col-5">
                    <h6>{this.props.detail.tvDetail.original_name}</h6>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.detail.tvDetail.poster_path}`} alt="Poster" style={{ "height": "500px" }} />
                </div>
                <div className="col-6">
                    <ul>
                        <li><h1>Title : {this.props.detail.tvDetail.original_name}</h1></li>
                        <li><h2>Average Vote :{this.props.detail.tvDetail.vote_average}</h2></li>
                    </ul>
                    <p>{this.props.detail.tvDetail.overview}</p>
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
export default connect(mapStateToProps)(Detailtv)