import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavigationBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MyInventory</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/units">Units</Nav.Link>
                </Nav>
            </Container> 
        </Navbar>
    );
}

export default NavigationBar;