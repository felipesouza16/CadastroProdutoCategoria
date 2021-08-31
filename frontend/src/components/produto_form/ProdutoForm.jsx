import { Component } from "react";
import {Container, Form} from "react-bootstrap"


class ProdutoForm extends Component{
    render(){
        return (
          <Container fluid ="md">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="label" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="label" placeholder="Enter Description" />
              </Form.Group>
            </Form>
          </Container>
        );
    }
}
export default ProdutoForm;