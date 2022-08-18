import React from "react";
import './Main.css';
import HornedBeast from "./HornedBeast";
class Main extends React.Component {

  render() {

    let beastArr = this.props.data.map((beast, idx) => {
      return <HornedBeast 
        key={idx}
        name={beast.keyword}
        picture={beast.image_url}
        alttxt={beast.keyword}
        titletxt={beast.title}
        text={beast.description} 
        handleHearts={this.props.handleHearts}
        handleShowModal={this.props.handleShowModal}
        
        />}

    );

    return (
      <main>
        {beastArr}
        
      
      </main>

    )
  }

}

export default Main;