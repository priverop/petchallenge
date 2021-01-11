import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import './PetPage.scss';
import CompletePet from '../../components/CompletePet/CompletePet';

import * as petService from '../../../services/pet.service';

class PetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      petId: 0,
      likes: 0,
    };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    if (this.props.match) {
      const {
        match: { params },
      } = this.props;

      this.setState({ petId: params.id });

      petService.get(params.id).on('value', snapshot => {
        const likes = Object.keys(snapshot.val().likes).length;
        this.setState({ pet: snapshot.val(), likes });
      });
    }
  }

  handleLike() {
    petService.addLike(this.state.petId);
  }

  render() {
    const pet = this.state ? this.state.pet : 'No pet found';
    const likes = this.state ? this.state.likes : 0;
    return (
      <>
        <Helmet>
          <title>Pet Details</title>
        </Helmet>
        <div id="PetPage" data-testid="pet-page">
          <Container>
            <CompletePet pet={pet} likes={likes} handleLike={this.handleLike} />
          </Container>
        </div>
      </>
    );
  }
}

export default PetPage;
