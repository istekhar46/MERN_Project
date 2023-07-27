import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useState } from "react";

const RegisterScreen = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [cnfPassword, SetCnfPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
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
          <Form.Group className="my-2" controlId="cnfPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter your Password"
              value={password}
              onChange={(e) => SetCnfPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Sign Up
          </Button>

          <Row className="py-3">
            <Col>
              Already have account? <Link to="/login">Login Here</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
