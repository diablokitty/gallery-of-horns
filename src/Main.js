import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{

  render() {
    return <main>
    <HornedBeast 
      name="Goat" 
      picture="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/330px-Hausziege_04.jpg" 
      alttxt="Goat" 
      titletxt="Gooooat!" 
      text="This is a stolen goat."
      />

    <HornedBeast 
      name="Rhinocerous" 
      picture = "https://animals.sandiegozoo.org/sites/default/files/2021-03/animals_hero_white_rhino_0.png" 
      alttxt="Fat Gray Unicorn, AKA Rhinocerous" 
      titletxt="Scary Fat Gray Unicorn!" 
      text = "This is a stolen rhino."
      />
    </main>
 
 }
}

export default Main;