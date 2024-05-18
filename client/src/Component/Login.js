import { Container, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,} from 'reactstrap';
import logo2 from '../Images/logo2.png';
import coffee from "../Images/coffee.png";
import { useNavigate, Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {LoginValid} from '../Validation/LoginValidation';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import {login} from "../Features/UserSlice";

function Login(){
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user=useSelector((state)=>state.users.user);
    const isSuccess=useSelector((state)=>state.users.isSuccess);
    const isError=useSelector((state)=>state.users.isError);

    const { 
        register,
        handleSubmit: submitForm,
        formState:{errors},
    }=useForm({resolver: yupResolver(LoginValid)});

    useEffect(() => {
        if (user  &&  isSuccess) {
          navigate("/home");
        }
        if (isError) {
          alert("Invalid User..");
          navigate("/login");
        }
    }, [user, isSuccess, isError]);

    const handleSubmit = (formData) => {
        const data={
            //sending the data 
            email:email, //from the state variable
            password:password,
        }
        dispatch(login(data))
    };

    return(
        <Container fluid className="farm-background">
            <Row className="row">
                <Navbar className='navigation2' light expand="md">
                    <Link to="/"><img src={logo2} alt="logo" className="logo2"/></Link>
                </Navbar>
            </Row>

            <Row>
            <Col className="col1" md="8">
                    <form className="div-form">

                        <div className="text-container">
                        <h1 className="text_login"> Create Account</h1>
                        </div>

                        <br></br>
                            
                        <section>     
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="Email" 
                                    name="email" 
                                    placeholder="Enter Your Email"
                                    type="email"
                                    {
                                        ...register('email',{ value: {email},
                                          onChange:(e)=>setemail(e.target.value)
                                        })
                                    }
                                />
                                <p className="error">{errors.email?.message}</p>
                            </div>
                               
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    {
                                        ...register("password",{ value: {password},
                                          onChange:(e)=>setpassword(e.target.value)
                                        })
                                    }
                                />
                                <p className="error">{errors.password?.message}</p>
                            </div>

                            <br></br>
                                        
                            <div>
                                <button className="button2" color="primary" onClick={submitForm(handleSubmit)}>
                                    Login
                                </button>
                            </div>
                            <br></br>

                            <div>
                                <Label className="form-lable">Don't have account? <Link to="/signup">SignUp</Link></Label>
                            </div>
                        </section>
                    </form>
                </Col>
                <Col className="col2" md="3">
                    <img src={coffee} className="img"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Login;
