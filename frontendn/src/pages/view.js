import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './../components/footer'
import CardTemplate from '../components/card';

class View extends Component {
  constructor(props) {
      super(props);

      this.state = {
        messages: [],
    }
  }

//Get all messages from backend
  getMessages() {
    fetch("/messages")
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            this.setState({
                messages: result
            });
        },
        (error) => {
            console.log(error + "error here");
            this.setState({
                error
            });
        }
    )
  }

  //Initial fetch from API
  componentDidMount() {
    this.getMessages()
  }

  render() {
  return (
          <div className="bg">
            <Container>
              <Row>
                <Col>
                  <h1 className="display-3 text-center">View Messages</h1>
                </Col>
              </Row>
              <Row noGutters>
                  {
                    this.state.messages.map((messages, index) => {
                      let totalMessages = this.state.messages.length
                      let currentIndex = totalMessages - index - 1
                      return <Col>
                        <CardTemplate
                          no = {currentIndex + 1}
                          date = {this.state.messages[currentIndex].Date}
                          name = {this.state.messages[currentIndex].Name}
                          number = {this.state.messages[currentIndex].Number}
                          email = {this.state.messages[currentIndex].Email}
                          address = {this.state.messages[currentIndex].Address}
                          message = {this.state.messages[currentIndex].Message}
                        />
                      </Col>
                    })
                  }
              </Row>
            </Container>
            <Footer/>
          </div>
    );
  }
}
export default View;
