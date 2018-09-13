import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
      return (
        <div className="Movie">
            <MoviePoster />
            <h1>Hello This is Movie</h1>
        </div>
      );
    }
  }

  class MoviePoster extends Component {
    render() {
      return (
        <div className="MoviePoster">
          <img src="https://imgix.bustle.com/uploads/image/2017/8/9/5846855f-3fd5-4db9-84cb-5f65ed2bd107-hunger-games.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70" />
        </div>
      );
    }
  }
  
  export default Movie;