import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: ComponentWillMount() -> render() -> componenentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    movies: [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "trainspotting",
            poster: "http://www.gstatic.com/tv/thumb/v22vodart/35948/p35948_v_v8_ab.jpg"
          }
        ]
      })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
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
