import React from "react";
import data from "./data.json";
import './Main.css';
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {

    let beastArr = [];
    data.forEach((beast, idx) => {
      beastArr.push(<HornedBeast 
        key={idx}
        name={beast.name}
        picture={beast.image_url}
        alttxt={beast.title}
        titletxt={beast.title}
        text={beast.description} />);

    });

    return (
      <main>
        {beastArr}
      
      </main>

    )
  }

}

export default Main;