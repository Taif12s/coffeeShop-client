import { Container, Row, Col, CardBody,CardTitle,Card,CardSubtitle,CardText,CardImg,ListGroup,ListGroupItem,CardLink, Label} from "reactstrap";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from '../Images/logo.png';
import coffee from "../Images/coffee.png";
import userI from "../Images/user.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getProfiles, delUser, updateUser } from "../Features/UserSlice";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,} from "reactstrap";


function getemail (){
    let email = localStorage.getItem('email');
    if (email){
        return JSON.parse(email);
    } else{
        return null;
    }
}

function Profile (){
    const profiles = useSelector((state) => state.users.user);
    
    const userFromRedux = useSelector((state) => state.users.user);
    const user = getemail() || userFromRedux;
    
    let [Useremail, setUseremail] = useState("");
    let [Userid, setUserid] = useState("");
    let [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfiles());
    }, [profiles]);

    const toggle = (uid,pemail) => {
        setModal(!modal);
        setUseremail(pemail);
        setUserid(uid);
    };

    const handleUpdate = async () => {
        const pdata = {
            pemail: Useremail,
            uid: Userid,
        };

        dispatch(updateUser(pdata));
        dispatch(getProfiles());
        navigate("/profile");
    };

    const handleDelete = (Userid) => {
        dispatch(delUser(Userid));
        navigate("/");
    };
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation' light expand="md">
                    <Link to='/home'><img src={Logo} alt="logo" className="logo"/></Link>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink className='navs' href="/">
                                    <h2 className="nav1">Logout</h2>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>
            
            <Row >
                <Col className="col1" md="8">
                <Card style={{width: '30rem'}}>
                    <img alt="Card" src={userI} style={{ width: "150px" }}/>
                    <CardBody>
                        <CardTitle tag="h5" style={{ color: "#935E28", fontSize: "30px" }}>
                            Welcome {user.name}
                        </CardTitle>
                        <br></br>
                        <CardText>
                            <div>
                                <div>
                                    <Label className="lableCard"><FaUserEdit /></Label>
                                    <span>{user.name}</span>
                                </div>
                                <div>
                                    <Label className="lableCard"><MdOutlineEmail /></Label>
                                    <span>{user.email}</span>
                                </div>
                                <div>
                                    <Label className="lableCard"><FaPhone /></Label>
                                    <span>{user.phone}</span>
                                </div>
                            </div>
                        </CardText>
                    </CardBody>
                    <CardBody>
                        <CardLink href="#" onClick={() => toggle(user._id, user.email)}>Update Your Account</CardLink>
                        <CardLink href="#" onClick={() => handleDelete(user._id)}>Delete Your Account</CardLink>
                    </CardBody>
                    </Card>
                    <Modal isOpen={modal} toggle={toggle} centered>
                        <ModalHeader toggle={toggle}>Updated Your Information</ModalHeader>
                        <ModalBody>
                        <Input
                            id="share"
                            name="share"
                            type="textarea"
                            value={Useremail}
                            onChange={(e) => {setUseremail(e.target.value);}}
                        />
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={() => {handleUpdate(); toggle();}}>
                            UPDATE
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                        </ModalFooter>
                    </Modal>
                </Col>
                <Col className="col2" md="3">
                    <img src={coffee} className="img"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Profile;