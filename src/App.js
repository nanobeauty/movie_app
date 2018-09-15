import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg"
  },
  {
    title: "Full Metal Jakcek",
    poster: "http://www.gstatic.com/tv/thumb/v22vodart/10114/p10114_v_v8_ab.jpg"
  },
  {
    title: "OldBoy",
    poster: "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://www.starwarsnewsnet.com/wp-content/uploads/2016/04/star-wars-the-force-awakens-the-saga-tribute-trailer-extended-722634.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        })
                  /* 위와 같은 내용임.
                  {[
                  <Movie title={movieTitle[0]} poster={movieImage[0]} />
                  <Movie title={movieTitle[1]} poster={movieImage[1]} />
                  <Movie title={movieTitle[2]} poster={movieImage[2]} />
                  <Movie title={movieTitle[3]} poster={movieImage[3]} />
                  ]} 
                  */
        }
      </div>
    );
  }
}

export default App;
