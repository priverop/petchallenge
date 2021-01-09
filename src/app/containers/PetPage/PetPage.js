import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './PetPage.css';
import CompletePet from '../../components/CompletePet';

import database from '../../../services/database';

class PetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      petId: 0,
    };
    if (props.match) {
      this.setState({ petId: props.match.params.id });
    }
  }

  componentDidMount() {
    database.ref(`pets/${this.state.petId}`).on('value', snapshot => {
      this.setState({ pet: snapshot.val() });
    });
  }

  render() {
    const pet = this.state ? this.state.pet : 'No pet found';
    return (
      <>
        <div data-testid="pet-page">
          <Container>
            <CompletePet pet={pet} />
          </Container>
        </div>
      </>
    );
  }
}

export default PetPage;
