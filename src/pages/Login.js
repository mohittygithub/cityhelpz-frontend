import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { PATHS } from "../constants/paths";
import { login } from "../redux/user/userActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const disptach = useDispatch();
  const history = useHistory();
  const userReducer = useSelector((state) => state.userReducer);
  const { token, error } = userReducer;

  const formHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Username and password cannot be blank");
      return;
    }
    disptach(login(username, password));
  };

  useEffect(() => {
    token && history.push(PATHS.HOME);
    error && toast.error(error);
  }, [error, history, token]);
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-25 mt-5" onSubmit={formHandler}>
        <h1 className="mb-4">Login</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
