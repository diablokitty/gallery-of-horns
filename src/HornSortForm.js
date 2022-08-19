import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 class HornSortForm extends React.Component {
//   constructor(props) {
//     super(props);
//   };

  render() {

    return (
      <Form onSubmit={this.props.submit}>
      <Form.Group controlId="sortby">
          <Form.Label>How Many Horns on Beasts?</Form.Label>
          <Form.Select name="hornNum"  onChange={this.props.select}>
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    );

  }
}
export default HornSortForm;
