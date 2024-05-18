import { Container, Label, Input, Button, Row, Col, CardBody, CardTitle, Card, CardSubtitle, CardText, CardImg, ListGroup, ListGroupItem, CardLink } from "reactstrap";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../Images/logo.png';

import Latte2 from "../Images/Latte2.png";
import Americano from "../Images/Americano.png";
import V60 from "../Images/V60.png";
import { Link } from "react-router-dom";

function Coffee() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [selectedValue, setSelectedValue] = useState(null);
    const handleRadioChange = (e) => { setSelectedValue(e.target.value) };

    const [quantities, setQuantities] = useState({
        V60_1: 1,
        V60_2: 1,
        V60_3: 1
    });

    const handleQuantityChange = (e, coffeeType) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= 10) {
            setQuantities({
                ...quantities,
                [coffeeType]: value
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
                <h1 className="ctext">Coffee</h1>
                <br />
                <Col sm='3' className="colC">
                    <Card style={{ width: '18rem' }}>
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> V60 </CardTitle>
                        <img alt="V60" src={Latte2} className="americanoImg" />
                        <CardBody>
                            <Label className="lableB">
                                <input type='radio' name='group1' value='cold' checked={selectedValue === 'cold'} onChange={handleRadioChange} /> Cold
                            </Label>
                            {'          '}
                            <Label className="lableB">
                                <input type='radio' name='group1' value='hot' checked={selectedValue === 'hot'} onChange={handleRadioChange} /> Hot
                            </Label>
                            <br />
                            <Label className="lableB2">1.200 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.V60_1}
                                onChange={(e) => handleQuantityChange(e, 'V60_1')}
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
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> V60 </CardTitle>
                        <img alt="V60" src={Americano} className="americanoImg" />
                        <CardBody>
                            <Label className="lableB">
                                <input type='radio' name='group2' value='cold' checked={selectedValue === 'cold'} onChange={handleRadioChange} /> Cold
                            </Label>
                            {'          '}
                            <Label className="lableB">
                                <input type='radio' name='group2' value='hot' checked={selectedValue === 'hot'} onChange={handleRadioChange} /> Hot
                            </Label>
                            <br />
                            <Label className="lableB2">1.800 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.V60_2}
                                onChange={(e) => handleQuantityChange(e, 'V60_2')}
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
                        <CardTitle tag="h2" className="cardt" style={{ color: '#A44F3E' }}> V60 </CardTitle>
                        <img alt="V60" src={V60} className="americanoImg" />
                        <CardBody>
                            <Label className="lableB">
                                <input type='radio' name='group3' value='cold' checked={selectedValue === 'cold'} onChange={handleRadioChange} /> Cold
                            </Label>
                            {'          '}
                            <Label className="lableB">
                                <input type='radio' name='group3' value='hot' checked={selectedValue === 'hot'} onChange={handleRadioChange} /> Hot
                            </Label>
                            <br />
                            <Label className="lableB2">2.000 OMR</Label>
                            <br />
                            <Input
                                type="number"
                                value={quantities.V60_3}
                                onChange={(e) => handleQuantityChange(e, 'V60_3')}
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

export default Coffee;
