import { Container, Label, Input, Row, Col} from "reactstrap";
import { Navbar } from 'reactstrap';
import logo2 from '../Images/logo2.png';
import coffee from "../Images/coffee.png";
import {yupResolver} from '@hookform/resolvers/yup';
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from 'react-hook-form'; 
import { useNavigate, Link } from "react-router-dom";
import { userSchemaValidation } from "../Validation/UserValidaton";
import { registerUser } from "../Features/UserSlice";

function SignUp(){

    const userList = useSelector((state) => state.users.value);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    //validation
    const { 
        register,
        handleSubmit: submitForm, //submitForm will be called when the form is submitted
        formState:{errors},
    }=useForm({resolver: yupResolver(userSchemaValidation),});

    const handleSubmit = (data) => {
        const userData={
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
        }
        dispatch(registerUser(userData))
        navigate("/login");
        console.log(data);
    };

    return(
        <Container fluid className="farm-background">
            <Row className="row2">
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
                                    id="name" 
                                    name="name"
                                    placeholder="Enter Your Name"
                                    type="text"
                                    value={name}
                                    {
                                        ...register('name',{ value: name,
                                          onChange:(e)=>setname(e.target.value),
                                        })
                                    }
                                />
                                <p className="error">{errors.name?.message}</p>
                            </div>
                                    
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="Email" 
                                    name="email" 
                                    placeholder="Enter Your Email"
                                    type="email"
                                    value={email}
                                    {
                                        ...register('email',{ value: email,
                                          onChange:(e)=>setemail(e.target.value),
                                        })
                                    }
                                />
                                <p className="error">{errors.email?.message}</p>
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Your Phone.No"
                                    type="text"
                                    value={phone}
                                    {
                                        ...register('phone',{ value: phone,
                                          onChange:(e)=>setphone(e.target.value),
                                        })
                                      }
                                />
                                <p className="error">{errors.phone?.message}</p>
                            </div>
                                        
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    value={password}
                                    {
                                        ...register("password",{ value: password,
                                          onChange:(e)=>setpassword(e.target.value),
                                        })
                                    }
                                />
                                <p className="error">{errors.password?.message}</p>
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm Your Password"
                                    type="password"
                                    {
                                        ...register("confirmPassword",{ value: confirmPassword,
                                          onChange:(e)=>setconfirmPassword(e.target.value),
                                        })
                                      }
                                />
                                <p className="error">{errors.confirmPassword?.message}</p>
                            </div>

                            <br></br>
                                        
                            <button className="button2" color="primary" onClick={submitForm(handleSubmit)}>
                                Sign Up
                            </button>
                            <br></br>
                            <br></br>

                            <div>
                                <Label className="form-lable">Have account? <Link to="/login">Login</Link></Label>
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
export default SignUp;