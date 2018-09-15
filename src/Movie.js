import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
      return (
        <div className="Movie">
            <MoviePoster posterVAL={this.props.poster}/>
            <h1>{this.props.title}</h1>
        </div>
      );
    }
  }

  class MoviePoster extends Component {
    render() {
      console.log(this.props);  //posterVAL로 이름 변경해서 구조를 더 명확히 하고 props로 posterVAL 확인
      return (
        <div className="MoviePoster">
          <img src={this.props.posterVAL} alt= "" />
        </div>
      );
    }
  }
  
  export default Movie;