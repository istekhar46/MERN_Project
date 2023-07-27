import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useState } from "react";

const LoginScreen = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Sign In
          </Button>

          <Row className="py-3">
            <Col>
              New User? <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
