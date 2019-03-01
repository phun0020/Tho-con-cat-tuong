import React, { Component } from 'react';
import pokemonGif from 'pokemon-gif';

export default class Error404 extends Component {
  state = {
    gif: ''
  }


  componentDidMount() {
    const number = Math.floor(Math.random() * Math.floor(713));
    const gif = pokemonGif(number);
    this.setState({
      gif
    });
  }

  render() {
    const { gif } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <h1><img src={ gif} className="responsive-img" alt="pokemon" height="150px"/> Error404</h1>
            <button className="btn pink gradient-45deg-light-blue-cyan full-width">Back To Homepage</button>
          </div>
        </div>
      </div>
    )
  }
}
