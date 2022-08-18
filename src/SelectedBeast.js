import React from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import './SelectedBeast.css';
//import App from "./App.js"

class SelectedBeast extends React.Component {


  render() {

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.hide}>
        <Modal.Header closeButton><h2>Close Up View</h2></Modal.Header>
        <Modal.Title>{this.props.currBeast.name}</Modal.Title>
        <Image src={this.props.currBeast.picture} alttxt={this.props.currBeast.alttxt} title={this.props.currBeast.titletxt}></Image>
        <Modal.Body><p>{this.props.currBeast.text}</p></Modal.Body>
      </Modal >
    )};
}

export default SelectedBeast;