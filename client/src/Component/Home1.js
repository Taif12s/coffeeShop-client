import { Container, Row, Col} from "reactstrap";
import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import Logo from '../Images/logo.png';
import coffee from "../Images/coffee.png";



function Home1 (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <img src={Logo} alt="logo" className="logo"/>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink className='navs'  href="/about">
                                    <h2>AboutUs</h2>
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className='navs'  href="/login">
                                    <h2>Login</h2>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='navs'  href="/signup">
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
                        <h1 className="text">Start Your Day With Coffee....</h1>
                        <br></br>
                        <h3 className="text1">Choose and taste delicious coffee and sweet from the best coffee shop</h3>
                    </div>
                </Col>
                <Col className="col2" md="3">
                    <img src={coffee} className="img"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Home1;