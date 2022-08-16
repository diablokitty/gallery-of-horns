import React from "react";

class HornedBeast extends React.Component {

  render() {

    return <>
      <h2>{this.props.name}</h2>
      <img src={this.props.picture} alt={this.props.alttxt} title={this.props.titletxt}/>
      <p>{this.props.text}</p>
      </>
  }
}

export default HornedBeast; 