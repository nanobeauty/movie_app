import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "Matrix",
  "Full Metal Jakcek",
  "OldBoy",
  "Star Wars"
]

const movieImage = [
  "http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/10114/p10114_v_v8_ab.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg",
  "https://www.starwarsnewsnet.com/wp-content/uploads/2016/04/star-wars-the-force-awakens-the-saga-tribute-trailer-extended-722634.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} poster={movieImage[0]} />
        <Movie title={movieTitle[1]} poster={movieImage[1]} />
        <Movie title={movieTitle[2]} poster={movieImage[2]} />
        <Movie title={movieTitle[3]} poster={movieImage[3]} />
      </div>
    );
  }
}

export default App;
