import React from "react";

class Header extends React.Component {

  render() {

    return <>
      <h1>Gallery of Horns</h1>
      <h2>Visitors Today: {this.props.hearts}</h2>
    </>
  }
}

export default Header;

