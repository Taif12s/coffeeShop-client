import { Container, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import Logo from '../Images/logo.png';
import coffee from "../Images/coffee.png";
import { Link } from "react-router-dom";

function AboutUs (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            
                            <NavItem>
                                <NavLink className='navs' href="/login">
                                    <h2>Login</h2>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='navs' href="/signup">
                                    <h2 className="nav1">SignUp</h2>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>

            
            <Row>
                <Col className="col1" md="8">
                    <div className="text-container">
                        <h1 className="text-h1">Welcome to Sweetly Coffee Shop</h1>
                        <p className="text-p">
                        Where our passion for coffee drives us to create a warm and inviting space for coffee lovers. 
                        From sourcing the highest quality beans to expertly trained baristas, 
                        we strive for excellence in every cup. With a cozy atmosphere and friendly staff, 
                        we offer a wide selection of beverages to satisfy every taste. 
                        We support local artists and practice sustainability to build connections within our community. 
                        Join us at Sweetly Coffee Shop to experience exceptional coffee and genuine hospitality. 
                        Welcome to our coffee haven!
                        </p>
                    </div>
                </Col>
                <Col className="col2" md="3">
                    <img src={coffee} className="img"/>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutUs;