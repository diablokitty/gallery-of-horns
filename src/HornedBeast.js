import React from "react";
import { FaHeart } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }
  // //this is a method for the state object
  handleVotes = () => {

    this.setState({
      votes: this.state.votes + 1
    });
  };

  deleteVotes = () => {

    this.setState({
      votes: this.state.votes - 1
    });
  };

  handleBeastClick = () => {
    this.props.handleShowModal(this.props);
  }


  render() {

    return (<>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.picture} alt={this.props.alttxt} title={this.props.titletxt} onClick={this.props.handleHearts} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.text}
          </Card.Text>
        </Card.Body>
   
        <Card.Body>
          <p>{this.state.votes} <FaHeart /> </p>
          <p onClick={this.handleVotes}>Vote for Me!</p>
          <p onClick={this.deleteVotes}>Ooops, Take Away That Vote!</p>
          <p onClick={this.handleBeastClick}>Big View</p>
        </Card.Body>
      </Card>
    
    </>)

  }





}

export default HornedBeast; 