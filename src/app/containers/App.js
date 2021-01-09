import React, { Component } from 'react';

import './App.css';

import database from '../../services/database';
import Pets from '../components/Pets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: {},
    };
  }

  componentDidMount() {
    database.ref('pets').on('value', snapshot => {
      const pets = [];
      snapshot.forEach(snap => {
        pets.push(snap.val());
      });
      this.setState({ pets });
    });
  }

  render() {
    const pets = this.state ? this.state.pets : 'No pets found';
    return (
      <>
        <div className="App" data-testid="main-app">
          <Pets pets={pets} />
        </div>
      </>
    );
  }
}

export default App;
