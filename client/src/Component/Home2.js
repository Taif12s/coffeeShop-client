import { Container, Row, Col, Button} from "reactstrap";
import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import Logo from '../Images/logo.png';
import coffee from "../Images/image.png";
import social from "../Images/social.png";
import { Link } from "react-router-dom";



function Home2 (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Container fluid className="farm-background2">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <img src={Logo} alt="logo" className="logo"/>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            
                            <NavItem>
                                <NavLink className='navs' href="/menu">
                                    <h2 className="nav1">Menu</h2>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='navs' href="/profile">
                                    <h2 className="nav1">Profile</h2>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>
            
            <Row>
                <Col md="7">
                    <div>
                        <h1 className="text3">Welcome to Sweetly Coffee Shop</h1>
                        <br></br>
                        <br></br>
                        <h3 className="text4">Get Started..</h3>
                        <h4 className="text5">Find the best coffee for you</h4>
                    </div>
                    <br></br>
                    <Link to='/menu'>
                        <button  className="button1" color="primary">Order Now</button>
                    </Link>
                    <br></br>
                    <br></br>
                    <img src={social} className="img3"/>
                </Col>
                <Col className="col2" md="3">
                    <img src={coffee} className="img2"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Home2;