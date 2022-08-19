import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css'
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
      showModal: false,
      currBeast: {} 
    }
  }
    handleHearts = () => {
      this.setState ({
        hearts: this.state.hearts + 1 
    })
  }

    handleShowModal = (currBeast) => {
      this.setState({
        showModal: true,
        currBeast: currBeast
        
      })
      return
    }
    
    handleHideModal = () => {
      this.setState({
        showModal: false
      })
    }

  render() {
    
    return <>
      <Header hearts={this.state.hearts} />
      <Main
        handleHearts={this.handleHearts}
        handleShowModal={this.handleShowModal}
        data={data}
        
      /> 

      <Footer onClick={this.handlehearts}/>
      <SelectedBeast 
          show={this.state.showModal}
          hide={this.handleHideModal}
          currBeast={this.state.currBeast}
          />
      
    </>
  }
}

export default App;
