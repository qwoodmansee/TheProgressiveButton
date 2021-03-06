import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';
import axios from 'axios';
import { createSecureContext } from 'tls';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js', {
      scope: '.'
    }).then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

class TheButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: ''
    }
  }

  getPokemon() {
    const pokeID = Math.floor(Math.random() * 150) + 1;
    console.log(pokeID)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`).then((response) => {
      this.setState({
        pokemon: response.data.name
      });
    });
  }

  render() {
    const currentPoke = this.state.pokemon != '' ? <h1 className="white-text">Current Pokemon: {this.state.pokemon}</h1> : <h1 className="white-text">You haven't pressed the button yet!</h1>;
    return (
      <div>
        <button className="button pokeball center" onClick={() => this.getPokemon()}><div className="pokeball-button"></div></button>
        {currentPoke}
      </div>
    );
  }
}

ReactDOM.render(
  <TheButton/>,
  document.getElementById('root')
);
