import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TvShows, detailView } from '../ActionCreator/tvcall'
import { loadTv } from '../ActionCreator/loadTv'
import { Link } from 'react-router-dom'
class Tvshows extends React.Component {
    state = {
        count: 1
    }
    componentDidMount() {
        this.props.TvShows()
    }
    loadMore = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("please call movies", this.state.count)
            this.props.loadTv(this.state.count)
        })
    }
    detailView = (data) => {
        this.props.detailView(data)
    }
    render() {
        console.log(this.props.tv)
        return (
            <div className="row  movies">
                {this.props.tv.map((el, index) => {
                    return (
                        <Link key={index} onClick={() => this.detailView(el)} to={"/tvshows/" + el.original_name.split(' ').join('').toLowerCase()} >
                            <div className="card text-center" style={{ "width": "12rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="Poster" className="card-img-top" />
                                <p className="card-title">{el.original_name}</p>
                            </div>
                        </Link>
                    )
                })}
                <div style={{ "alignSelf": "center" }}>
                    <button className="" onClick={() => this.loadMore()}>Load More</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tv: state.movies.tv
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ TvShows, loadTv, detailView }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Tvshows)