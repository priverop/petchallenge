import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Home.css';

import * as petService from '../../../services/pet.service';
import Pets from '../../components/Pets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: {},
    };
  }

  componentDidMount() {
    petService.getAll().on('value', snapshot => {
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
        <div data-testid="home-page">
          <Container>
            <Pets pets={pets} />
          </Container>
        </div>
      </>
    );
  }
}

export default App;
