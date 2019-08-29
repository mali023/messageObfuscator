import React, { Component } from 'react';
import '../App.css';
import { Form, Button,Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

    class Submit extends Component {
      constructor(props) {
          super(props);

          this.state = {
            submitted: false,
            chars_left: 10000,
            redirect: false
          }
      }
//Check current characters
      handleChange(event) {
        let input = event.target.value;
        this.setState({
            chars_left: 10000 - input.length
        });
    }

//Handle Add New Message
    handleAddNewMessage = async (event) => {
      event.preventDefault()
      const formdata = new FormData(event.target)
      const json = {}
      formdata.forEach(function(value, prop){json[prop] = value})
      const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')
      // eslint-disable-next-line
      const response = await fetch("/add", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: formBody,})
        .then(ReactDOM.findDOMNode(this.messageForm).reset())
        .then(() => this.setState({ redirect: true }))
        .catch(error => {console.log(error)})
    }
    
            render() {
              const { redirect } = this.state;
              if (redirect) {
                return <Redirect to='/view'/>;
              }
              return (
                      <div className="bg">
                        <Container>
                          <Row>
                            <Col>
                              <h1 className="display-3 text-center">Submit Your Message</h1>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form id='myForm'
                                    className="form"
                                    ref={ form => this.messageForm = form }
                                    onSubmit={ this.handleAddNewMessage.bind( this ) }>
                                <Form.Row>
                                  <Form.Group as={Col}>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" name="name" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="tel" name="number" />
                                  </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                  <Form.Group as={Col}>
                                    <Form.Label>Your Email Address</Form.Label>
                                    <Form.Control type="email" name="email" />
                                  </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridAddress1">
                                  <Form.Label>Message</Form.Label>
                                  <Form.Control onChange={this.handleChange.bind(this)} as="textarea" name="message" maxLength="10000" rows="8" />
                                  <Form.Text className="text-muted"><p>Characters Left: {this.state.chars_left}</p></Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                              </Form>
                            </Col>
                          </Row>
                        </Container>
                        <Footer/>
                      </div>
              );
            }
}

export default Submit;
