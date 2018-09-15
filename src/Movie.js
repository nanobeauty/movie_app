import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired
    }

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

    static propTypes = {
      posterVAL: PropTypes.string.isRequired
    }

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