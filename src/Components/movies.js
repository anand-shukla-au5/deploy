import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ApiCall, detailView } from '../ActionCreator/call'
import { loadMovies } from '../ActionCreator/loadMovies'
class Movies extends React.Component {
    state = {
        count: 1
    }
    componentDidMount() {
        this.props.ApiCall()
    }
    loadMore = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("please call movies", this.state.count)
            this.props.loadMovies(this.state.count)
        })
    }
    detailView = (data) => {
        this.props.detailView(data)
    }
    render() {
        // console.log(this.props.movies)
        return (
            <div className="row  movies">
                {this.props.movies.movies.map((el, index) => {
                    return (
                        <Link key={index} to={('/movies/') + el.original_title.split(' ').join('').toLowerCase()} onClick={() => this.detailView(el)} >
                            <div className="card text-center" style={{ "width": "12rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="Poster" className="card-img-top" />
                                <p className="card-title">{el.title}</p>
                            </div>
                        </Link>
                    )
                })
                }
                <div style={{ "alignSelf": "center" }}>
                    <button className="" onClick={() => this.loadMore()}>Load More</button>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ApiCall, loadMovies, detailView }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies)