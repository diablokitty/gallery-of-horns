import React from "react";
import { FaHeart} from 'react-icons/fa';
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

  
   

  render() {

        return <>
          <section className="beast-info">
            <h2>{this.props.name}</h2>
            <img src={this.props.picture} alt={this.props.alttxt} title={this.props.titletxt} />
            <p>{this.props.text}</p>
            <p>{this.state.votes} <FaHeart/> </p>
            <p onClick={this.handleVotes}>Vote for Me!</p>
          </section>
        </>
      }
    }

export default HornedBeast; 