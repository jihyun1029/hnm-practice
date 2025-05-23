import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        // console.log("login user function issue");
        event.preventDefault();
        console.log("login user function issue");
        setAuthenticate(true);
        navigate('/');
    };

    return (
        <Container className="login-container">
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    );
};

export default Login;