import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1
        }
    }

    handleSelect(selectedKey) {
        this.setState({activeKey: selectedKey});
      }

    render() {
            return (
                <div className="bg">
                    <Navbar className="navBar" collapseOnSelect expand="lg">
                        <Navbar.Brand href="/">
                            <img src={Logo} width="300px" alt="Message Obfuscator"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Nav variant="pills" defaultActiveKey="/" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                                <Nav.Item>
                                    <NavLink activeClassName="navItemActive" className="navItem" exact to="/">Submit a Message</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink activeClassName="navItemActive" className="navItem" to="/view/">View All Messages</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 C 50 100 80 100 100 0 Z" />
                    </svg>
                </div>
        )
    }
}

export default Header;