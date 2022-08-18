import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
//import { FaHeart} from 'react-icons/fa';
import './App.css'
import data from "./data.json";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
      showModal: true,
      name: '',
      picture: '',
      alttxt: '',
      titletxt:'',
      text: '',
      
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
      console.log(currBeast);
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
      <Modal 
        show={this.state.showModal}
        onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.currbeast}</Modal.Title>
            {/* <Image src={this.state.currBeast.picture} alttxt={this.state.currbeast.alttxt} title={this.state.currBeast.titletxt}></Image>
            <p>{this.state.currBeast.text}</p> */}
          </Modal.Header>

        </Modal>
        
    </>
  }
}

export default App;
