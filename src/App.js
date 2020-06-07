import React from 'react';
import Nav from './Components/nav'
import Tvshows from './Components/tvshows'
import Movies from './Components/movies'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Detailmovie from './Components/detailMovie'
import Detailtv from './Components/detailTv'
import './App.css';
function App(props) {
  if (props.detail.moviesDetail.original_title !== null) {
    console.log(props.detail.moviesDetail.original_title)
    var path = String(props.detail.moviesDetail.original_title)
    console.log(path.split(' ').join(''))
  }
  if (props.detail.tvDetail.original_name !== null) {
    console.log(props.detail.tvDetail.original_name)
    var tv = String(props.detail.tvDetail.original_name)
    console.log(path.split(' ').join(''))
  }
  console.log("For tv", props.detail.tvDetail.original_name)
  return (
    <BrowserRouter>
      <div className="App">
        <nav><Nav /></nav>
      </div>
      <main>
        <Route path='/' strict exact >
          <Redirect to='/movies'></Redirect>
        </Route>
        <Route path="/tvshows" exact strict>
          <h1>TV Shows</h1>
          <Tvshows />
        </Route>
        <Route path="/movies" exact strict>
          <h1>Movies</h1>
          <Movies />
        </Route>
        <Route path={"/movies/" + path.split(' ').join('').toLowerCase()} exact strict>
          <Detailmovie />
        </Route>
        <Route path={'/tvshows/' + tv.split(' ').join('').toLowerCase()} >
          <Detailtv />
        </Route>
      </main>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    detail: state.detail
  }
}
export default connect(mapStateToProps)(App);