import { Container, Row, Col, Card, CardBody, CardTitle} from "reactstrap";
import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import Logo from '../Images/logo.png';
import coffee from "../Images/coffee.png";
import machien from "../Images/machien.png";
import sweet from "../Images/sweet.png";
import { Link } from "react-router-dom";

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <Link to='/home'><img src={Logo} alt="logo" className="logo"/></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink className='navs' href="/home">
                                    <h2 className="nav">Home</h2>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='navs' href="/">
                                    <h2 className="nav1">Logout</h2>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>

            
            <Row>
                <Col className="col1" md="8">
                    
                    <div>
                        <h1 className="text">Menu</h1>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md="6">
                                <Card className="card" color="light" style={{ width: '15rem' }}>
                                <Link to='/coffee'><img src={machien} className="imgC" /></Link>
                                <CardBody>
                                    <CardTitle tag="h5" className="cardT">Coffee</CardTitle>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card" color="light" style={{ width: '15rem' }}>
                                <Link to="/sweet"><img src={sweet} className="imgS" /></Link>
                                <CardBody>
                                    <CardTitle tag="h5" className="cardT">Sweet</CardTitle>
                                </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>    
                <Col className="col2" md="3">
                    <img src={coffee} className="img"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Menu; 