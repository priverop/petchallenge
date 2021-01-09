import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './PetPage.css';
import CompletePet from '../../components/CompletePet';

import * as petService from '../../../services/pet.service';

class PetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      petId: 0,
      likes: 0,
    };
    if (props.match) {
      this.setState({ petId: props.match.params.id });
    }
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    petService.get(this.state.petId).on('value', snapshot => {
      const likes = Object.keys(snapshot.val().likes).length;
      console.log(likes);
      this.setState({ pet: snapshot.val(), likes });
    });
  }

  handleLike() {
    petService.addLike(this.state.petId);
  }

  render() {
    const pet = this.state ? this.state.pet : 'No pet found';
    const likes = this.state ? this.state.likes : 0;
    return (
      <>
        <div id="PetPage" data-testid="pet-page">
          <Container>
            <Row>
              <CompletePet
                pet={pet}
                likes={likes}
                handleLike={this.handleLike}
              />
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default PetPage;