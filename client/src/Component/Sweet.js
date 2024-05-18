import { Container, Label, Input, Button, Row, Col, CardBody, CardTitle, Card } from "reactstrap";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../Images/logo.png';

import tiramisu from "../Images/tiramisu.png";
import cookies from "../Images/cookies.webp";
import Macaroon from "../Images/Macaroon.png";
import { Link } from "react-router-dom";

function Sweet() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [selectedValue, setSelectedValue] = useState(null);
    const handleRadioChange = (e) => { setSelectedValue(e.target.value) };

    const [quantities, setQuantities] = useState({
        tiramisu: 1,
        cookies: 1,
        macaroon: 1
    });

    const handleQuantityChange = (e, sweetType) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= 10) {
            setQuantities({
                ...quantities,
                [sweetType]: value
            });
        }
    };

    return (
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <Link to='/menu'><img src={Logo} alt="logo" className="logo" /></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink className='navs' href="/home">
                                    <h2>Home</h2>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navs' href="/menu">
                                    <h2 className="nav1">Menu</h2>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>
            <Row>
                <h1 className="ctext">Sweets</h1>
                <br />
                <Col sm='3' className="colC">
                    <Card style={{ width: '18rem' }}>
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> Tiramisu </CardTitle>
                        <img alt="Tiramisu" src={tiramisu} style={{width:"200px"}} />
                        <CardBody>
                            <Label className="lableB2">1.200 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.tiramisu}
                                onChange={(e) => handleQuantityChange(e, 'tiramisu')}
                                min="0"
                                max="10"
                                className="quantity-input"
                            />
                            <br />
                            <Button className="but">
                                Add to Cart
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm='3'>
                    <Card style={{ width: '18rem' }}>
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> Cookies </CardTitle>
                        <img alt="Cookies" src={cookies} style={{width:"220px"}} />
                        <CardBody>
                            <Label className="lableB2">0.500 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.cookies}
                                onChange={(e) => handleQuantityChange(e, 'cookies')}
                                min="0"
                                max="10"
                                className="quantity-input"
                            />
                            <br />
                            <Button className="but">
                                Add to Cart
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm='3'>
                    <Card style={{ width: '18rem' }}>
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> Macaroon </CardTitle>
                        <img alt="Macaroon" src={Macaroon} style={{width:"245px"}} />
                        <CardBody>
                            <Label className="lableB2">0.300 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.macaroon}
                                onChange={(e) => handleQuantityChange(e, 'macaroon')}
                                min="0"
                                max="10"
                                className="quantity-input"
                            />
                            <br />
                            <Button className="but">
                                Add to Cart
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Sweet;
